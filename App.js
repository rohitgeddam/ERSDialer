import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

//----screens import
import MainScreen from "./src/screens/MainScreen"
import SearchServerScreen from "./src/screens/SearchServerScreen"
import AddNumberModal from "./src/screens/AddNumberModal"
import ModalScreen from './src/screens/AddNumberModal';
//--screen import end


//create 2 seperate navigation stack
const MainStack = createStackNavigator(
  {

    Home : MainScreen,
    
  
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#192f6a',
        
      },
     

      
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },

  }
   
  


);


const SearchStack = createStackNavigator(
  
  {

     
      SearchServer:SearchServerScreen,
      
   
  },

  {
    
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#192f6a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },

  }
   
  


  )


  const SearchStackWithModal = createStackNavigator(
    {
      Main:{
        screen: SearchStack,
      },
      MyModal:{
        screen: ModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
   
    }
  )




const TabNavigator = createBottomTabNavigator({

  Home : MainStack,
  SearchServer:SearchStackWithModal,

  
},
  {
    defaultNavigationOptions:({ navigation }) => ({
      tabBarIcon: ({ focused,horizontal,tintColor}) =>{
        const { routeName } = navigation.state;

        let IconComponent = FontAwesome;
        let iconName;


        if(routeName === 'Home'){
          iconName = "address-book";
        }
        else if(routeName === 'SearchServer'){
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

