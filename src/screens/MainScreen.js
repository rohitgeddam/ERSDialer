import React from 'react'
import { View ,Text ,StyleSheet,ScrollView} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import { ThemeProvider ,Button,SearchBar,ListItem} from 'react-native-elements'
import {Header} from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';
const list = [
    // {
    //   name: 'Amy Farha',
    //   avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    //   subtitle: 'Vice President',
    //   phoneNumber:6266218189
    // },
    // {
    //   name: 'Chris Jackson',
    //   avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //   subtitle: 'Vice Chairman',
    //   phoneNumber:6266218189

    // },
    // {
    //     name: 'Amy Farha',
    //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    //     subtitle: 'Vice President',
    //     phoneNumber:6266218189
    //   },
    //   {
    //     name: 'Chris Jackson',
    //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //     subtitle: 'Vice Chairman',
    //     phoneNumber:6266218189
    //   },
    //   {
    //     name: 'Amy Farha',
    //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    //     subtitle: 'Vice President',
    //     phoneNumber:6266218189
    //   },
    //   {
    //     name: 'Chris Jackson',
    //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //     subtitle: 'Vice Chairman',
    //     phoneNumber:6266218189
    //   },
    //   {
    //       name: 'Amy Farha',
    //       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    //       subtitle: 'Vice President',
    //       phoneNumber:6266218189
    //     },
    //     {
    //       name: 'Chris Jackson',
    //       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //       subtitle: 'Vice Chairman',
    //       phoneNumber:6266218189
    //     },   {
    //         name: 'Chris Jackson',
    //         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //         subtitle: 'Vice Chairman',
    //         phoneNumber:6266218189
    //       },
    //       {
    //         name: 'Amy Farha',
    //         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    //         subtitle: 'Vice President',
    //         phoneNumber:6266218189
    //       },
    //       {
    //         name: 'Chris Jackson',
    //         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //         subtitle: 'Vice Chairman',
    //         phoneNumber:6266218189
    //       },
    //       {
    //           name: 'Amy Farha',
    //           avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    //           subtitle: 'Vice President',
    //           phoneNumber:6266218189
    //         },
    //         {
    //           name: 'Chris Jackson',
    //           avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //           subtitle: 'Vice Chairman',
    //           phoneNumber:6266218189
    //         },
    
  ]


export default class MainScreen extends React.Component{



    static navigationOptions = {
        title: 'ERS-DIALER',
        headerTitleStyle: { flex: 1, textAlign: 'center'},
        /* No more header config here! */
        // headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
      };
    
      /* render function, etc */
    
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    render(){
        const {search} = this.state;

        return(

            <View style={{flex:1}}>
                 <ThemeProvider theme={theme}>
                {/* <Header
                   
                    centerComponent={{ text: 'ERS-Dialer', style: { color: "#fff",fontSize:20} }}
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
                                    // onPress={()=> }
                                    onPress={() => this.props.navigation.navigate('Detail',{
                                      name:l.name,
                                      icon:l.avatar_url,
                                      subtitle:l.subtitle,
                                      phoneNumber:l.phoneNumber,
                                    })}
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


            </View>
           
          
        )
    }
}


const theme = {
    Header: {
        backgroundColor:"#192f6a"
    },
    SearchBar:{
       inputContainerStyle:{
           backgroundColor:"#fff",
       },
       containerStyle:{
        backgroundColor:"#192f6a"
       }
    },
    ListItem:{
        bottomDivider:true
    }

    }
    