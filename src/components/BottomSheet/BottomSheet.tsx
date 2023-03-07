/* eslint-disable no-sparse-arrays */
import {ScreenUtils} from '@helpers';
import {translate} from '@shared';
import {Themes} from '@themes';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Flag from 'react-native-flags';
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
  countryCode?: string;
}

interface IProps {
  header?: string;
  arrOption: BottomSheetOption[];
  onModalHide?: () => void;
  isSearch?: boolean;
  titleSearch?: string;
  isTranslated?: boolean;
  titleModal?: string;
  showTitle?: boolean;
  chooseValue?: string;
  modalRef: any;
}

export const BottomSheet: FunctionComponent<IProps> = props => {
  const {arrOption, isTranslated = true, chooseValue, modalRef} = props;

  const [dataSource, setDataSource] = useState(arrOption);

  useEffect(() => {
    setDataSource(arrOption);
  }, [arrOption]);

  return (
    <Modalize ref={modalRef} modalHeight={ScreenUtils.HEIGHT_SCREEN / 4}>
      <ScrollView
        style={{marginBottom: ScreenUtils.scale(20)}}
        showsVerticalScrollIndicator={false}>
        {dataSource.map((item: BottomSheetOption, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => item.onPress()}
            style={styles.itemContainer}>
            <View style={styles.titleContainer}>
              <Flag code={item.countryCode} size={24} />
              <Text
                numberOfLines={1}
                style={[
                  styles.text,
                  {
                    color:
                      item.title === chooseValue
                        ? Themes.colors.blue29
                        : item.titleColor
                        ? item.titleColor
                        : Themes.colors.textPrimary,
                  },
                  ,
                ]}>
                {isTranslated ? item.title : translate(item.title)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Modalize>
  );
};
