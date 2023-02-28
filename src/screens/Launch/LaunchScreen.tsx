import {SCREENS} from '@configs';
import {useStatusBar} from '@hooks';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Images} from '@themes';
import React, {FunctionComponent, useCallback} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

export interface LaunchScreenRouteParams {}

interface Props {}

export const LaunchScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  useStatusBar('dark-content');
  const insets = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate(SCREENS.LOGIN_SCREEN);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }, [navigation]),
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <FastImage
        source={Images.splash}
        style={styles.backgroundImg}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
