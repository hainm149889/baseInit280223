import {ScreenUtils} from '@helpers';
import {Themes} from '@themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: ScreenUtils.scale(8),
    paddingBottom: ScreenUtils.scale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Themes.colors.white,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
  },
  leftContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconButton: {
    marginRight: ScreenUtils.scale(4),
    paddingRight: ScreenUtils.scale(6),
    paddingVertical: ScreenUtils.scale(8),
  },
  leftIcon: {
    alignSelf: 'center',
  },
  rightContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  centerContainer: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCenter: {
    flex: 1,
    fontSize: 18,
    ...Themes.font.light,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: ScreenUtils.scale(4),
  },
  goBackContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: ScreenUtils.scale(8),
  },
  icon: {
    width: ScreenUtils.scale(20),
    height: ScreenUtils.scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: ScreenUtils.scale(8),
  },
  goBack: {
    ...Themes.font.medium,
    fontSize: 16,
    lineHeight: 16,
    color: Themes.colors.onyx100,
    fontWeight: '700',
    marginLeft: ScreenUtils.scale(8),
  },
  iconGoBack: {
    alignSelf: 'center',
  },
});
