import {ScreenUtils} from '@helpers';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {Modalize} from 'react-native-modalize';
import styles from './styles';

interface OwnProps {
  modalizeRef?: any;
  minStartDate?: any;
  onChooseDate: (val: any) => void;
}

type Props = OwnProps;
export const ModalChooseDate: FunctionComponent<Props> = props => {
  const {modalizeRef, onChooseDate, minStartDate} = props;
  return (
    <Modalize ref={modalizeRef} modalHeight={ScreenUtils.HEIGHT_SCREEN / 2.7}>
      <View style={styles.contentModal}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={false}
          selectedStartDate={minStartDate}
          minDate={minStartDate ? minStartDate : new Date()}
          maxDate={new Date(2024, 0, 1)}
          todayBackgroundColor="white"
          onDateChange={onChooseDate}
        />
      </View>
    </Modalize>
  );
};
