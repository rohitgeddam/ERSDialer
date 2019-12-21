import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//----screens import
import MainScreen from "./src/screens/MainScreen"
import SearchServerScreen from "./src/screens/SearchServerScreen"
//--screen import end

const TabNavigator = createBottomTabNavigator({
  MainScreen : MainScreen,
  SearchServerScreen : SearchServerScreen,
},
  {
    defaultNavigationOptions:({ navigation }) => ({
      tabBarIcon: ({ focused,horizontal,tintColor}) =>{
        const { routeName } = navigation.state;

        let IconComponent = FontAwesome;
        let iconName;


        if(routeName === 'MainScreen'){
          iconName = "address-book";
        }
        else if(routeName === 'SearchServerScreen'){
          iconName = "search";
        }

        return <IconComponent name={iconName} size={25} color={tintColor}/>;
      },
    }),

    tabBarOptions:{
      activeTintColor:'#fff',
      inactiveTintColor:'#fff',
      inactiveBackgroundColor:'#3b5998',
      activeBackgroundColor:'#192f6a',
      showLabel:false,
    },

  }

);

const AppContainer = createAppContainer(TabNavigator)

export default function App() {
  return (
    // <MainScreen/>
    <AppContainer/>
  );
}

