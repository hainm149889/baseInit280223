import {translate} from '@shared';
import {Metrics, Themes} from '@themes';
import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

interface OwnProps {
  numberOfAdults?: number;
  numberOfChildren?: number;
  numberOfBaby?: number;
  openModalChooseNumberOfUsers?: () => void;
}

type Props = OwnProps;
export const ChooseNumberOfUsersComponent: FunctionComponent<Props> = props => {
  const {
    numberOfAdults,
    numberOfChildren,
    numberOfBaby,
    openModalChooseNumberOfUsers,
  } = props;
  return (
    <TouchableOpacity
      style={styles.btnChooseUser}
      onPress={openModalChooseNumberOfUsers}>
      <IconFontAwesome5
        name="user"
        color={Themes.colors.black}
        size={Metrics.icons.smallSmall}
      />
      <Text style={styles.txtChooseUser} numberOfLines={2}>
        {numberOfAdults!} {translate('SearchScreen.adults')},{' '}
        {numberOfChildren!} {translate('SearchScreen.childrens')},{' '}
        {numberOfBaby!} {translate('SearchScreen.baby')}
      </Text>
      <IconFontAwesome5
        name="angle-down"
        color={Themes.colors.black}
        size={Metrics.icons.tiny}
      />
    </TouchableOpacity>
  );
};
