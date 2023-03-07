import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnChooseUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ScreenUtils.scale(8),
    paddingVertical: ScreenUtils.scale(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Themes.colors.collGray40,
    borderRadius: ScreenUtils.scale(4),
    marginTop: ScreenUtils.scale(10),
  },
  txtChooseUser: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    ...Themes.font.medium,
    color: Themes.colors.textPrimary,
  },
});
