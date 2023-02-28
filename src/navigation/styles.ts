import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  badgeWrapper: {
    position: 'absolute',
    backgroundColor: Themes.colors.danger60,
    justifyContent: 'center',
    alignItems: 'center',
    width: ScreenUtils.scale(10),
    height: ScreenUtils.scale(10),
    top: 0,
    right: 0,
    borderRadius: ScreenUtils.scale(5),
    borderWidth: 1,
    borderColor: Themes.colors.borderColor,
  },
  titleBottomTab: {
    fontSize: 10,
    ...Themes.font.medium,
    fontWeight: '400',
    lineHeight: 15,
  },
  iconHome: {
    width: ScreenUtils.scale(32),
    height: ScreenUtils.scale(32),
    borderRadius: ScreenUtils.scale(20),
    backgroundColor: Themes.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTop: {
    width: ScreenUtils.scale(32),
    height: ScreenUtils.scale(32),
    borderRadius: ScreenUtils.scale(20),
    backgroundColor: Themes.colors.primary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleTop: {
    fontSize: 12,
    ...Themes.font.medium,
    fontWeight: '400',
    lineHeight: 18,
    color: Themes.colors.white,
  },
});
