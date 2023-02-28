/* eslint-disable no-sparse-arrays */
import {ScreenUtils} from '@helpers';
import {translate} from '@shared';
import {Themes} from '@themes';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import styles from './styles';
export interface BottomSheetOption {
  color?: string;
  iconName?: string;
  iconSize?: number;
  isHideIcon?: boolean;
  title?: string;
  key?: string;
  titleColor?: string;
  content?: string;
  contentColor?: string;
  onPress: (value?: string) => void;
  isChecked?: boolean;
  image?: any;
}

interface IProps {
  header?: string;
  isShowModal: boolean;
  arrOption: BottomSheetOption[];
  onCloseModal: Function;
  onModalHide?: () => void;
  isSearch?: boolean;
  titleSearch?: string;
  isTranslated?: boolean;
  titleModal?: string;
  showTitle?: boolean;
  chooseValue?: string;
}

export const BottomSheet: FunctionComponent<IProps> = props => {
  const {
    onCloseModal,
    titleModal,
    arrOption,
    isShowModal,
    isTranslated = true,
    showTitle = true,
    chooseValue,
  } = props;
  console.log('🚀 ~ file: BottomSheet.tsx:55 ~ chooseValue:', chooseValue);
  const [isShowModalState, setIsShowModalState] = useState(isShowModal);
  const [dataSource, setDataSource] = useState(arrOption);
  const hideModal = function () {
    setIsShowModalState(false);
    if (onCloseModal) {
      onCloseModal();
    }
  };

  useEffect(() => {
    setIsShowModalState(isShowModal);
  }, [isShowModal]);

  useEffect(() => {
    setDataSource(arrOption);
  }, [arrOption]);

  return (
    <Modal
      hardwareAccelerated={false}
      style={styles.modalContainer}
      visible={isShowModalState}>
      <KeyboardAvoidingView
        behavior={'position'}
        style={{
          maxHeight: Dimensions.get('window').height * 0.9,
        }}>
        <View style={styles.headerContainer} />
        <View
          style={[
            styles.contentContainer,
            {paddingBottom: ScreenUtils.scale(100)},
          ]}>
          {showTitle && titleModal ? (
            <View style={styles.titleModalContainer}>
              <Text style={styles.titleModalText}>
                {isTranslated ? titleModal : translate(titleModal)}
              </Text>
              <TouchableOpacity onPress={() => hideModal()}>
                <Text>close</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <ScrollView
            style={{marginBottom: ScreenUtils.scale(20)}}
            showsVerticalScrollIndicator={false}>
            {dataSource.map((item: BottomSheetOption, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => item.onPress()}
                style={styles.itemContainer}>
                <View style={styles.titleContainer}>
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.text,
                      {
                        color:
                          item.title === chooseValue
                            ? Themes.colors.primary
                            : item.titleColor
                            ? item.titleColor
                            : Themes.colors.textPrimary,
                      },
                      ,
                    ]}>
                    {isTranslated ? item.title : translate(item.title)}
                  </Text>
                </View>

                {item.content ? (
                  <View style={styles.contentDetailContainer}>
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.textContent,
                        item.contentColor ? {color: item.contentColor} : {},
                      ]}>
                      {isTranslated ? item.content : translate(item.content)}
                    </Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
