import {SCREENS} from '@configs';
import {NavigationUtils} from '@helpers';
import {AuthNavigation, BottomTabNavigator} from '@navigation';
import {LaunchScreen, LaunchScreenRouteParams} from '@screens';
import React from 'react';

export type RootParamList = {
  [SCREENS.LAUNCH]: LaunchScreenRouteParams;
  [SCREENS.ON_BOARDING]: undefined;
  [SCREENS.LOGIN_SCREEN]: undefined;
  [SCREENS.BottomTabNavigation]: undefined;
  [SCREENS.AuthNavigation]: undefined;
};

const RootStack = NavigationUtils.createNavigation<RootParamList>();

export function RootNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={SCREENS.LAUNCH}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <RootStack.Screen name={SCREENS.LAUNCH} component={LaunchScreen} />
      <RootStack.Screen
        name={SCREENS.AuthNavigation}
        component={AuthNavigation}
      />
      <RootStack.Screen
        name={SCREENS.BottomTabNavigation}
        component={BottomTabNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
}
