/* eslint-disable react/no-unstable-nested-components */
import {commonApi} from '@api';
import {ScreenUtils} from '@helpers';
import {RequestParamsTopDestination, TopDestinationResponse} from '@models';
import {translate} from '@shared';
import {Metrics, Themes} from '@themes';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {ChooseNumberOfUsersComponent} from '../ChooseNumberOfUsersComponent';
import ChoosePlaceDataComponent from '../ChoosePlaceDataComponent';
import {ModalChooseNumberUser} from '../ModalChooseNumberUser';
import styles from './styles';

export const MultiStageScreen = () => {
  const [adultNum, setAdultNum] = useState<number>(1);
  const [childrenNum, setChildrenNum] = useState<number>(0);
  const [babyNum, setBabyNum] = useState<number>(0);
  const [dataPlace, setDataPlace] = useState<Array<TopDestinationResponse>>([]);

  const modalizeRef = useRef<Modalize>(null);
  const openModalChooseNumberOfUsers = () => {
    modalizeRef.current?.open();
  };
  const closeModalChooseNumberOfUsers = () => {
    modalizeRef.current?.close();
  };

  const _getTopDestination = useCallback(() => {
    try {
      const requestParams: RequestParamsTopDestination = {
        Language: 'vi',
        Reference: true,
        ForceGet: true,
      };
      commonApi
        .getDestination(requestParams)
        ?.then(response => {
          if (response.Success) {
            setDataPlace(response?.List);
          } else {
            console.log('Lỗi get data destination');
          }
        })
        .catch(() => {});
    } catch (error) {}
  }, []);

  useEffect(() => {
    _getTopDestination();
  }, [_getTopDestination]);

  const renderItem = ({item}: {item: TopDestinationResponse}) => {
    return (
      <ChoosePlaceDataComponent
        titlePlaceEnd="Chọn điểm đi"
        titleDate="Ngày đi"
        titlePlaceStart="Chọn điểm đến"
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: ScreenUtils.scale(16)}}>
        <FlatList
          data={dataPlace}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <TouchableOpacity style={styles.btnAddMoreStop}>
              <Text style={styles.txtAddMoreStop}>Thêm điểm dừng</Text>
              <IconAntDesign
                name="pluscircleo"
                size={Metrics.icons.small}
                color={Themes.colors.white}
              />
            </TouchableOpacity>
          }
        />
        {/* <ChoosePlaceDataComponent
          titlePlaceEnd="Chọn điểm đi"
          titleDate="Ngày đi"
          titlePlaceStart="Chọn điểm đến"
          dataPlace={dataPlace}
        />
        <ChoosePlaceDataComponent
          titlePlaceEnd="Chọn điểm đi"
          titleDate="Ngày đi"
          titlePlaceStart="Chọn điểm đến"
          dataPlace={''}
        /> */}

        <ChooseNumberOfUsersComponent
          numberOfAdults={adultNum}
          numberOfChildren={childrenNum}
          numberOfBaby={babyNum}
          openModalChooseNumberOfUsers={openModalChooseNumberOfUsers}
        />
        <TouchableOpacity style={styles.btnSearch}>
          <IconAntDesign
            name="search1"
            color={Themes.colors.white}
            size={Metrics.icons.smallSmall}
          />
          <Text style={styles.txtSearch}>{translate('BottomTab.search')}</Text>
        </TouchableOpacity>
      </View>
      <ModalChooseNumberUser
        modalizeRef={modalizeRef}
        heightModal={ScreenUtils.HEIGHT_SCREEN / 2.8}
        numberOfAdults={adultNum}
        numberOfChildren={childrenNum}
        numberOfBaby={babyNum}
        onChangeAdult={setAdultNum}
        onChangeChildren={setChildrenNum}
        onChangeBaby={setBabyNum}
        setChangeAdults={(val?: number) => setAdultNum(val!)}
        setChangeBaby={(val?: number) => setBabyNum(val!)}
        setChangeChildrens={(val?: number) => setChildrenNum(val!)}
        onConfirm={closeModalChooseNumberOfUsers}
      />
    </View>
  );
};
