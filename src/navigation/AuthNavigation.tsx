import {SCREENS} from '@configs';
import {NavigationUtils} from '@helpers';
import {LoginContainer} from '@screens';
import React from 'react';

export type AuthStackParamList = {
  [SCREENS.LOGIN_SCREEN]: undefined;
};

const AuthStack = NavigationUtils.createNavigation<AuthStackParamList>();

export function AuthNavigation() {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREENS.LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen
        name={SCREENS.LOGIN_SCREEN}
        component={LoginContainer}
      />
    </AuthStack.Navigator>
  );
}
