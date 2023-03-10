/* eslint-disable react-native/no-inline-styles */
import {accountApi} from '@api';
import {BottomSheet} from '@components';
import {CONSTANT, DataConstant, SCREENS} from '@configs';
import {ScreenUtils} from '@helpers';
import {RequestParamsLogin} from '@models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccountAction} from '@redux';
import {translate} from '@shared';
import {Images, Metrics, Themes} from '@themes';
import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Modalize} from 'react-native-modalize';
import {
  default as IconFontisto,
  default as IconWorl,
} from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {connect, useDispatch, useSelector} from 'react-redux';
import {IRootState} from 'src/redux/reducers';
import {styles} from './styles';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [agentCode, setAgentCode] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [agentCodeError, setAgentCodeError] = useState<string>('');
  const [userNameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [checkedRemember, setCheckedRemember] = useState<boolean>(true);
  const [isShowPass, setShowPass] = useState<boolean>(true);

  const modalizeRef = useRef<Modalize>(null);

  const openModalLanguage = () => {
    modalizeRef.current?.open();
  };
  const closeModalLanguage = () => {
    modalizeRef.current?.close();
  };

  const checkRemember = () => {
    setCheckedRemember(!checkedRemember);
  };

  const accLanguage = useSelector(
    (state: IRootState) => state.account.language,
  ) as string;

  const languageSelected = Object.values(DataConstant.LANGUAGES).find(
    item => item.value === accLanguage,
  );

  const arrOptions = [
    {
      countryCode: 'VN',
      title: DataConstant.LANGUAGES.VietNam.label,
      onPress: () => {
        setLanguage(DataConstant.LANGUAGES.VietNam.value);
        closeModalLanguage();
      },
    },
    {
      countryCode: 'GB',
      title: DataConstant.LANGUAGES.English.label,
      onPress: () => {
        setLanguage(DataConstant.LANGUAGES.English.value);
        closeModalLanguage();
      },
    },
    {
      countryCode: 'JP',
      title: DataConstant.LANGUAGES.Japan.label,
      onPress: () => {
        setLanguage(DataConstant.LANGUAGES.Japan.value);
        closeModalLanguage();
      },
    },
  ];
  const setLanguage = (value: any) => {
    dispatch(AccountAction.changeLanguageWithLaunch({language: value}));
  };

  const isDisableBtn =
    agentCode === '' || userName === '' || password === '' ? true : false;

  const checkAgentCode = () => {
    if (agentCode.length < 1 || agentCode === '') {
      setAgentCodeError('Vui lòng nhập giá trị');
      setAgentCode('');
    } else if (agentCode !== agentCode.trim()) {
      setAgentCodeError('Dữ liệu không đúng định dạng');
      setAgentCode('');
    } else {
      setAgentCodeError('');
    }
  };

  const checkUserName = () => {
    if (userName.length < 1 || userName === '') {
      setUsernameError('Vui lòng nhập giá trị');
      setUserName('');
    } else if (userName !== userName.trim()) {
      setUsernameError('Dữ liệu không đúng định dạng');
      setUserName('');
    } else {
      setUsernameError('');
    }
  };

  const checkPassword = () => {
    if (password.length < 1 || password === '') {
      setPasswordError('Vui lòng nhập giá trị');
      setPassword('');
    } else if (password !== password.trim()) {
      setPasswordError('Dữ liệu không đúng định dạng');
      setPassword('');
    } else {
      setPasswordError('');
    }
  };

  const _login = async () => {
    try {
      const requestParams: RequestParamsLogin = {
        AgentCode: agentCode,
        Username: userName,
        Password: password,
        Channel: 2,
        PrivateKey: CONSTANT.PRIVATE_KEY,
      };
      const response = await accountApi.onLogin(requestParams);
      if (response.Success) {
        navigation.navigate(SCREENS.BottomTabNavigation, {
          screen: SCREENS.HOME,
          params: {userData: response?.User},
        });
        console.log(
          '🚀 ~ file: index.tsx:149 ~ const_login= ~ response?.User:',
          response?.User,
        );

        await AsyncStorage.setItem('access_token', response?.User?.TokenApi);
      } else {
        console.log('Lỗi đăng nhập');
      }
    } catch (error) {}
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      style={{height: ScreenUtils.HEIGHT_SCREEN}}
      automaticallyAdjustContentInsets={false}>
      <ImageBackground
        source={Images.mask_bg}
        resizeMode="cover"
        style={styles.image}>
        <Image source={Images.lldLogo} style={styles.imageLogo} />
        <View style={styles.mainContent}>
          <View style={styles.headerContent}>
            <Text style={styles.titleContent}>
              {translate('LoginScreen.titleContent')}
            </Text>
            <IconWorl
              name="world-o"
              size={Metrics.icons.small}
              color={Themes.colors.blue008}
              onPress={openModalLanguage}
            />
          </View>
          <Text style={styles.subContent}>
            {translate('LoginScreen.subContent')}
          </Text>
          <View>
            <TextInput
              value={agentCode}
              onChangeText={txtInput => {
                setAgentCode(txtInput.replace(/  +/g, ' ').trimStart());
              }}
              onFocus={() => setAgentCodeError('')}
              onEndEditing={checkAgentCode}
              autoCorrect={false}
              spellCheck={false}
              style={styles.textInput}
              placeholder={translate('LoginScreen.agentCodePlaceholder')}
              placeholderTextColor={Themes.colors.collGray40}
            />
            {agentCodeError ? (
              <Text
                style={[
                  styles.errorTxt,
                  {opacity: agentCodeError !== '' ? 1 : 0},
                ]}>
                {agentCodeError}
              </Text>
            ) : (
              <Text style={[styles.errorTxt, {opacity: 0}]}>hide</Text>
            )}
          </View>
          <View>
            <TextInput
              value={userName}
              onChangeText={txtInput => {
                setUserName(txtInput.replace(/  +/g, ' ').trimStart());
              }}
              onFocus={() => setUsernameError('')}
              onEndEditing={checkUserName}
              autoCorrect={false}
              spellCheck={false}
              style={styles.textInput}
              placeholder={translate('LoginScreen.userNamePlaceholder')}
              placeholderTextColor={Themes.colors.collGray40}
            />
            {userNameError ? (
              <Text
                style={[
                  styles.errorTxt,
                  {opacity: userNameError !== '' ? 1 : 0},
                ]}>
                {userNameError}
              </Text>
            ) : (
              <Text style={[styles.errorTxt, {opacity: 0}]}>hide</Text>
            )}
          </View>
          <View>
            <TextInput
              value={password}
              onChangeText={txtInput => {
                setPassword(txtInput.replace(/  +/g, ' ').trimStart());
              }}
              onFocus={() => setPasswordError('')}
              onEndEditing={checkPassword}
              autoCorrect={false}
              spellCheck={false}
              style={styles.textInput}
              secureTextEntry={isShowPass ? true : false}
              placeholder={translate('LoginScreen.passwordPlaceholder')}
              placeholderTextColor={Themes.colors.collGray40}
            />
            {passwordError ? (
              <Text
                style={[
                  styles.errorTxt,
                  {opacity: passwordError !== '' ? 1 : 0},
                ]}>
                {passwordError}
              </Text>
            ) : (
              <Text style={[styles.errorTxt, {opacity: 0}]}>hide</Text>
            )}
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPass(!isShowPass)}>
              <IconIonicons
                name={isShowPass ? 'eye' : 'eye-off'}
                size={ScreenUtils.scale(14)}
                color={Themes.colors.collGray40}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.rememberAccount}
            onPress={checkRemember}>
            {!checkedRemember ? (
              <IconFontisto
                name={'checkbox-passive'}
                color={Themes.colors.collGray40}
                size={Metrics.icons.small}
              />
            ) : (
              <IconFontisto
                name={'checkbox-active'}
                color={Themes.colors.collGray40}
                size={Metrics.icons.small}
              />
            )}
            <Text style={styles.txtRemember}>
              {translate('LoginScreen.rememberAccount')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnLogin,
              {
                opacity: isDisableBtn ? 0.5 : 1,
              },
            ]}
            onPress={_login}
            disabled={isDisableBtn}>
            <Text style={styles.txtLogin}>
              {translate('LoginScreen.login')}
            </Text>
          </TouchableOpacity>
          <Text
            style={styles.txtSuggestRegister}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {translate('LoginScreen.registerSuggest')}
            <Text style={styles.txtLinkRegister}>
              {translate('LoginScreen.here')}
            </Text>
          </Text>
        </View>
      </ImageBackground>

      <BottomSheet
        modalRef={modalizeRef}
        isTranslated={true}
        isSearch={false}
        arrOption={arrOptions}
        showTitle={false}
        chooseValue={languageSelected?.label}
      />
    </KeyboardAwareScrollView>
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
