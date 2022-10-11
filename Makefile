node_version:=$(shell node -v)
npm_version:=$(shell npm -v)
timeStamp:=$(shell date +%Y%m%d%H%M%S)

.DEFAULT_GOAL := www
.PHONY: install build archive test clean web

node_modules:
#	@ npx yarn install
	@ npm install

build: web

all: android ios
	mkdir platforms/all
	zip -r platforms/all/app-release-all.zip platforms/ios platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk platforms/android/app/build/outputs/apk/debug/app-debug.apk

www: node_modules
	sed -i 's/native/web/g' src/environments/environment.prod.ts
	npx ionic cap build browser --prod --no-open

web: www

android: node_modules
	npx ionic cap build android --prod --no-open
	cd android && ./gradlew bundleRelease
	cd android && ./gradlew assembleRelease

android-debug: node_modules
	cd android && ./gradlew assembleDebug

ios: node_modules
	sed -i 's/web/native/g' src/environments/environment.prod.ts
	npx ionic cap build ios --prod --no-open

show:
	@ echo Timestamp: "$(timeStamp)"
	@ echo Node Version: $(node_version)
	@ echo npm_version: $(npm_version)

install:
	@ install -d -m0755 /usr/local/share/hug-home-web
	@ cp -a www/* /usr/local/share/hug-home-patient

archive:
	@ tar -czvf "dosetup-$(timeStamp).tar.gz" dist

test:
	echo "test the app"

clean:
	@ rm -rf node_modules
	@ rm -rf dist.tar.gz

sign:
	jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore ~/Documents/Clients/HUG/HUG@Home/android-release-key-playstore.jks app/build/outputs/bundle/release/app-release.aab alias-hug-at-home
	apksigner sign --ks ~/Documents/Clients/HUG/HUG@Home/android-release-key-playstore.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk


INFO := @bash -c '\
  printf $(YELLOW); \
  echo "=> $$1"; \
printf $(NC)' SOME_VALUE
