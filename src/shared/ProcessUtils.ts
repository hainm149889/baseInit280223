import {CONSTANT} from '@configs';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkIfFirstLaunch = async () => {
  try {
    const hasLaunched = await AsyncStorage.getItem(
      CONSTANT.TOKEN_STORAGE_KEY.FIRST_LAUNCH_APP,
    );
    return hasLaunched === null;
  } catch (error) {
    return false;
  }
};
