import React from 'react';
import {ITab} from 'models/screens/MainScreenTabs';
import {Animated, TouchableWithoutFeedback, View, Image} from 'react-native';
import {
  getActiveIconStyles,
  getIconCircle,
  getTabContainerStyles,
} from './styles';
import {useTheme} from 'helpers/hooks/useTheme';
import {getWindowDimensions} from 'helpers/dimensionsHelper';

const {width} = getWindowDimensions();
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
  const theme = useTheme();

  const values: Animated.Value[] = tabs.map(
    (tab, index) => new Animated.Value(index === 0 ? 1 : 0),
  );

  const onPress = (index: number) => {
    const {value} = props;

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
    setTimeout(() => {
      props.onPress(index);
    }, 500);
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
                  resizeMode="contain"
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
              <View style={getIconCircle(theme.colors.white, IMAGE_WIDTH * 2)}>
                <Image
                  resizeMode="contain"
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
