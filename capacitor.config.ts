import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'next-test',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    hostname: 'localhost:3000',
  },
};

export default config;
