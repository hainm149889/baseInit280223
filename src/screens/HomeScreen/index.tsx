import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {translate} from '@shared';
import {useBoolean} from '@hooks';
import {DataConstant} from '@configs';
import {IRootState} from 'src/redux/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {AccountAction} from '@redux';
import {BottomSheet} from '@components';

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
  console.log(
    '🚀 ~ file: index.tsx:23 ~ HomeScreen ~ accLanguage:',
    accLanguage,
  );
  const languageSelected = Object.values(DataConstant.LANGUAGES).find(
    item => item.value === accLanguage,
  );
  console.log(
    '🚀 ~ file: index.tsx:30 ~ HomeScreen ~ languageSelected:',
    languageSelected,
  );

  const setLanguage = (value: any) => {
    dispatch(AccountAction.changeLanguage({language: value}));
  };
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
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        style={styles.btnChangeLang}
        onPress={setShowChangeLanguageModal}>
        <Text>{translate('changeLanguage')}</Text>
      </TouchableOpacity>
      <Text style={styles.txtLanguage}>{languageSelected?.label}</Text>
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
