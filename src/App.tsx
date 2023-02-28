import {NavigationUtils, ScreenUtils} from '@helpers';
import {
  NavigationContainer,
  NavigationState,
  PartialState,
} from '@react-navigation/native';
import {store} from '@redux';

import {Themes} from '@themes';
import React, {FunctionComponent, useState} from 'react';
import {Platform, StatusBar, StyleSheet, UIManager, View} from 'react-native';
import codePush from 'react-native-code-push';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {RootNavigator} from './navigation/RootNavigator';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const [routeName, setRouteName] = useState('Unknown');

  const getActiveRouteName = (
    state: NavigationState | PartialState<NavigationState> | undefined,
  ): string => {
    if (!state || typeof state.index !== 'number') {
      return 'Unknown';
    }

    const route = state.routes[state.index];

    if (route.state) {
      return getActiveRouteName(route.state);
    }

    return route.name;
  };

  return (
    <SafeAreaProvider>
      <View style={styles.content}>
        <StatusBar />
        <NavigationContainer
          ref={NavigationUtils.navigationRef}
          onStateChange={state => {
            const newRouteName = getActiveRouteName(state);
            if (routeName !== newRouteName) {
              setRouteName(newRouteName);
            }
          }}>
          <RootNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
};

const JanboxProvider: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const Janbox = codePush(codePushOptions)(JanboxProvider);

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Themes.colors.black025,
    zIndex: 1,
  },
  loading: {
    width: ScreenUtils.scale(20),
    height: ScreenUtils.scale(20),
  },
});

export default Janbox;
