/**
 * @format
 */
import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import {AppHeadless} from './src/AppHeadless';

LogBox.ignoreAllLogs(true);
console.reportErrorsAsExceptions = false;

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return <AppHeadless />;
  }
  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
