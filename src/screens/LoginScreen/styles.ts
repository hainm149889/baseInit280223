import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Themes.colors.white,
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: ScreenUtils.scale(8),
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: ScreenUtils.scale(5),
    paddingHorizontal: ScreenUtils.scale(16),
    backgroundColor: Themes.colors.blue008,
    marginTop: ScreenUtils.scale(16),
  },
});
