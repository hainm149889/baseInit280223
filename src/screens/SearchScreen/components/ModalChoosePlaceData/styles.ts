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
    height: ScreenUtils.HEIGHT_SCREEN / 1.7,
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
  itemSearchByKeyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: ScreenUtils.scale(10),
    borderBottomColor: Themes.colors.colGray20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  txtItemSearchByKeyContainer: {
    marginLeft: ScreenUtils.scale(10),
  },
  txtItemSearchByKeyMain: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    ...Themes.font.medium,
    color: Themes.colors.textPrimary,
  },
  txtItemSearchByKeySub: {
    marginTop: ScreenUtils.scale(5),
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    ...Themes.font.medium,
    color: Themes.colors.collGray40,
  },
  btnCloseModalChoosePlace: {
    position: 'absolute',
    top: -ScreenUtils.scale(15),
    right: -ScreenUtils.scale(15),
    backgroundColor: Themes.colors.white,
    padding: ScreenUtils.scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ScreenUtils.scale(20),
  },
  headerSearchModalChoosePlace: {
    marginTop: ScreenUtils.scale(10),
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: ScreenUtils.scale(10),
    paddingHorizontal: ScreenUtils.scale(10),
    borderRadius: ScreenUtils.scale(4),
    paddingVertical: ScreenUtils.scale(8),
    flexDirection: 'row',
    alignContent: 'center',
    borderColor: Themes.colors.colGray20,
  },
  inputSearchChoosePlace: {
    flex: 1,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    marginLeft: ScreenUtils.scale(8),
  },
  flex01: {
    flex: 0.1,
  },
  parentCate: {
    borderRightWidth: StyleSheet.hairlineWidth * 2,
    marginBottom: ScreenUtils.scale(10),
    paddingVertical: ScreenUtils.scale(10),
  },
  txtNameAirport: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    ...Themes.font.medium,
    color: Themes.colors.coolGray60,
  },
});
