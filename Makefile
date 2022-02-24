node_version:=$(shell node -v)
npm_version:=$(shell npm -v)
timeStamp:=$(shell date +%Y%m%d%H%M%S)


.PHONY: install build archive test clean

node_modules:
	npm install
	echo "building in production mode"

build: web

all: android ios
	mkdir platforms/all
	zip -r platforms/all/app-release-all.zip platforms/ios platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk platforms/android/app/build/outputs/apk/debug/app-debug.apk

web: node_modules
	sed -i 's/native/web/g' src/environments/environment.prod.ts
	npx ionic cordova build browser --prod

android: node_modules
	sed -i 's/web/native/g' src/environments/environment.prod.ts
	npx ionic cordova platform add android --prod --release
	npx ionic cordova build android --release --prod
	npx ionic cordova build android --debug

ios: node_modules
	sed -i 's/web/native/g' src/environments/environment.prod.ts
	npx ionic cordova platform add ios --prod --release
	npx ionic cordova prepare ios --release --prod

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
	@ rm -rf dist node_modules www platform plugins
	@ rm -rf dist.tar.gz

INFO := @bash -c '\
  printf $(YELLOW); \
  echo "=> $$1"; \
printf $(NC)' SOME_VALUE
