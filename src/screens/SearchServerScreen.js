import React from 'react'
import { View ,Text ,StyleSheet,ScrollView} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import { ThemeProvider ,Button,SearchBar,ListItem} from 'react-native-elements'
import {Header} from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';


import FontAwesome from 'react-native-vector-icons/FontAwesome'

const list = [
   
    
  ]


export default class SearchServerScreen extends React.Component{

  // static navigationOptions = ({ navigation }) =>{
  //   const params = navigation.state.params || {};

  //   return{
  //     headerRight: () => (
  //       <Button
  //         onPress={()=>navigation.navigate('MyModal')}
  //         title="ADD"
  //         color={Platform.OS === 'ios' ? '#fff' : null}
        
  //       />
  //     )
  //   }


  // }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    let IconComponent = FontAwesome;
    return {
      title: "SEARCH",
      headerTitleStyle: { flex: 1, textAlign: 'center'},
      headerRight: () =>(
        <Button
        type="clear"
        
        icon={
          <IconComponent name="user-plus" size={25} color="#fff"/>
        }
        onPress={() => navigation.navigate('MyModal')}
        
       />
      )

      /* These values are used instead of the shared configuration! */
    };
  };

    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    render(){


      const { params } = this.props.navigation.state;
      const itemId = params ? params.itemId : null;
      const otherParam = params ? params.otherParam : null;
        const {search} = this.state;

        return(
            <ThemeProvider theme={theme}>
                {/* <Header
                    rightComponent={
                      <Button
                      onPress={()=>this.props.navigation.navigate('MyModal')}
                      title="ADD"
                      color="#fff"
                    
                      />}
                    centerComponent={{ text: 'SEARCH', style: { color: "#fff",fontSize:20} }}
                /> */}

                <View
                style={{ flex: 1, alignItems: 'stretch', height:100}}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={{ flex:1  }}>
                    <SearchBar

                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />


                    <ScrollView>
                    {
                            list.map((l, i) => (
                                <ListItem
                                    key={i}
                                    Component={TouchableScale}
                                    friction={90} //
                                    tension={100} // These props are passed to the parent component (here TouchableScale)
                                    activeScale={0.95} //
                                    linearGradientProps={{
                                        colors: ['#3b5998', '#192f6a'],
                                        start: [1, 0],
                                        end: [0.2, 0],
                                    }}
                                    //   ViewComponent={LinearGradient} // Only if no expo
                                    styles={{margin:4}}
                                    leftAvatar={{ rounded: true, source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                                    subtitleStyle={{ color: 'white' }}
                                    subtitle={l.subtitle}
                                    chevron={{ color: 'white' }}
                                    />
                            ))
                        }
                    </ScrollView>
                    
                      
                        

                 </LinearGradient>
                </View>
            </ThemeProvider>
          
        )
    }
}


const theme = {
    // Header: {
    //     backgroundColor:"#192f6a"
    // },
    // SearchBar:{
    //    inputContainerStyle:{
    //        backgroundColor:"#fff",
    //    },
    //    containerStyle:{
    //     backgroundColor:"#192f6a"
    //    }
    // },
    // ListItem:{
    //     bottomDivider:true
    // }

    }
    
