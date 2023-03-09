import {ScreenUtils} from '@helpers';
import {ListDestination, TopDestinationResponse} from '@models';
import {Metrics, Themes} from '@themes';
import React, {FunctionComponent} from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface Props {
  isShowModal: boolean;
  searchValue?: string;
  catSelected?: string;
  onCloseModal: () => void;
  dataPlace: Array<TopDestinationResponse>;
  choosedPlaceStart?: ListDestination;
  dataPlaceByKeyword: Array<ListDestination>;
  dataChild: Array<any>;
  setDataChild: (obj: any) => void;
  setCatSelected: (val: string) => void;
  setSearchValue: (val: string) => void;
  handleSelectChild: (obj: any) => void;
}

export const ModalChoosePlaceData: FunctionComponent<Props> = props => {
  const {
    isShowModal,
    searchValue,
    onCloseModal,
    dataPlace,
    setDataChild,
    dataPlaceByKeyword,
    setCatSelected,
    dataChild,
    setSearchValue,
    handleSelectChild,
    catSelected,
  } = props;
  const insets = useSafeAreaInsets();

  const renderItemSearchByKeyword = ({
    item,
    index,
  }: {
    item: ListDestination;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        style={styles.itemSearchByKeyContainer}
        onPress={() => handleSelectChild(item)}>
        <IconMaterial
          name="airplanemode-on"
          size={Metrics.icons.small}
          color={Themes.colors.collGray40}
        />
        <View style={styles.txtItemSearchByKeyContainer}>
          <Text
            key={index}
            numberOfLines={1}
            adjustsFontSizeToFit
            style={styles.txtItemSearchByKeyMain}>
            {item?.Name_Vi} ({item?.CityCode})
          </Text>
          <Text style={styles.txtItemSearchByKeySub}>
            {item?.CityName_Vi}, {item?.CountryName_Vi}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={isShowModal}
      transparent={true}
      onRequestClose={onCloseModal}>
      <View style={styles.modal}>
        <View
          style={[
            styles.sourceContainer,
            {
              top: insets.top + ScreenUtils.scale(150),
              left: insets.left + ScreenUtils.scale(12),
            },
          ]}>
          <TouchableOpacity
            style={styles.btnCloseModalChoosePlace}
            activeOpacity={0.9}
            onPress={onCloseModal}>
            <IconAntDesign
              name="closecircle"
              color={Themes.colors.coolGray60}
              size={Metrics.icons.large}
            />
          </TouchableOpacity>
          <View style={styles.headerSearchModalChoosePlace}>
            <IconAntDesign
              name="search1"
              size={Metrics.icons.tiny}
              style={styles.flex01}
            />
            <TextInput
              style={styles.inputSearchChoosePlace}
              placeholder="Tìm kiếm..."
              value={searchValue}
              onChangeText={setSearchValue}
            />
            <IconAntDesign
              name="closecircleo"
              size={Metrics.icons.tiny}
              color={Themes.colors.collGray40}
              onPress={() => {
                setSearchValue('');
              }}
              style={styles.flex01}
            />
          </View>
          {searchValue === '' ? (
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
          ) : (
            <FlatList
              data={dataPlaceByKeyword}
              renderItem={renderItemSearchByKeyword}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};
