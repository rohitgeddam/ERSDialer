import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { Avatar,Card,Button } from 'react-native-elements';

import {Linking} from 'react-native'




export default class DetailScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name',"no-name");
    const icon = navigation.getParam('icon',"no-icon");
    // const subtitle =navigation.getParam('subtitle',"subtitle");
    const phoneNumber = navigation.getParam('phoneNumber',null);
    
    return (
        <View style={styles.mainView}>
          <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.linearGradient}>



            <Card
        title={name}
        titleStyle={styles.cardTitle}
        avatar={{uri:icon}}
        containerStyle={styles.container}>

            <Avatar
                    
                    rounded
                    size="xlarge"
                    avatarStyle={styles.avatar}
                    containerStyle={styles.avatar}
                    source={{
                        uri:
                        icon
                    }}
                    /> 
          
            {/* <Text style = {styles.text}>{subtitle}</Text> */}
        
            <Text style = {styles.text}>{phoneNumber}</Text>
       <Button 
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainer}
            title="CALL"
            type="solid"
            onPress={()=>Linking.openURL(`tel:${phoneNumber}`)}
       
       />

       
    </Card>

        </LinearGradient>

       
      </View>
    );
  }
}








const styles = StyleSheet.create({

    mainView:{


    flex: 1, 
    alignItems: 'stretch', 
    // height:100
},
cardTitle:{
    fontSize:28,
},  
    linearGradient:{ 
        flex:1  ,
       
        
    },
    container:{
        height:'75%',
    },      
    text:{
        alignSelf:"center",
        marginTop:10,
        // fontWeight:"bold",
        fontSize:26,
    },
    
    avatar:{

        alignSelf:"center"
    },
    buttonContainer:{
        backgroundColor:"#192f6a",
        alignSelf:"center",
        width:"40%",
        borderRadius:1,
        marginLeft:0,
        marginTop:50,
        marginBottom:20,
    },
    buttonStyle:{
        backgroundColor:"#192f6a",
    }


})