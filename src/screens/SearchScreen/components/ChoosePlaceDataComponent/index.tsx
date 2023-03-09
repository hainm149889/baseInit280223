import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {Metrics, Themes} from '@themes';

interface OwnProps {
  titlePlaceStart?: string;
  dataPlace?: any;
  titlePlaceEnd: string;
  titleDate?: string;
}

type Props = OwnProps;

const ChoosePlaceDataComponent: FunctionComponent<Props> = props => {
  const {titlePlaceStart, dataPlace, titlePlaceEnd, titleDate} = props;
  console.log('🚀 ~ file: index.tsx:20 ~ dataPlace:', dataPlace);
  return (
    <View style={styles.mainContent}>
      <View style={styles.subContent}>
        <IconMaterialCommunityIcons
          name="airplane-takeoff"
          size={Metrics.icons.large}
          color={Themes.colors.collGray40}
        />
        <TouchableOpacity
          style={[
            styles.choosePlaceStart,
            {
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: Themes.colors.collGray40,
            },
          ]}>
          <Text style={styles.titleChoosePlaceStart}>{titlePlaceStart}</Text>
          <Text style={styles.mainPlaceStart}>
            Hà Nội {'  '}
            <Text style={styles.subMainPlaceStart}>HAN</Text>
          </Text>
        </TouchableOpacity>
        <IconAntDesign
          name="caretup"
          size={Metrics.icons.smallTiny}
          color={Themes.colors.black}
          style={styles.arrowUpStyle}
        />
      </View>
      <View style={styles.subContent2}>
        <IconMaterialCommunityIcons
          name="airplane-landing"
          size={Metrics.icons.large}
          color={Themes.colors.collGray40}
        />
        <TouchableOpacity style={styles.choosePlaceStart}>
          <Text style={styles.titleChoosePlaceStart}>{titlePlaceEnd}</Text>
          <Text style={styles.mainPlaceStart}>
            Hà Nội {'  '}
            <Text style={styles.subMainPlaceStart}>HAN</Text>
          </Text>
        </TouchableOpacity>
        <IconAntDesign
          name="caretdown"
          size={Metrics.icons.smallTiny}
          color={Themes.colors.black}
          style={styles.arrowDownStyle}
        />
      </View>
      <View style={styles.subBottomContent}>
        <IconFontAwesome
          name="calendar-o"
          size={Metrics.icons.large}
          color={Themes.colors.collGray40}
        />
        <TouchableOpacity style={[styles.chooseDateStart]}>
          <Text style={styles.titleChoosePlaceStart}>{titleDate}</Text>
          <Text style={styles.mainPlaceStart}>23, Tháng 2 2012</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChoosePlaceDataComponent;
