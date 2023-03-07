import {ScreenUtils} from '@helpers';
import {ListDestination, TopDestinationResponse} from '@models';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  DeviceEventEmitter,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

interface Props {
  isShowModal: boolean;
  onCloseModal: () => void;
  styleModal?: ViewStyle;
  dataModal: Array<TopDestinationResponse>;
  choosedPlaceStart?: ListDestination;
}

export const ModalChoosePlaceData: FunctionComponent<Props> = props => {
  const {isShowModal, onCloseModal, styleModal, dataModal, choosedPlaceStart} =
    props;
  const insets = useSafeAreaInsets();
  const [data, setData] = useState<any[]>();
  const [dataChild, setDataChild] = useState<any[]>();
  const [catSelected, setCatSelected] = useState<string>('');
  const [choosePlace, setChoosePlace] = useState<ListDestination>(
    choosedPlaceStart || ({} as ListDestination),
  );
  console.log('🚀 ~ file: index.tsx:32 ~ choosePlace:', choosePlace);

  useEffect(() => {
    setData(dataModal);
    setCatSelected(dataModal[0]?.RegionCode);
    setDataChild(dataModal[0]?.List);
  }, [dataModal]);

  const handleSelectChild = (itemsChoosed: ListDestination) => {
    setChoosePlace(itemsChoosed);
    onCloseModal();
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
              top: insets.top + ScreenUtils.scale(195),
              left: insets.left + ScreenUtils.scale(16),
            },
            styleModal,
          ]}>
          <ScrollView
            contentContainerStyle={styles.content}
            horizontal
            scrollEnabled={false}>
            <View style={styles.contentLeft}>
              {data?.map((cat, index) => {
                const handleSelectCat = () => {
                  const dataChileCat = data.find(
                    item => item.RegionCode === cat.RegionCode,
                  );
                  setCatSelected(cat.RegionCode);
                  setDataChild(dataChileCat?.List);
                };
                return (
                  <TouchableOpacity
                    style={{
                      borderRightWidth: 2,
                      borderRightColor:
                        catSelected === cat.RegionCode ? 'blue' : 'gray',
                      marginBottom: 10,
                      paddingVertical: 10,
                    }}
                    key={`${cat.RegionCode}_${index}`}
                    onPress={handleSelectCat}>
                    <Text
                      style={{
                        color:
                          catSelected === cat.RegionCode ? 'blue' : 'black',
                      }}>
                      {cat?.RegionName}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <ScrollView
              style={{marginLeft: 10}}
              showsVerticalScrollIndicator={false}>
              {dataChild?.map((child, index) => (
                <TouchableOpacity
                  style={{marginBottom: 10}}
                  key={`${child.Code}_${index}`}
                  onPress={() => {
                    handleSelectChild(child);
                    DeviceEventEmitter.emit('choosedPlace', choosePlace);
                  }}>
                  <Text>
                    {child?.CityCode}-{child?.CountryCode}
                  </Text>
                  <Text>{child?.Name_Vi}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
