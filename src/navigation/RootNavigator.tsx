import {SCREENS} from '@configs';
import {NavigationUtils} from '@helpers';
import {BottomTabNavigator} from '@navigation';
import {
  LaunchScreen,
  LaunchScreenRouteParams,
  LoginScreen,
  // OnBoardingScreen,
} from '@screens';
import React from 'react';

export type RootParamList = {
  [SCREENS.LAUNCH]: LaunchScreenRouteParams;
  [SCREENS.ON_BOARDING]: undefined;
  [SCREENS.LOGIN_SCREEN]: undefined;
  [SCREENS.BottomTabNavigation]: undefined;
};

const RootStack = NavigationUtils.createNavigation<RootParamList>();

export function RootNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={SCREENS.LAUNCH}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      // mode={"modal"}
    >
      <RootStack.Screen name={SCREENS.LAUNCH} component={LaunchScreen} />
      <RootStack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />
      {/* <RootStack.Screen
        name={SCREENS.ON_BOARDING}
        component={OnBoardingScreen}
      /> */}
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
