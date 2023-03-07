import {ScreenUtils} from '@helpers';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {Metrics, Themes} from '@themes';
import React, {FunctionComponent} from 'react';
import {Platform, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

interface OwnProps {
  style?: ViewStyle;
  isModal?: boolean;
  isGoBack?: boolean;
  leftStyle?: ViewStyle;
  titleGoBack?: string;
  iconGoBack?: string;
  imageGoBack?: any;
  handleGoBack?: () => void;
  titleCenter?: string;
  styleCenter?: ViewStyle;
  isCenter?: boolean;
  onEndEditing?: () => void;
}

type Props = OwnProps;

export const HeaderApp: FunctionComponent<Props> = props => {
  const {
    style,
    isModal,
    titleGoBack,
    leftStyle,
    iconGoBack,
    imageGoBack,
    handleGoBack,
    titleCenter,
    isCenter,
    styleCenter,
    isGoBack = true,
  } = props;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop:
            isModal && Platform.OS === 'android'
              ? ScreenUtils.scale(4)
              : ScreenUtils.scale(4) + insets.top,
        },
        style,
      ]}>
      <View style={[styles.leftContainer, leftStyle]}>
        <TouchableOpacity
          disabled={isGoBack === true ? false : true}
          onPress={handleGoBack ? handleGoBack : navigation.goBack}
          style={[styles.goBackContainer]}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
          {isModal ? (
            <IconAntDesign
              color={Themes.colors.onyx100}
              name={'closesquareo'}
              size={Metrics.icons.medium}
              style={styles.iconGoBack}
            />
          ) : isGoBack === true ? (
            <IconAntDesign
              color={Themes.colors.onyx100}
              name={'left'}
              size={Metrics.icons.medium}
              style={styles.iconGoBack}
            />
          ) : (
            <></>
          )}
          {iconGoBack && (
            <IconAntDesign
              name={iconGoBack}
              size={Metrics.icons.large}
              color={Themes.colors.white}
            />
          )}
          {imageGoBack && (
            <FastImage
              source={imageGoBack}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
          )}
          {!!titleGoBack && <Text style={styles.goBack}>{titleGoBack}</Text>}
        </TouchableOpacity>
      </View>
      {isCenter && (
        <View style={[styles.centerContainer, styleCenter]}>
          {titleCenter && <Text style={styles.goBack}>{titleCenter}</Text>}
        </View>
      )}
      <View style={styles.rightContainer} />
    </View>
  );
};
