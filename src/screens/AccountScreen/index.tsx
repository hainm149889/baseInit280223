import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {translate} from '@shared';

export const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>{translate('accountScreen')}</Text>
    </View>
  );
};
