import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Themes.colors.coolGray20Transparent,
  },
  sourceContainer: {
    width: ScreenUtils.WIDTH_SCREEN - ScreenUtils.scale(32),
    height: ScreenUtils.HEIGHT_SCREEN / 2,
    backgroundColor: Themes.colors.white,
    position: 'absolute',
    borderRadius: ScreenUtils.scale(4),
    paddingVertical: ScreenUtils.scale(8),
  },
  content: {
    flex: 1,
    padding: ScreenUtils.scale(8),
  },
  contentLeft: {
    width: ScreenUtils.scale(80),
  },
});
