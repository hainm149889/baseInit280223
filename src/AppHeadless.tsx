import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

export const AppHeadless = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return null;
};
