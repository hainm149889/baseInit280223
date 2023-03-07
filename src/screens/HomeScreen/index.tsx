import {HeaderApp} from '@components';
import {SCREENS} from '@configs';
import {ResponseDataUser} from '@models';
import {HomeParamsList} from '@navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {translate} from '@shared';
import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export interface HomeNavParams {
  userData: ResponseDataUser;
}
interface OwnProps {}

type Props = OwnProps;

type NavigationRoute = RouteProp<HomeParamsList, SCREENS.HOME>;

export const HomeScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute<NavigationRoute>();
  const data = route?.params?.userData;

  return (
    <View style={styles.container}>
      <HeaderApp isGoBack={false} />
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
