import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: ScreenUtils.scale(361),
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: ScreenUtils.scale(30),
  },
  title: {
    width: '100%',
    textAlign: 'center',
    ...Themes.font.bold,
    color: Themes.colors.coolGray100,
    fontSize: 16,
  },
  description: {
    width: '100%',
    textAlign: 'center',
    ...Themes.font.regular,
    paddingHorizontal: ScreenUtils.scale(50),
    marginTop: ScreenUtils.scale(10),
    color: Themes.colors.coolGray60,
    lineHeight: 21,
    fontSize: 12,
  },
  containerModal: {
    borderRadius: 12,
    backgroundColor: Themes.colors.white,
    paddingTop: ScreenUtils.scale(20),
    paddingHorizontal: ScreenUtils.scale(20),
  },
  firstLaunchContainer: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  indicator: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
  },
  logoProduct: {
    marginTop: ScreenUtils.scale(141),
  },
  txtPoweredBy: {
    position: 'absolute',
    bottom: ScreenUtils.scale(108),
    ...Themes.font.regular,
    color: Themes.colors.coolGray60,
    fontSize: 12,
  },
  imgLogoContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: ScreenUtils.scale(70),
  },
  imgLogo: {
    width: ScreenUtils.scale(86),
    height: ScreenUtils.scale(27),
    tintColor: Themes.colors.coolGray100,
    marginRight: ScreenUtils.scale(20),
  },
  imgLogo2: {
    width: ScreenUtils.scale(68),
    height: ScreenUtils.scale(24),
    tintColor: Themes.colors.coolGray100,
  },
  containerN: {
    flex: 1,
  },
  contentContainerN: {paddingHorizontal: ScreenUtils.scale(16)},
  logoContainerN: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ScreenUtils.scale(60),
  },
  imageN: {
    width: ScreenUtils.WIDTH_SCREEN,
    height: ScreenUtils.HEIGHT_SCREEN / 2.3,
    position: 'absolute',
    top: 110,
    left: 6,
    right: 0,
    bottom: 0,
  },
  imageNtwo: {
    width: ScreenUtils.WIDTH_SCREEN,
    height: ScreenUtils.HEIGHT_SCREEN / 2.15,
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mainContent: {
    position: 'absolute',
    paddingHorizontal: ScreenUtils.scale(16),
    top: ScreenUtils.HEIGHT_SCREEN / 1.7,
  },
  mainContentTwo: {
    position: 'absolute',
    paddingHorizontal: ScreenUtils.scale(16),
    top: ScreenUtils.HEIGHT_SCREEN / 1.5,
  },
  txtDescriptionN: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.onyx70,
    fontWeight: '400',
  },

  itemSourceFlgN: {
    width: (ScreenUtils.WIDTH_SCREEN - ScreenUtils.scale(36)) / 2,
    alignItems: 'center',
    marginBottom: ScreenUtils.scale(6),
  },
  flistStyleN: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: Themes.colors.white,
    marginTop: ScreenUtils.scale(35),
  },
  btnRadioN: {
    marginVertical: ScreenUtils.scale(10),
  },
  itemProviderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: (ScreenUtils.WIDTH_SCREEN - ScreenUtils.scale(44)) / 3,
    borderRadius: ScreenUtils.scale(4),
    borderWidth: 2,
    borderColor: Themes.colors.colGray20,
    marginBottom: ScreenUtils.scale(8),
    padding: ScreenUtils.scale(8),
  },
  imgProvider: {
    width: 100,
    height: 50,
    borderRadius: ScreenUtils.scale(4),
    alignSelf: 'center',
  },
  txtTitleProvider: {
    marginTop: ScreenUtils.scale(4),
    fontSize: ScreenUtils.scale(12),
    fontWeight: '700',
    color: Themes.colors.black,
    ...Themes.font.medium,
    textAlign: 'center',
  },
  detailProvider: {
    marginTop: ScreenUtils.scale(4),
    fontSize: ScreenUtils.scale(10),
    fontWeight: '700',
    color: Themes.colors.coolGray60,
    ...Themes.font.regular,
  },
  dot: {
    height: ScreenUtils.scale(8),
    width: ScreenUtils.scale(8),
    borderRadius: ScreenUtils.scale(4),
    backgroundColor: Themes.colors.primary,
    opacity: 0.3,
    marginHorizontal: ScreenUtils.scale(5),
    marginBottom: -ScreenUtils.scale(45),
  },
  activeDot: {
    height: ScreenUtils.scale(12),
    width: ScreenUtils.scale(12),
    borderRadius: ScreenUtils.scale(6),
    backgroundColor: Themes.colors.primary,
    marginBottom: -ScreenUtils.scale(45),
    marginHorizontal: ScreenUtils.scale(5),
  },
  btnFooter: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ScreenUtils.scale(20),
    paddingVertical: ScreenUtils.scale(30),
  },
  btnPrev: {
    width: '45%',
  },
  btnSkip: {
    width: '25%',
    alignItems: 'flex-end',
  },
  btnNext: {
    width: '30%',
    alignItems: 'flex-end',
  },
  txtSkip: {
    color: Themes.colors.black,
    fontSize: ScreenUtils.scale(14),
    fontWeight: '700',
    ...Themes.font.regular,
  },
  txtNext: {
    color: Themes.colors.primary,
    fontSize: ScreenUtils.scale(14),
    fontWeight: '700',
    ...Themes.font.regular,
  },
  titleWelcome: {
    fontSize: 16,
    fontWeight: '700',
    color: Themes.colors.black,
    ...Themes.font.light,
    marginLeft: ScreenUtils.scale(7),
  },
});
