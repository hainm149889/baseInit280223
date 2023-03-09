import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContentModal: {
    paddingHorizontal: ScreenUtils.scale(24),
    paddingTop: ScreenUtils.scale(36),
  },
  optionUserContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: ScreenUtils.scale(8),
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnClickCount: {
    flex: 0.4,
    alignItems: 'center',
    paddingVertical: ScreenUtils.scale(8),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Themes.colors.collGray40,
    borderRadius: ScreenUtils.scale(4),
  },
  inputUserNumber: {
    flex: 1,
    marginHorizontal: ScreenUtils.scale(4),
    paddingBottom: ScreenUtils.scale(8),
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '800',
    ...Themes.font.medium,
    color: Themes.colors.textPrimary,
  },
  btnConfirmUser: {
    flex: 1,
    backgroundColor: Themes.colors.blue29,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ScreenUtils.scale(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Themes.colors.collGray40,
    borderRadius: ScreenUtils.scale(4),
  },
  optionMain: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    ...Themes.font.medium,
    color: Themes.colors.blue29,
  },
  subOptionMain: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    ...Themes.font.medium,
    color: Themes.colors.coolGray60,
  },
  txtConfirm: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    ...Themes.font.medium,
    color: Themes.colors.white,
  },
  txtCalculation: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '800',
    ...Themes.font.medium,
    color: Themes.colors.blue29,
  },
});
