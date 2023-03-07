import {HeaderApp, Separator} from '@components';
import {ScreenUtils} from '@helpers';
import {translate} from '@shared';
import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import {MultiStageScreen, OneWayAndRoundTripScreen} from './components';
import styles from './styles';

const TabKey = {
  ONEROUND: 'ONE_WAY/ROUND_TRIP',
  MULTI: 'MULTI_STAGE',
};

export const SearchScreen = () => {
  const [index, setIndex] = useState<number>(0);

  const routes = [
    {
      key: TabKey.ONEROUND,
      title: `${translate('SearchScreen.oneWay')} / ${translate(
        'SearchScreen.roundTrip',
      )}`,
    },
    {key: TabKey.MULTI, title: translate('SearchScreen.multiStage')},
  ];

  const renderTabBar = useCallback(props => {
    return (
      <TabBar
        {...props}
        style={styles.tabBar}
        renderIndicator={() => null}
        renderLabel={({route, focused}) => {
          return (
            <View>
              <TouchableOpacity style={[styles.tabItem]}>
                <View style={styles.tabTitleContainer}>
                  <Text
                    style={[styles.tabTitle, focused && styles.tabTitleActive]}>
                    {route.title}
                  </Text>
                </View>
                {focused && <Separator style={styles.separatorStyles} />}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  }, []);

  const renderScene = useCallback(
    ({route}: {route: {key: string; title: string}}) => {
      switch (route.key) {
        case TabKey.ONEROUND:
          return <OneWayAndRoundTripScreen />;
        case TabKey.MULTI:
          return <MultiStageScreen />;
        default:
          return null;
      }
    },
    [],
  );

  return (
    <View style={styles.container}>
      <HeaderApp
        isCenter
        titleCenter={translate('SearchScreen.search')}
        isGoBack={false}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: ScreenUtils.WIDTH_SCREEN}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};
