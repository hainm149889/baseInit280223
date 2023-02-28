import {NavigationContainerRef, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Platform} from 'react-native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate<T extends object>(name?: string, params?: T) {
  if (navigationRef?.current) {
    navigationRef.current.navigate(name || '', params);
  }
}

export function goBack() {
  if (navigationRef?.current?.canGoBack()) {
    navigationRef.current.goBack();
  }
}

export function createNavigation<ParamList extends ParamListBase>() {
  return Platform.OS === 'android'
    ? createNativeStackNavigator<ParamList>()
    : createStackNavigator<ParamList>();
}
