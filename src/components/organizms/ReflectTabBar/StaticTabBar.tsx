import React from 'react';
import {ITab} from 'models/screens/MainScreenTabs';
import {
  Animated,
  TouchableWithoutFeedback,
  View,
  Image,
  Dimensions,
} from 'react-native';
import styles, {getActiveIconStyles, getTabContainerStyles} from './styles';

const {width} = Dimensions.get('window');
const IMAGE_WIDTH = 25;
const IMAGE_HEIGHT = 27;
export const TAB_BAR_HEIGHT = 64;

interface StaticTabBarProps {
  tabs: Array<ITab>;
  value: Animated.Value;
  onPress: (index: number) => void;
}

export const StaticTabBar = (props: StaticTabBarProps) => {
  const {tabs} = props;
  const tabWidth = width / tabs.length;

  const values: Animated.Value[] = tabs.map(
    (tab, index) => new Animated.Value(index === 0 ? 1 : 0),
  );

  const onPress = (index: number) => {
    const {value} = props;

    props.onPress(index);

    Animated.sequence([
      ...values.map(animated =>
        Animated.timing(animated, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      {tabs.map((tab, index) => {
        const activeValue = values[index];
        return (
          <React.Fragment key={tab.name}>
            <TouchableWithoutFeedback onPress={() => onPress(index)}>
              <Animated.View
                style={getTabContainerStyles(
                  tabWidth,
                  TAB_BAR_HEIGHT,
                  props.value,
                  index,
                )}>
                <Image
                  style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                  source={tab.icon}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={getActiveIconStyles(
                tabWidth,
                TAB_BAR_HEIGHT,
                index,
                activeValue,
              )}>
              <View style={styles.circle}>
                <Image
                  style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                  source={tab.icon}
                />
              </View>
            </Animated.View>
          </React.Fragment>
        );
      })}
    </View>
  );
};
