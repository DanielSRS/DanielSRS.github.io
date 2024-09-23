import Constants from 'expo-constants';
import { App } from './src/App';

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.ondevice').default;
}

export default AppEntryPoint;
