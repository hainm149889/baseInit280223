import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {translate} from '@shared';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text>{translate('homeScreen')}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
