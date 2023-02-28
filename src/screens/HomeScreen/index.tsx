import {BottomSheet} from '@components';
import {DataConstant} from '@configs';
import {useBoolean} from '@hooks';
import {AccountAction} from '@redux';
import {translate} from '@shared';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from 'src/redux/reducers';
import {styles} from './styles';

export const HomeScreen = () => {
  const dispatch = useDispatch();
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
    dispatch(AccountAction.changeLanguage({language: value}));
  };
  return (
    <View style={styles.container}>
      <Text>{translate('homeScreen')}</Text>
      <TouchableOpacity
        style={styles.btnChangeLang}
        onPress={setShowChangeLanguageModal}>
        <Text>{translate('changeLanguage')}</Text>
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
