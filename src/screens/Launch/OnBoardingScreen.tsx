/* eslint-disable react-native/no-inline-styles */
import {RadioButton} from '@components';
import {CONSTANT, SCREENS} from '@configs';
import {ScreenUtils} from '@helpers';
import {useStatusBar} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccountAction} from '@redux';
import {translate} from '@shared';
import {Themes} from '@themes';
import React, {FunctionComponent, useRef, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Flag from 'react-native-flags';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from 'src/redux/reducers';
import styles from './styles';

interface OwnProps {}

type Props = OwnProps;

export const OnBoardingScreen: FunctionComponent<Props> = props => {
  const scrollref = useRef<any>();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const language = useSelector(
    (state: IRootState) => state.account.language,
  ) as string;

  const [checkedLanguageUS, setCheckedLanguageUS] = useState(
    language === CONSTANT.LANGUAGES.EN,
  );
  const [checkedLanguageVN, setCheckedLanguageVN] = useState(
    language === CONSTANT.LANGUAGES.VI,
  );
  const [checkedLanguageJA, setCheckedLanguageJA] = useState(
    language === CONSTANT.LANGUAGES.JA,
  );

  const changeLanguage = (code: string) => {
    dispatch(
      AccountAction.changeLanguageWithLaunch(
        {language: code},
        {
          onSuccess: () => {
            switch (code) {
              case CONSTANT.LANGUAGES.EN:
                setCheckedLanguageUS(true);
                setCheckedLanguageJA(false);
                setCheckedLanguageVN(false);

                break;
              case CONSTANT.LANGUAGES.VI:
                setCheckedLanguageUS(false);
                setCheckedLanguageJA(false);
                setCheckedLanguageVN(true);

                break;
              case CONSTANT.LANGUAGES.JA:
                setCheckedLanguageUS(false);
                setCheckedLanguageJA(true);
                setCheckedLanguageVN(false);
                break;
            }
          },
        },
      ),
    );
  };

  const navigation = useNavigation<StackNavigationProp<any>>();
  useStatusBar('dark-content');

  const renderFirstLaunchView = () => {
    return (
      <View style={styles.firstLaunchContainer}>
        <Swiper
          ref={scrollref}
          loop={false}
          style={{zIndex: 3}}
          showsButtons={false}
          onIndexChanged={index => setCurrentIndex(index)}
          showsPagination={currentIndex !== 4}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}>
          <LinearGradient
            colors={[
              Themes.colors.primary,
              Themes.colors.white,
              Themes.colors.white,
              Themes.colors.white,
              Themes.colors.white,
            ]}
            style={styles.containerN}>
            <SafeAreaView>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>number 1</Text>
              </View>
            </SafeAreaView>
          </LinearGradient>
          <LinearGradient
            colors={[
              Themes.colors.primary,
              Themes.colors.white,
              Themes.colors.white,
              Themes.colors.white,
              Themes.colors.white,
            ]}
            style={styles.containerN}>
            <SafeAreaView>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>number 1</Text>
              </View>
            </SafeAreaView>
          </LinearGradient>
          <LinearGradient
            colors={[
              Themes.colors.primary,
              Themes.colors.white,
              Themes.colors.white,
              Themes.colors.white,
              Themes.colors.white,
            ]}
            style={styles.containerN}>
            <SafeAreaView>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>number 1</Text>
              </View>
            </SafeAreaView>
          </LinearGradient>
          <LinearGradient
            colors={[
              Themes.colors.primary,
              Themes.colors.white,
              Themes.colors.white,
              Themes.colors.white,
              Themes.colors.white,
            ]}
            style={styles.container}>
            <SafeAreaView>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>number 1</Text>
              </View>
            </SafeAreaView>
          </LinearGradient>
        </Swiper>
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      {renderFirstLaunchView()}
      {currentIndex === 0 && (
        <View style={styles.btnFooter}>
          <TouchableOpacity style={styles.btnPrev} />
          <TouchableOpacity
            style={styles.btnSkip}
            onPress={() => {
              navigation.navigate(SCREENS.BottomTabNavigation);
            }}>
            <Text style={styles.txtSkip}>{translate('welcome.skip')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => {
              scrollref?.current?.scrollTo(currentIndex + 1, false);
            }}>
            <Text style={styles.txtNext}>{translate('welcome.next')}</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentIndex === 1 && (
        <View style={styles.btnFooter}>
          <TouchableOpacity
            style={styles.btnPrev}
            onPress={() => {
              scrollref?.current?.scrollTo(currentIndex - 1, false);
            }}>
            <Text style={styles.txtSkip}>{translate('welcome.prev')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSkip}
            onPress={() => {
              navigation.navigate(SCREENS.BottomTabNavigation);
            }}>
            <Text style={styles.txtSkip}>{translate('welcome.skip')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => {
              scrollref?.current?.scrollTo(currentIndex + 1, false);
            }}>
            <Text style={styles.txtNext}>{translate('welcome.next')}</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentIndex === 2 && (
        <View style={styles.btnFooter}>
          <TouchableOpacity
            style={styles.btnPrev}
            onPress={() => {
              scrollref?.current?.scrollTo(currentIndex - 1, false);
            }}>
            <Text style={styles.txtSkip}>{translate('welcome.prev')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSkip}
            onPress={() => {
              navigation.navigate(SCREENS.BottomTabNavigation);
            }}>
            <Text style={styles.txtSkip}>{translate('welcome.skip')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => {
              scrollref?.current?.scrollTo(currentIndex + 1, false);
            }}>
            <Text style={styles.txtNext}>{translate('welcome.next')}</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentIndex === 3 && (
        <View style={styles.btnFooter}>
          <TouchableOpacity
            style={styles.btnPrev}
            onPress={() => {
              scrollref?.current?.scrollTo(currentIndex - 1, false);
            }}>
            <Text style={styles.txtSkip}>{translate('welcome.prev')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSkip} />
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => {
              navigation.navigate(SCREENS.BottomTabNavigation);
            }}>
            <Text style={styles.txtNext}>{translate('welcome.gotIt')}</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        deviceHeight={Dimensions.get('screen').height}
        useNativeDriver
        useNativeDriverForBackdrop
        statusBarTranslucent
        propagateSwipe={true}
        hardwareAccelerated={false}
        swipeDirection="down"
        isVisible={isVisible}
        avoidKeyboard={true}
        {...props}>
        <View style={[styles.containerModal]}>
          <Text style={{fontSize: 16, ...Themes.font.thin}}>
            {translate('button.language')}:
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginVertical: ScreenUtils.scale(17),
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Flag code={'VN'} size={48} />
              <RadioButton
                onChange={() => changeLanguage(CONSTANT.LANGUAGES.VI)}
                checked={checkedLanguageVN}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Flag code={'GB'} size={48} />
              <RadioButton
                onChange={() => changeLanguage(CONSTANT.LANGUAGES.EN)}
                checked={checkedLanguageUS}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Flag code={'JP'} size={48} />
              <RadioButton
                onChange={() => changeLanguage(CONSTANT.LANGUAGES.JA)}
                checked={checkedLanguageJA}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={{marginVertical: ScreenUtils.scale(20)}}>
            <Text>{translate('button.confirm')}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
