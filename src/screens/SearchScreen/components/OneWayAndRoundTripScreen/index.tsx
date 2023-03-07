import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IconMatterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {commonApi} from '@api';
import {ScreenUtils, Utils} from '@helpers';
import {
  ListDestination,
  RequestParamsTopDestination,
  TopDestinationResponse,
} from '@models';
import {translate} from '@shared';
import {Metrics, Themes} from '@themes';
import {Modal} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {ChooseNumberOfUsersComponent} from '../ChooseNumberOfUsersComponent';
import {ChooseRadioButtonOption} from '../ChooseRadioButtonOption';
import {ModalChooseDate} from '../ModalChooseDate';
import {ModalChooseNumberUser} from '../ModalChooseNumberUser';
import styles from './styles';

export const OneWayAndRoundTripScreen = () => {
  const [isOneway, setIsOneway] = useState<boolean>(true);
  const [isFindFollowingDate, setIsFindFollowingDate] = useState<boolean>(true);
  const [dataPlace, setDataPlace] = useState<Array<TopDestinationResponse>>([]);

  const [placeStart, setPlaceStart] = useState<ListDestination>(
    {} as ListDestination,
  );

  const [startDate, setStartDate] = useState<Date>(new Date());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [placeEnd, setPlaceEnd] = useState<string>('');
  const [endDate, setEndDate] = useState<Date>(startDate);

  const [adultNum, setAdultNum] = useState<number>(1);
  const [childrenNum, setChildrenNum] = useState<number>(0);
  const [babyNum, setBabyNum] = useState<number>(0);
  const [isOpenModalChoosePlace, setShowModalChoosePlace] =
    useState<boolean>(false);

  const insets = useSafeAreaInsets();

  const [dataChild, setDataChild] = useState<any[]>();
  const [catSelected, setCatSelected] = useState<string>('');

  useEffect(() => {
    setCatSelected(dataPlace[0]?.RegionCode);
    setDataChild(dataPlace[0]?.List);
  }, [dataPlace]);

  const handleSelectChild = (itemsChoosed: ListDestination) => {
    setPlaceStart(itemsChoosed);
    setShowModalChoosePlace(false);
  };

  const modalizeRef = useRef<Modalize>(null);
  const modalizeChooseStartDateRef = useRef<Modalize>(null);
  const modalizeChooseEndDateRef = useRef<Modalize>(null);

  const openModalChooseDate = () => {
    modalizeChooseStartDateRef.current?.open();
  };

  const closeModalChooseDate = () => {
    modalizeChooseStartDateRef.current?.close();
  };

  const openModalChooseNumberOfUsers = () => {
    modalizeRef.current?.open();
  };
  const closeModalChooseNumberOfUsers = () => {
    modalizeRef.current?.close();
  };

  const chooseStartDate = (date: any) => {
    setStartDate(date);
    closeModalChooseDate();
  };

  const chooseEndDate = (date: any) => {
    setEndDate(date);
    modalizeChooseEndDateRef.current?.close();
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

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <ChooseRadioButtonOption
          isOneway={isOneway}
          setIsOneway={setIsOneway}
        />
        <View style={styles.findCalendarContainer}>
          <TouchableOpacity
            style={[
              styles.btnFindCalendar,
              {
                backgroundColor: isFindFollowingDate
                  ? Themes.colors.blue29
                  : Themes.colors.colGray20,
                borderRightWidth: StyleSheet.hairlineWidth,
                borderRightColor: Themes.colors.white,
                borderTopLeftRadius: ScreenUtils.scale(4),
                borderBottomLeftRadius: ScreenUtils.scale(4),
              },
            ]}
            onPress={() => setIsFindFollowingDate(true)}>
            <IconMatterialCommunity
              name="calendar-today"
              color={
                isFindFollowingDate
                  ? Themes.colors.white
                  : Themes.colors.coolGray60
              }
              size={Metrics.icons.smallSmall}
            />
            <Text
              style={[
                styles.titleFindCalendar,
                {
                  color: isFindFollowingDate
                    ? Themes.colors.white
                    : Themes.colors.coolGray60,
                },
              ]}>
              {translate('SearchScreen.findDate')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnFindCalendar,
              {
                backgroundColor: !isFindFollowingDate
                  ? Themes.colors.blue29
                  : Themes.colors.colGray20,
                borderTopRightRadius: ScreenUtils.scale(4),
                borderBottomRightRadius: ScreenUtils.scale(4),
              },
            ]}
            onPress={() => setIsFindFollowingDate(false)}>
            <IconMatterialCommunity
              name="calendar-month"
              color={Themes.colors.white}
              size={Metrics.icons.smallSmall}
            />
            <Text
              style={[
                styles.titleFindCalendar,
                {
                  color: !isFindFollowingDate
                    ? Themes.colors.white
                    : Themes.colors.coolGray60,
                },
              ]}>
              {translate('SearchScreen.findMonth')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchInputContainer}>
          <TouchableOpacity
            onPress={() => {
              setShowModalChoosePlace(true);
            }}>
            <TextInput
              value={
                placeStart?.Name_Vi +
                ', ' +
                placeStart?.CityName_Vi +
                ' (' +
                placeStart?.CityCode +
                ')'
              }
              editable={false}
              style={styles.searchInput}
              placeholder={translate('SearchScreen.choosePlaceStart')}
              placeholderTextColor={Themes.colors.collGray40}
              onFocus={() => {
                setShowModalChoosePlace(true);
              }}
            />
            <IconMatterialCommunity
              name="map-marker"
              color={Themes.colors.black}
              size={Metrics.icons.smallSmall}
              style={styles.iconMapMarker}
            />
          </TouchableOpacity>
          <View style={{marginTop: ScreenUtils.scale(16)}}>
            <TextInput
              value={placeEnd}
              style={styles.searchInput}
              placeholder={translate('SearchScreen.choosePlaceEnd')}
              placeholderTextColor={Themes.colors.collGray40}
            />
            <IconMatterialCommunity
              name="map-marker"
              color={Themes.colors.black}
              size={Metrics.icons.smallSmall}
              style={styles.iconMapMarker}
            />
          </View>
        </View>
        <View style={styles.chooseTimeContainer}>
          {isFindFollowingDate ? (
            <>
              <View style={styles.btnChooseTime}>
                <IconMatterialCommunity
                  name="calendar-month"
                  color={Themes.colors.black}
                  size={Metrics.icons.smallSmall}
                />
                <TextInput
                  style={styles.txtChooseTime}
                  editable={false}
                  value={Utils.date.formatDate(startDate)}
                  placeholder={translate('SearchScreen.startDate')}
                  placeholderTextColor={Themes.colors.collGray40}
                  onFocus={openModalChooseDate}
                />
              </View>
              {!isOneway && (
                <TouchableOpacity
                  style={styles.btnChooseTime}
                  onPress={() => {
                    modalizeChooseEndDateRef.current?.open();
                  }}>
                  <IconMatterialCommunity
                    name="calendar-month"
                    color={Themes.colors.black}
                    size={Metrics.icons.smallSmall}
                  />
                  <TextInput
                    style={styles.txtChooseTime}
                    value={Utils.date.formatDate(endDate)}
                    editable={false}
                    placeholder={translate('SearchScreen.endDate')}
                    placeholderTextColor={Themes.colors.collGray40}
                  />
                </TouchableOpacity>
              )}
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.btnChooseTime}
                onPress={openModalChooseDate}>
                <IconMatterialCommunity
                  name="calendar-month"
                  color={Themes.colors.black}
                  size={Metrics.icons.smallSmall}
                />
                <TextInput
                  style={styles.txtChooseTime}
                  editable={false}
                  value={Utils.date.formatMonthYear(startDate)}
                  placeholder={translate('SearchScreen.startDate')}
                  placeholderTextColor={Themes.colors.collGray40}
                />
              </TouchableOpacity>
              {!isOneway && (
                <TouchableOpacity
                  style={styles.btnChooseTime}
                  onPress={() => {
                    modalizeChooseEndDateRef.current?.open();
                  }}>
                  <IconMatterialCommunity
                    name="calendar-month"
                    color={Themes.colors.black}
                    size={Metrics.icons.smallSmall}
                  />
                  <TextInput
                    style={styles.txtChooseTime}
                    editable={false}
                    value={Utils.date.formatMonthYear(endDate)}
                    placeholder={translate('SearchScreen.endDate')}
                    placeholderTextColor={Themes.colors.collGray40}
                  />
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
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
      <ModalChooseDate
        modalizeRef={modalizeChooseStartDateRef}
        onChooseDate={chooseStartDate}
      />
      <ModalChooseDate
        modalizeRef={modalizeChooseEndDateRef}
        minStartDate={startDate}
        onChooseDate={chooseEndDate}
      />
      <Modal
        visible={isOpenModalChoosePlace}
        transparent={true}
        onRequestClose={() => {
          setShowModalChoosePlace(false);
        }}>
        <View style={styles.modal}>
          <View
            style={[
              styles.sourceContainer,
              {
                top: insets.top + ScreenUtils.scale(195),
                left: insets.left + ScreenUtils.scale(16),
              },
            ]}>
            <ScrollView
              contentContainerStyle={styles.content}
              horizontal
              scrollEnabled={false}>
              <View style={styles.contentLeft}>
                {dataPlace?.map((cat, index) => {
                  const handleSelectCat = () => {
                    const dataChileCat = dataPlace.find(
                      item => item.RegionCode === cat.RegionCode,
                    );
                    setCatSelected(cat.RegionCode);
                    setDataChild(dataChileCat?.List);
                  };
                  return (
                    <TouchableOpacity
                      style={[
                        styles.parentCate,
                        {
                          borderRightColor:
                            catSelected === cat.RegionCode
                              ? Themes.colors.blue29
                              : Themes.colors.collGray40,
                        },
                      ]}
                      key={`${cat.RegionCode}_${index}`}
                      onPress={handleSelectCat}>
                      <Text
                        style={{
                          color:
                            catSelected === cat.RegionCode
                              ? Themes.colors.blue29
                              : Themes.colors.collGray40,
                        }}>
                        {cat?.RegionName}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <ScrollView
                style={{marginLeft: ScreenUtils.scale(10)}}
                showsVerticalScrollIndicator={false}>
                {dataChild?.map((child, index) => (
                  <TouchableOpacity
                    style={{marginBottom: ScreenUtils.scale(10)}}
                    key={`${child.Code}_${index}`}
                    onPress={() => {
                      handleSelectChild(child);
                    }}>
                    <Text>
                      {child?.CityCode} - {child?.CityName_Vi}
                    </Text>
                    <Text style={styles.txtNameAirport}>{child?.Name_Vi}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};
