/* eslint-disable react-native/no-inline-styles */
import {SCREENS} from '@configs';
import {NavigationUtils, ScreenUtils} from '@helpers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AccountScreen, HomeScreen} from '@screens';

import {translate} from '@shared';
import {Themes} from '@themes';
import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

export type HomeParamsList = {
  [SCREENS.HOME]: undefined;
};

const Tab = createBottomTabNavigator();
const HomeStackNavigator = NavigationUtils.createNavigation<HomeParamsList>();

const getTabBarIconImage = (
  title?: string,
  focused?: boolean,
  isNotification?: boolean,
  isCheckScroll?: boolean,
) => {
  return (
    <View
      style={
        ScreenUtils.isPad()
          ? {
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              paddingBottom: ScreenUtils.scale(7),
            }
          : {
              justifyContent: 'center',
              alignItems: 'center',
            }
      }>
      {title === translate('label.tab.home') && focused ? (
        !isCheckScroll ? (
          <View style={styles.iconHome}>
            <Text>home</Text>
          </View>
        ) : (
          <View style={styles.iconTop}>
            <Text>home</Text>
            <Text style={styles.titleTop}>TOP</Text>
          </View>
        )
      ) : (
        <>
          <Text>home</Text>
          <Text
            style={[
              styles.titleBottomTab,
              {
                color: focused
                  ? Themes.colors.primary
                  : Themes.colors.coolGray60,
              },
            ]}>
            {title}
          </Text>
        </>
      )}
      {!!isNotification && <View style={styles.badgeWrapper} />}
    </View>
  );
};

function HomeStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName={SCREENS.HOME}>
      <HomeStackNavigator.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

export function BottomTabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HomeStack}
      screenOptions={{
        tabBarActiveTintColor: Themes.colors.white,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: ScreenUtils.scale(40) + insets.bottom,
          backgroundColor: Themes.colors.white,
          alignItems: 'center',
        },
        tabBarBadgeStyle: {
          fontSize: 10,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name={SCREENS.HomeStack}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage(translate('home'), focused, false),
        }}
      />
      <Tab.Screen
        name={SCREENS.AccountScreen}
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage(translate('home'), focused),
        }}
      />

      {/* <Tab.Screen
        name={SCREENS.HomeStack}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('ic-bid', translate('home'), focused),
        }}
        initialParams={{isShowBackOnHeader: false}}
      />

      <Tab.Screen
        name={SCREENS.HomeStack}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('ic-buy', translate('home'), focused),
        }}
        initialParams={{isShowBackOnHeader: false}}
      />
      <Tab.Screen
        name={SCREENS.HomeStack}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('ic-profile', translate('home'), focused),
        }}
      /> */}
    </Tab.Navigator>
  );
}
