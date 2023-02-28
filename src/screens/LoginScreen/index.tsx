import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IconWorl from 'react-native-vector-icons/Fontisto';
import {Metrics, Themes} from '@themes';
import {useBoolean} from '@hooks';
import {BottomSheet} from '@components';
import {DataConstant, SCREENS} from '@configs';
import {connect, useDispatch, useSelector} from 'react-redux';
import {AccountAction} from '@redux';
import {IRootState} from 'src/redux/reducers';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [
    isShowChangeLanguageModal,
    setShowChangeLanguageModal,
    setHideChangeLanguageModal,
  ] = useBoolean(false);

  const accLanguage = useSelector(
    (state: IRootState) => state.account.language,
  ) as string;

  const languageSelected = Object.values(DataConstant.LANGUAGES).find(
    item => item.value === accLanguage,
  );

  const arrOptions = [
    {
      title: DataConstant.LANGUAGES.VietNam.label,
      onPress: () => {
        setLanguage(DataConstant.LANGUAGES.VietNam.value);
        setHideChangeLanguageModal();
      },
    },
    {
      title: DataConstant.LANGUAGES.English.label,
      onPress: () => {
        setLanguage(DataConstant.LANGUAGES.English.value);
        setHideChangeLanguageModal();
      },
    },
    {
      title: DataConstant.LANGUAGES.Japan.label,
      onPress: () => {
        setLanguage(DataConstant.LANGUAGES.Japan.value);
        setHideChangeLanguageModal();
      },
    },
  ];
  const setLanguage = (value: any) => {
    dispatch(AccountAction.changeLanguageWithLaunch({language: value}));
  };

  const _goToHome = () => {
    navigation.navigate(SCREENS.BottomTabNavigation, {
      screen: SCREENS.HomeStack,
    });
  };

  return (
    <View style={styles.container}>
      <IconWorl
        name="world-o"
        size={Metrics.icons.large}
        color={Themes.colors.blue008}
        onPress={setShowChangeLanguageModal}
      />
      <TouchableOpacity style={styles.btnLogin} onPress={_goToHome}>
        <Text>LoginScreen</Text>
      </TouchableOpacity>
      <BottomSheet
        isTranslated={true}
        isSearch={false}
        arrOption={arrOptions}
        isShowModal={isShowChangeLanguageModal}
        onCloseModal={setHideChangeLanguageModal}
        showTitle={false}
        chooseValue={languageSelected?.label}
      />
    </View>
  );
};
const mapStateToProps = (state: any) => ({
  language: state.account.language,
});

const mapDispatchToProps = () => ({});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
