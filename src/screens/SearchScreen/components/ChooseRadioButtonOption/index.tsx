import {RadioButton} from '@components';
import {ScreenUtils} from '@helpers';
import {translate} from '@shared';
import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface OwnProps {
  isOneway?: boolean;
  setIsOneway?: (val: any) => void;
  numberOfBaby?: number;
  openModalChooseNumberOfUsers?: () => void;
}

type Props = OwnProps;
export const ChooseRadioButtonOption: FunctionComponent<Props> = props => {
  const {isOneway, setIsOneway} = props;
  return (
    <View
      style={[
        styles.radioButtonContainer,
        {marginBottom: ScreenUtils.scale(16)},
      ]}>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          checked={isOneway}
          onChange={() => setIsOneway?.(!isOneway)}
        />
        <Text style={styles.optionTxt}>{translate('SearchScreen.oneWay')}</Text>
      </View>
      <View
        style={[
          styles.radioButtonContainer,
          {marginLeft: ScreenUtils.scale(10)},
        ]}>
        <RadioButton
          checked={!isOneway}
          onChange={() => setIsOneway?.(!isOneway)}
        />
        <Text style={styles.optionTxt}>
          {translate('SearchScreen.roundTrip')}
        </Text>
      </View>
    </View>
  );
};
