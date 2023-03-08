import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IconMatterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {commonApi} from '@api';
import {ScreenUtils, Utils} from '@helpers';
import {useDebounce} from '@hooks';
import {
  ListDestination,
  RequestParamsGetDestinationByKeyword,
  RequestParamsTopDestination,
  TopDestinationResponse,
} from '@models';
import {translate} from '@shared';
import {Metrics, Themes} from '@themes';
import {Modalize} from 'react-native-modalize';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {ChooseNumberOfUsersComponent} from '../ChooseNumberOfUsersComponent';
import {ChooseRadioButtonOption} from '../ChooseRadioButtonOption';
import {ModalChooseDate} from '../ModalChooseDate';
import {ModalChooseNumberUser} from '../ModalChooseNumberUser';
import {ModalChoosePlaceData} from '../ModalChoosePlaceData';
import styles from './styles';

export const OneWayAndRoundTripScreen = () => {
  const [isOneway, setIsOneway] = useState<boolean>(true);
  const [isCalculateAuto, setIsCalculateAuto] = useState<boolean>(true);
  const [isIncludePlaceStop, setIsIncludePlaceStop] = useState<boolean>(true);
  const [isFindFollowingDate, setIsFindFollowingDate] = useState<boolean>(true);

  const [dataPlace, setDataPlace] = useState<Array<TopDestinationResponse>>([]);
  const [dataPlaceByKeyword, setDataPlaceByKeyword] = useState<
    Array<ListDestination>
  >([]);
  const [dataChild, setDataChild] = useState<any[]>([]);

  const [placeStart, setPlaceStart] = useState<string>('');

  const [placeNewArrayExcceptPlaceStart, setNewArrayExcceptPlaceStart] =
    useState<any[]>([]);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [placeEnd, setPlaceEnd] = useState<string>('');
  const [endDate, setEndDate] = useState<Date>(startDate);

  const [adultNum, setAdultNum] = useState<number>(1);
  const [childrenNum, setChildrenNum] = useState<number>(0);
  const [babyNum, setBabyNum] = useState<number>(0);

  const [isOpenModalChoosePlaceStart, setShowModalChoosePlaceStart] =
    useState<boolean>(false);
  const [isOpenModalChoosePlaceEnd, setShowModalChoosePlaceEnd] =
    useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>('');
  const debounceSearch = useDebounce(searchValue);
  const [catSelected, setCatSelected] = useState<string>('');

  useEffect(() => {
    setCatSelected(dataPlace[0]?.RegionCode);
    setDataChild(dataPlace[0]?.List);
  }, [dataPlace]);

  const handleSelectChildStart = (itemsChoosed: ListDestination) => {
    setPlaceStart(
      itemsChoosed?.Name_Vi +
        ', ' +
        itemsChoosed?.CityName_Vi +
        ' (' +
        itemsChoosed?.CityCode +
        ')',
    );
    const filteredDataChild = dataChild.filter(
      (item: ListDestination) => item.Identity !== itemsChoosed?.Identity,
    );
    setNewArrayExcceptPlaceStart(filteredDataChild);
    setShowModalChoosePlaceStart(false);
  };

  const handleSelectChildEnd = (itemsChoosed: ListDestination) => {
    setPlaceEnd(
      itemsChoosed?.Name_Vi +
        ', ' +
        itemsChoosed?.CityName_Vi +
        ' (' +
        itemsChoosed?.CityCode +
        ')',
    );
    setShowModalChoosePlaceEnd(false);
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
    setEndDate(date);
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

  const _getDestinationByKeyword = useCallback(() => {
    try {
      const requestParams: RequestParamsGetDestinationByKeyword = {
        Keyword: debounceSearch,
        Language: 'vi',
        Reference: true,
        ForceGet: true,
      };
      commonApi
        .getDestinationByKeyword(requestParams)
        ?.then(response => {
          if (response.Success) {
            setDataPlaceByKeyword(response?.List);
          } else {
            console.log('Lỗi get data destination by keyword');
          }
        })
        .catch(() => {});
    } catch (error) {}
  }, [debounceSearch]);

  useEffect(() => {
    _getTopDestination();
    _getDestinationByKeyword();
  }, [_getTopDestination, _getDestinationByKeyword]);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <ChooseRadioButtonOption
          isOptionOne={isOneway}
          setIsOptionOne={setIsOneway}
          titleOptionOne={translate('SearchScreen.oneWay')}
          titleOptionTwo={translate('SearchScreen.roundTrip')}
        />
        <ChooseRadioButtonOption
          isOptionOne={isCalculateAuto}
          setIsOptionOne={setIsCalculateAuto}
          titleOptionOne={translate('SearchScreen.calculateAuto')}
          titleOptionTwo={translate('SearchScreen.calculateNormal')}
        />
        <ChooseRadioButtonOption
          isOptionOne={isIncludePlaceStop}
          setIsOptionOne={setIsIncludePlaceStop}
          titleOptionOne={translate('SearchScreen.includePlaceStop')}
          titleOptionTwo={translate('SearchScreen.justGoAhead')}
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
              setShowModalChoosePlaceStart(true);
            }}>
            <TextInput
              value={placeStart}
              style={styles.searchInput}
              editable={false}
              placeholder={translate('SearchScreen.choosePlaceStart')}
              placeholderTextColor={Themes.colors.collGray40}
              onFocus={() => {
                setShowModalChoosePlaceStart(true);
              }}
            />
            <IconMatterialCommunity
              name="map-marker"
              color={Themes.colors.black}
              size={Metrics.icons.smallSmall}
              style={styles.iconMapMarker}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowModalChoosePlaceEnd(true);
            }}
            style={{marginTop: ScreenUtils.scale(16)}}>
            <TextInput
              value={placeEnd}
              style={styles.searchInput}
              placeholder={translate('SearchScreen.choosePlaceEnd')}
              placeholderTextColor={Themes.colors.collGray40}
              editable={false}
              onFocus={() => {
                setShowModalChoosePlaceEnd(true);
              }}
            />
            <IconMatterialCommunity
              name="map-marker"
              color={Themes.colors.black}
              size={Metrics.icons.smallSmall}
              style={styles.iconMapMarker}
            />
          </TouchableOpacity>
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
                <Text
                  onPress={openModalChooseDate}
                  style={styles.txtChooseTime}>
                  {Utils.date.formatDate(startDate)}
                </Text>
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
                  <Text
                    style={styles.txtChooseTime}
                    onPress={() => {
                      modalizeChooseEndDateRef.current?.open();
                    }}>
                    {Utils.date.formatDate(endDate)}
                  </Text>
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
                <Text
                  style={styles.txtChooseTime}
                  onPress={openModalChooseDate}>
                  {Utils.date.formatMonthYear(startDate)}
                </Text>
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
                  <Text
                    style={styles.txtChooseTime}
                    onPress={openModalChooseDate}>
                    {Utils.date.formatMonthYear(endDate)}
                  </Text>
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
      <ModalChoosePlaceData
        isShowModal={isOpenModalChoosePlaceStart}
        setCatSelected={setCatSelected}
        setDataChild={setDataChild}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        dataChild={dataChild!}
        dataPlace={dataPlace}
        catSelected={catSelected}
        dataPlaceByKeyword={dataPlaceByKeyword}
        onCloseModal={() => {
          setShowModalChoosePlaceStart(false);
        }}
        handleSelectChild={handleSelectChildStart}
      />
      <ModalChoosePlaceData
        isShowModal={isOpenModalChoosePlaceEnd}
        setCatSelected={setCatSelected}
        setDataChild={setDataChild}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        dataChild={placeNewArrayExcceptPlaceStart!}
        dataPlace={dataPlace}
        catSelected={catSelected}
        dataPlaceByKeyword={dataPlaceByKeyword}
        onCloseModal={() => {
          setShowModalChoosePlaceEnd(false);
        }}
        handleSelectChild={handleSelectChildEnd}
      />
    </View>
  );
};
