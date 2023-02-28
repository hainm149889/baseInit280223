/* eslint-disable no-sparse-arrays */
import {ScreenUtils} from '@helpers';
import {translate} from '@shared';
import {Themes} from '@themes';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
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
    onModalHide,
    isTranslated = true,
    showTitle = true,
    chooseValue,
  } = props;
  const [isShowModalState, setIsShowModalState] = useState(isShowModal);
  const [dataSource, setDataSource] = useState(arrOption);
  const hideModal = function () {
    setIsShowModalState(false);
    if (onCloseModal) {
      onCloseModal();
    }
  };

  const [maxHeight, setMaxHeight] = useState(
    Dimensions.get('window').height * 0.9,
  );
  function onKeyboardDidShow(e: KeyboardEvent): void {
    setMaxHeight(Dimensions.get('window').height - e.endCoordinates.height);
  }

  function onKeyboardDidHide(): void {
    setMaxHeight(Dimensions.get('window').height * 0.9);
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return (): void => {
      Keyboard.dismiss();
    };
  }, []);
  useEffect(() => {
    setIsShowModalState(isShowModal);
  }, [isShowModal]);

  useEffect(() => {
    setDataSource(arrOption);
  }, [arrOption]);

  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      onBackdropPress={() => hideModal()}
      onBackButtonPress={() => hideModal()}
      onSwipeComplete={() => hideModal()}
      onModalHide={onModalHide ? () => onModalHide() : () => {}}
      swipeDirection="down"
      style={styles.modalContainer}
      isVisible={isShowModalState}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}>
      <KeyboardAvoidingView
        behavior={'position'}
        style={{
          maxHeight: maxHeight,
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
                onPress={item.onPress ? () => item.onPress() : () => {}}
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
