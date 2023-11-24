node_version:=$(shell node -v)
npm_version:=$(shell npm -v)
timeStamp:=$(shell date +%Y%m%d%H%M%S)
VERSION ?= $(shell head -n 1 debian/changelog| cut -d' ' -f2 | sed 's/[\(\)]*//g')

.DEFAULT_GOAL := www
.PHONY: install build archive test clean web

node_modules:
#	@ npx yarn install
	@ npm install

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

podman:
	@ podman build -t docker.io/iabsis/hcw-patient .

install: web
	@ install -d -m0755 /usr/local/share/hcw/patient
	@ cp -a www/* /usr/local/share/hcw/patient

sign:
	cd android && jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore ~/Documents/Clients/HUG/HUG@Home/android-release-key-playstore.jks app/build/outputs/bundle/release/app-release.aab alias-hug-at-home
	cd android && apksigner sign --ks ~/Documents/Clients/HUG/HUG@Home/android-release-key-playstore.jks app/build/outputs/apk/release/app-release-unsigned.apk

do-release:
	gbp dch  --ignore-branch
	sed -i 's/UNRELEASED/focal/' debian/changelog
	sed -i "s/Version:.*/Version: $(VERSION)/" redhat/hcw-athome-patient.spec
	git add debian/changelog redhat/hcw-athome-patient.spec
	echo "You can run now:\n git commit -m \"New release ${VERSION}\""


INFO := @bash -c '\
  printf $(YELLOW); \
  echo "=> $$1"; \
printf $(NC)' SOME_VALUE
