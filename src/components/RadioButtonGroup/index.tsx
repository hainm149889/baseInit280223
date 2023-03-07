import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RadioButton} from '../RadioButton/RadioButton';

interface OwnProps {
  arrOptions: Array<string>;
  checked: number;
  setChecked: (key: any) => void;
}

type Props = OwnProps;
export const RadioButtonGroup: FunctionComponent<Props> = props => {
  const {arrOptions, checked, setChecked} = props;
  console.log('🚀 ~ file: index.tsx:14 ~ checked:', checked);
  return (
    <View>
      <View style={styles.btn}>
        {arrOptions?.map((option, key) => {
          return (
            <View key={option}>
              {checked === key ? (
                <TouchableOpacity style={styles.btn}>
                  <RadioButton />
                  <Text>{option}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                  }}
                  style={styles.btn}>
                  <RadioButton />
                  <Text>{option}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
      {/* <Text>{gender[checked]}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
