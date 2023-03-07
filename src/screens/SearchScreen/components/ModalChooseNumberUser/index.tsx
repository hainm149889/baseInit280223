import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {FunctionComponent} from 'react';
import styles from './styles';
import {Modalize} from 'react-native-modalize';
import {ScreenUtils} from '@helpers';
import {translate} from '@shared';

interface OwnProps {
  modalizeRef?: any;
  numberOfAdults?: number;
  onChangeAdult: (value: any) => void;
  setChangeAdults: (value?: number) => void;
  numberOfChildren?: number;
  onChangeChildren: (value: any) => void;
  setChangeChildrens: (value?: number) => void;
  numberOfBaby?: number;
  onChangeBaby: (value: any) => void;
  setChangeBaby: (value?: number) => void;
  onConfirm?: () => void;
}

type Props = OwnProps;
export const ModalChooseNumberUser: FunctionComponent<Props> = props => {
  const {
    modalizeRef,
    numberOfAdults,
    numberOfChildren,
    numberOfBaby,
    onChangeAdult,
    setChangeAdults,
    onChangeChildren,
    setChangeChildrens,
    onChangeBaby,
    setChangeBaby,
    onConfirm,
  } = props;
  return (
    <Modalize ref={modalizeRef} modalHeight={ScreenUtils.HEIGHT_SCREEN / 2.8}>
      <View style={styles.mainContentModal}>
        <View style={styles.optionUserContainer}>
          <View style={styles.leftContent}>
            <Text style={styles.optionMain}>
              {translate('SearchScreen.adults')}
            </Text>
            <Text style={styles.subOptionMain}>
              {translate('SearchScreen.over13')}
            </Text>
          </View>
          <View style={styles.rightContent}>
            <TouchableOpacity
              style={styles.btnClickCount}
              disabled={String(numberOfAdults) === '1'}
              onPress={() => setChangeAdults?.(numberOfAdults! - 1)}>
              <Text style={styles.txtCalculation}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.inputUserNumber}
              defaultValue={String(numberOfAdults)}
              value={String(numberOfAdults)}
              onChangeText={onChangeAdult}
            />
            <TouchableOpacity
              style={styles.btnClickCount}
              onPress={() => setChangeAdults?.(numberOfAdults! + 1)}>
              <Text style={styles.txtCalculation}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionUserContainer}>
          <View style={styles.leftContent}>
            <Text style={styles.optionMain}>
              {translate('SearchScreen.childrens')}
            </Text>
            <Text style={styles.subOptionMain}>
              {translate('SearchScreen.from2To12')}
            </Text>
          </View>
          <View style={styles.rightContent}>
            <TouchableOpacity
              style={styles.btnClickCount}
              disabled={String(numberOfChildren) === '0'}
              onPress={() => setChangeChildrens?.(numberOfChildren! - 1)}>
              <Text style={styles.txtCalculation}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.inputUserNumber}
              defaultValue={String(numberOfChildren)}
              value={String(numberOfChildren)}
              onChangeText={onChangeChildren}
            />
            <TouchableOpacity
              style={styles.btnClickCount}
              onPress={() => setChangeChildrens?.(numberOfChildren! + 1)}>
              <Text style={styles.txtCalculation}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.optionUserContainer,
            {marginBottom: ScreenUtils.scale(8)},
          ]}>
          <View style={styles.leftContent}>
            <Text style={styles.optionMain}>
              {translate('SearchScreen.baby')}
            </Text>
            <Text style={styles.subOptionMain}>
              {translate('SearchScreen.under2')}
            </Text>
          </View>
          <View style={styles.rightContent}>
            <TouchableOpacity
              style={styles.btnClickCount}
              disabled={String(numberOfBaby) === '0'}
              onPress={() => setChangeBaby?.(numberOfBaby! - 1)}>
              <Text style={styles.txtCalculation}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.inputUserNumber}
              defaultValue={String(numberOfBaby)}
              value={String(numberOfBaby)}
              onChangeText={onChangeBaby}
            />
            <TouchableOpacity
              style={styles.btnClickCount}
              onPress={() => setChangeBaby?.(numberOfBaby! + 1)}>
              <Text style={styles.txtCalculation}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.btnConfirmUser} onPress={onConfirm}>
          <Text style={styles.txtConfirm}>
            {translate('SearchScreen.confirm')}
          </Text>
        </TouchableOpacity>
      </View>
    </Modalize>
  );
};
