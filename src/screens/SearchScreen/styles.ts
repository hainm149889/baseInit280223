import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  tabBar: {
    backgroundColor: Themes.colors.white,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabTitle: {
    ...Themes.font.medium,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
    color: Themes.colors.coolGray60,
    textAlign: 'center',
  },
  tabTitleActive: {
    color: Themes.colors.blue29,
  },
  separatorStyles: {
    height: ScreenUtils.scale(2),
    borderRadius: ScreenUtils.scale(4),
    marginHorizontal: ScreenUtils.scale(8),
    backgroundColor: Themes.colors.blue29,
  },
});
