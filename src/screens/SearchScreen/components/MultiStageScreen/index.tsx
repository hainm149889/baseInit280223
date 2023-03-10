/* eslint-disable react/no-unstable-nested-components */
import {ScreenUtils} from '@helpers';
import {translate} from '@shared';
import {Metrics, Themes} from '@themes';
import React, {useEffect, useMemo, useRef, useState} from 'react';
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
  const [dataPlace, setDataPlace] = useState<Array<any>>([]);
  console.log(
    '🚀 ~ file: index.tsx:19 ~ MultiStageScreen ~ dataPlace:',
    dataPlace,
  );
  const [isCloseStopPlace, setCloseStopPlace] = useState<boolean>(false);

  const modalizeRef = useRef<Modalize>(null);
  const openModalChooseNumberOfUsers = () => {
    modalizeRef.current?.open();
  };
  const closeModalChooseNumberOfUsers = () => {
    modalizeRef.current?.close();
  };

  const dataItem = useMemo(
    () => [
      {
        key: 1,
        placeStart: '',
        placeEnd: '',
        dateStart: new Date(),
        isClosed: false,
      },
      {
        key: 2,
        placeStart: '',
        placeEnd: '',
        dateStart: new Date(),
        isClosed: false,
      },
      {
        key: 3,
        placeStart: '',
        placeEnd: '',
        dateStart: new Date(),
        isClosed: false,
      },
      {
        key: 4,
        placeStart: '',
        placeEnd: '',
        dateStart: new Date(),
        isClosed: false,
      },
    ],
    [],
  );

  useEffect(() => {
    setDataPlace([...dataItem.slice(0, 2)]);
  }, [dataItem]);

  const addMoreStopPlace = () => {
    setDataPlace(dataItem.slice(0, dataPlace.length + 1));
    // if (dataPlace.filter(item => item.key === 3 || item.key === 4)) {
    //   setDataPlace([...dataPlace[3]]);
    // }
  };

  const keyExtractor = (item: any) => item.key;

  const renderItem = () => {
    return (
      <ChoosePlaceDataComponent
        titlePlaceEnd="Chọn điểm đi"
        titleDate="Ngày đi"
        titlePlaceStart="Chọn điểm đến"
        dataPlace={dataPlace}
        // isClosed={isCloseStopPlace}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: ScreenUtils.scale(16)}}>
        <FlatList
          data={dataPlace}
          extraData={dataPlace}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <>
              <TouchableOpacity
                style={styles.btnAddMoreStop}
                disabled={dataPlace.length === 4}
                onPress={addMoreStopPlace}>
                <Text style={styles.txtAddMoreStop}>Thêm điểm dừng</Text>
                <IconAntDesign
                  name="pluscircleo"
                  size={Metrics.icons.small}
                  color={Themes.colors.white}
                />
              </TouchableOpacity>
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
                <Text style={styles.txtSearch}>
                  {translate('BottomTab.search')}
                </Text>
              </TouchableOpacity>
            </>
          }
        />
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
