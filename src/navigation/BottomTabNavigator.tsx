/* eslint-disable react-native/no-inline-styles */
import {SCREENS} from '@configs';
import {ScreenUtils} from '@helpers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AccountScreen, HomeNavParams, HomeScreen, SearchScreen} from '@screens';

import {translate} from '@shared';
import {Metrics, Themes} from '@themes';
import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export type HomeParamsList = {
  [SCREENS.HOME]: HomeNavParams;
};

const Tab = createBottomTabNavigator();

const getTabBarIconImage = (
  icon: string,
  title?: string,
  focused?: boolean,
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
      <>
        <IconAntDesign
          name={icon}
          size={focused ? Metrics.icons.mediumLarge : Metrics.icons.small}
          color={focused ? Themes.colors.blue29 : Themes.colors.coolGray60}
        />
        <Text
          style={[
            styles.titleBottomTab,
            {
              color: focused ? Themes.colors.blue29 : Themes.colors.coolGray60,
            },
          ]}>
          {title}
        </Text>
      </>
    </View>
  );
};

export function BottomTabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.SEARCH_SCREEN}
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
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('home', translate('BottomTab.home'), focused),
        }}
      />
      <Tab.Screen
        name={SCREENS.SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage(
              'search1',
              translate('BottomTab.search'),
              focused,
            ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={SCREENS.AccountScreen}
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('user', translate('BottomTab.account'), focused),
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
