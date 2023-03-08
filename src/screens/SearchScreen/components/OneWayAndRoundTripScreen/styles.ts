import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  mainContent: {
    flex: 1,
    padding: ScreenUtils.scale(16),
  },
  findCalendarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnFindCalendar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ScreenUtils.scale(8),
  },
  titleFindCalendar: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    ...Themes.font.medium,
    marginLeft: ScreenUtils.scale(4),
  },
  searchInputContainer: {
    marginTop: ScreenUtils.scale(10),
  },
  searchInput: {
    paddingVertical: ScreenUtils.scale(10),
    paddingHorizontal: ScreenUtils.scale(24),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Themes.colors.collGray40,
    borderRadius: ScreenUtils.scale(4),
    alignItems: 'center',
  },
  iconMapMarker: {
    position: 'absolute',
    top: 12,
    left: 8,
  },
  chooseTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: ScreenUtils.scale(10),
  },
  btnChooseTime: {
    flex: 0.45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ScreenUtils.scale(8),
    paddingVertical: ScreenUtils.scale(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Themes.colors.collGray40,
    borderRadius: ScreenUtils.scale(4),
    backgroundColor: Themes.colors.colGray10,
  },
  txtChooseTime: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    ...Themes.font.medium,
    marginLeft: ScreenUtils.scale(4),
  },

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

  btnSearch: {
    marginTop: ScreenUtils.scale(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Themes.colors.collGray40,
    borderRadius: ScreenUtils.scale(4),
    paddingVertical: ScreenUtils.scale(10),
    backgroundColor: Themes.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  txtSearch: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    ...Themes.font.medium,
    color: Themes.colors.white,
    marginLeft: ScreenUtils.scale(4),
  },
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
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: ScreenUtils.scale(10),
    borderTopColor: Themes.colors.collGray40,
  },
  contentLeft: {
    width: ScreenUtils.scale(80),
  },
});
