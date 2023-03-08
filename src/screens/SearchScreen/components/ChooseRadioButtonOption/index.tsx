import {RadioButton} from '@components';
import {ScreenUtils} from '@helpers';
import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface OwnProps {
  isOptionOne?: boolean;
  setIsOptionOne?: (val: any) => void;
  titleOptionOne?: string;
  titleOptionTwo?: string;
}

type Props = OwnProps;
export const ChooseRadioButtonOption: FunctionComponent<Props> = props => {
  const {isOptionOne, setIsOptionOne, titleOptionOne, titleOptionTwo} = props;
  return (
    <View
      style={[
        styles.radioButtonContainer,
        {marginBottom: ScreenUtils.scale(16)},
      ]}>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          checked={isOptionOne}
          onChange={() => setIsOptionOne?.(!isOptionOne)}
        />
        <Text style={styles.optionTxt}>{titleOptionOne}</Text>
      </View>
      <View
        style={[
          styles.radioButtonContainer,
          {marginLeft: ScreenUtils.scale(10)},
        ]}>
        <RadioButton
          checked={!isOptionOne}
          onChange={() => setIsOptionOne?.(!isOptionOne)}
        />
        <Text style={styles.optionTxt}>{titleOptionTwo}</Text>
      </View>
    </View>
  );
};
