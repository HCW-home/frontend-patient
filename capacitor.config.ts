import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hug_at_home',
  appName: 'hug_at_home',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      'android-targetSdkVersion': '31',
      BackupWebStorage: 'none'
    }
  }
};

export default config;
