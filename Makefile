node_version:=$(shell node -v)
npm_version:=$(shell npm -v)
timeStamp:=$(shell date +%Y%m%d%H%M%S)
VERSION ?= $(shell head -n 1 debian/changelog| cut -d' ' -f2 | sed 's/[\(\)]*//g')

.DEFAULT_GOAL := www
.PHONY: install build archive test clean web

node_modules:
	@ npx yarn install
	@# npm install

build: web

mobile: android ios android-debug
	zip -r app-release-all.zip ios android/app/build/outputs/apk/release/app-release-unsigned.apk android/app/build/outputs/apk/debug/app-debug.apk android/app/build/outputs/bundle/release/app-release.aab

www: node_modules
	npx ionic cap build browser  --no-open

web: www

android: node_modules
	npx ionic cap build android --prod --no-open
	cd android && ./gradlew bundleRelease
	cd android && ./gradlew assembleRelease

android-debug: node_modules
	cd android && ./gradlew assembleDebug

ios: node_modules
	npx ionic cap build ios --prod --no-open

show:
	@ echo Timestamp: "$(timeStamp)"
	@ echo Node Version: $(node_version)
	@ echo npm_version: $(npm_version)

docker:
	@ docker build -t docker.io/iabsis/hcw-patient .

build-podman:
	podman build . -t docker.io/iabsis/hcw-patient
	@ V=$$(cat .version) ; podman tag docker.io/iabsis/hcw-patient:latest docker.io/iabsis/hcw-patient:$$V
	@ podman tag docker.io/iabsis/hcw-patient:latest docker.io/iabsis/hcw-patient:5
	@ V=$$(cat .version) ; echo "Publish podman now with:\n podman push docker.io/iabsis/hcw-patient:$$V\n podman push docker.io/iabsis/hcw-patient:latest\n podman push docker.io/iabsis/hcw-patient:5"

install: web
	@ install -d -m0755 /usr/local/share/hcw/patient
	@ cp -a www/* /usr/local/share/hcw/patient

sign:
	cd android && jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore ~/Documents/Clients/HUG/HUG@Home/android-release-key-playstore.jks app/build/outputs/bundle/release/app-release.aab alias-hug-at-home
	cd android && apksigner sign --ks ~/Documents/Clients/HUG/HUG@Home/android-release-key-playstore.jks app/build/outputs/apk/release/app-release-unsigned.apk

update-redhat-release:
	@ V=$$(cat .version) ; sed -i "s/Version:.*/Version: $$V/" redhat/hcw-athome-patient.spec

create-debian-release:
	@ gbp dch  --ignore-branch
	@ sed -i 's/UNRELEASED/focal/' debian/changelog
	@ head -n 1 debian/changelog| cut -d' ' -f2 | sed 's/[\(\)]*//g' > .version
	@ V=$$(cat .version) ; echo "Release: $$V"

do-git-release:
	@ git add debian/changelog redhat/hcw-athome-patient.spec
	@ V=$$(cat .version) ; git tag $$V
	@ V=$$(cat .version) ; echo "Publish git now with:\n git commit -m \"New release $$V\"\n git push --tag"

do-release-all: create-debian-release update-redhat-release do-git-release build-podman

INFO := @bash -c '\
  printf $(YELLOW); \
  echo "=> $$1"; \
printf $(NC)' SOME_VALUE
