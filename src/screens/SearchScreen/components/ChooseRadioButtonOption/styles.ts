import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTxt: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    ...Themes.font.medium,
    color: Themes.colors.textPrimary,
    marginLeft: ScreenUtils.scale(4),
  },
});
