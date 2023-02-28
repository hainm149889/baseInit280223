import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnChangeLang: {
    marginHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(8),
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: ScreenUtils.scale(4),
    backgroundColor: Themes.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLanguage: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    ...Themes.font.mediumItalic,
    color: Themes.colors.black,
  },
});
