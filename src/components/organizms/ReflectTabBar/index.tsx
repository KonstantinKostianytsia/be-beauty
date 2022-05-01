import React, {useMemo} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Animated, StyleSheet, View} from 'react-native';
import {Path} from 'react-native-svg';
import * as Shape from 'd3-shape';
import {useTheme} from 'helpers/hooks/useTheme';
import {getTabs} from 'constants/MainScreenTabs';
import styles from './styles';
import {AnimatedSvg} from 'components/atoms/AnimatedSvg';
import {StaticTabBar} from './StaticTabBar';
import {TAB_BAR_HEIGHT} from './StaticTabBar';
import {getWindowDimensions} from 'helpers/dimensionsHelper';

const {width} = getWindowDimensions();

const getPath = (tabs: Array<any>) => {
  const tabWidth = width / tabs.length;
  const left = Shape.line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: 0, y: 0},
    {x: width, y: 0},
  ]);

  const tab = Shape.line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(Shape.curveBasis)([
    {x: width, y: 0},
    {x: width + 5, y: 0},
    {x: width + 10, y: 10},
    {x: width + 15, y: TAB_BAR_HEIGHT},
    {x: width + tabWidth - 15, y: TAB_BAR_HEIGHT},
    {x: width + tabWidth - 10, y: 10},
    {x: width + tabWidth - 5, y: 0},
    {x: width + tabWidth, y: 0},
  ]);

  const right = Shape.line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: width + tabWidth, y: 0},
    {x: width * 2, y: 0},
    {x: width * 2, y: TAB_BAR_HEIGHT},
    {x: 0, y: TAB_BAR_HEIGHT},
    {x: 0, y: 0},
  ]);

  return `${left} ${tab} ${right}`;
};

export const ReflectTabBar = (props: BottomTabBarProps) => {
  const theme = useTheme();
  const tabs = getTabs(theme.images);
  const d = getPath(tabs);
  const tabWidth = width / tabs.length;

  const value = new Animated.Value(props.state.index * tabWidth);

  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width, 0],
  });

  const onPress = (index: number) => {
    props.navigation.navigate({name: tabs[index].name, merge: true});
  };

  /// We have to use useMemo to prevent rerender of the tabBar for correct animations
  return useMemo(
    () => (
      <>
        <View style={{width, height: TAB_BAR_HEIGHT}}>
          <AnimatedSvg
            width={width * 2}
            height={TAB_BAR_HEIGHT}
            style={[
              styles.svgContainerStyles,
              {
                backgroundColor: theme.colors.pink,
                transform: [{translateX}],
              },
            ]}>
            <Path d={d} fill="white" />
          </AnimatedSvg>
          <View style={[StyleSheet.absoluteFill]}>
            <StaticTabBar tabs={tabs} value={value} onPress={onPress} />
          </View>
        </View>
      </>
    ),
    [],
  );
};
