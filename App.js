
import React from 'react';
import FlexDirection from "./src/FlexDirection";
import JustifyContent from "./src/JustifyContent";
import AlignItems from "./src/AlignItems";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';

const DrawerNavigator = createDrawerNavigator(
  {
    FlexDirection: createStackNavigator({ screen: FlexDirection }),
    JustifyContent: createStackNavigator({ screen: JustifyContent }),
    AlignItems: createStackNavigator({ screen: AlignItems })
  }, {
      drawerBackgroundColor: '#212121',
      contentOptions :{
          activeTintColor: 'white',
          inactiveTintColor: '#D4E157',
          activeBackgroundColor: '#D4E157',
          inactiveBackgroundColor: '#212121'
      }
  }
);

export default createAppContainer(DrawerNavigator);