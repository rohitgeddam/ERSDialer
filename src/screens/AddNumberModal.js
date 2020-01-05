
import React from 'react';
import {TextInput,Alert,View ,Text,Button,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import database from '../firebaseConfig'
import DateTimePicker from "react-native-modal-datetime-picker";
// import {Select} from 'react-native-dropdown'
import { Dropdown } from 'react-native-material-dropdown';
import moment from "moment"
import { ScrollView } from 'react-native-gesture-handler';

let val = true;

// var valid = true
export default class ModalScreen extends React.Component {

 
  constructor(props){
    super(props);
    this.state ={
      isDateTimePickerVisible: false,
      dob: '',
      fname: '',
      lname: '',
      number: '',
      valid: true,
      bloodGroup:'',
      address:'',
    }
    this.addUser = this.addUser.bind(this)
  }
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date.toString());
    this.setState({
      dob:moment(date).format('MMMM do YYYY'),
    })
    console.log(this.state.dob)
    this.hideDateTimePicker();
  };

  flip(){
    console.log(flip)
  }


  addUser = (fname,lname,number,dob,address,bloodGroup)=>{
    

  if(number.match(/^-{0,1}\d+$/) && (number.length == 10 || number.length === 7)){

    //check if usenamr or number already exists
    
    // let numberRef = database.ref('numbers');

    // numberRef.once("value").then((snapshot)=>{
    //   const that = this;
    //   const data = snapshot.val();
    //   var keys = Object.keys(data);
    //   for(var i = 0;i<keys.length - 1;i++){
    //     var k = keys[i];
    //     var knumber = data[k].number;
    //     console.log(knumber)
    //     if(knumber == number){
    //       console.log("already exists")
    //         that.setState({
    //             valid:false,
    //         })

    //     }
       
    //   }
    // })

    
 
        // Alert.alert(
        //   'ERROR',
        //   'A user with same credentials already exists',
        //   [
            
           
        //     { text: 'OK', onPress: () => console.log('OK Pressed') },
        //   ],
        //   { cancelable: false }
        // );
    const that = this;
      database.ref('numbers').orderByChild('number').equalTo(number).once("value",snapshot =>{
        const data = snapshot.val()
        if(data){
          console.log("number exists")
          Alert.alert(
          'ERROR',
          'A user with same credentials already exists',
          [
            
           
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        );
        }else{
          console.log("number dosent")
                 database.ref('Users/').push({
          fname,
          lname,
          number
      }).then((data)=>{
          //success callback
          console.log("ok")
      }).catch((error)=>{
          //error callback
          console.log("ok")
      })
  
  
      database.ref('names/').push({
        name: fname + lname,
        
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  
    database.ref('numbers/').push({
      number,
      
  }).then((data)=>{
      //success callback
      console.log('data ' , data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })


  database.ref('other/').push({
   number,dob,address,bloodGroup
  }).then((data)=>{
    console.log(data)
  }).catch((error)=>{
    console.log(error)
  })
  
  
      
      this.props.navigation.goBack()

     



        }
      })



    

     



      console.log(val)






  //       database.ref('Users/').push({
  //         fname,
  //         lname,
  //         number
  //     }).then((data)=>{
  //         //success callback
  //         console.log("ok")
  //     }).catch((error)=>{
  //         //error callback
  //         console.log("ok")
  //     })
  
  
  //     database.ref('names/').push({
  //       name: fname + lname,
        
  //   }).then((data)=>{
  //       //success callback
  //       console.log('data ' , data)
  //   }).catch((error)=>{
  //       //error callback
  //       console.log('error ' , error)
  //   })
  
  //   database.ref('numbers/').push({
  //     number,
      
  // }).then((data)=>{
  //     //success callback
  //     console.log('data ' , data)
  // }).catch((error)=>{
  //     //error callback
  //     console.log('error ' , error)
  // })
  
  
      
  //     this.props.navigation.goBack()

     

      
    
    
    








  }else{
    Alert.alert(
        'Wrong Number',
        'Please check the entered number',
        [
          
         
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
      
  }


  




  }

  
 

    render() {
      console.log(this.state.bloodGroup)
      let IconComponent = FontAwesome;
      const options = [
        {
          value: 'O+'
        },
        {
          value: 'O-'
        },
        {
          value: 'B+'
        },
        {
          value: 'B-'
        },
        {
          value: 'A+'
        },
        {
          value: 'A-'
        },
        ,{
          value:'AB'
        }
      ];


      return (
        <View style={{ flex: 1, alignItems: 'center' }}>
       
          <Header
            rightComponent={
              <Button
              style = {styles.CloseButton}
              type="clear"
              color="#192f6a"
              title="X"
              
             
              
              onPress={() => this.props.navigation.goBack()}
              
             />
            }
            centerComponent={{ text: 'Add a Number', style: { color: '#fff' ,fontSize:20} }}
            backgroundColor="#192f6a"
          />
        
        <ScrollView>
        <Text style={{alignSelf:'center',fontSize:24,color:"#192f6a" ,marginTop:15}}>Please Enter The Following Details</Text>

        <TextInput
            style = {styles.ModalInputName}
            placeholder='Enter First Name Here'
            // errorStyle={{ color: 'red' }}
            onChangeText={(text) => this.setState({fname: text})}
            
          />
           <TextInput
            style = {styles.ModalInputName}
            placeholder='Enter Last Name Here'
            // errorStyle={{ color: 'red' }}
            onChangeText={(text) => this.setState({lname: text})}
            
          />
            <TextInput
            style = {styles.ModalInputName}
            keyboardType = 'numeric'
            placeholder='Enter Phone Number Here'
            // errorStyle={{ color: 'red' }}
            onChangeText={(text) => this.setState({number: text})}

            
          />

          
          <TextInput
            style = {styles.ModalInputName}
            editable = {false}
            placeholder='Enter DOB Here'
            value={this.state.dob}
            // errorStyle={{ color: 'red' }}
        

            
          />    
         <View>
         <Button title="Date Picker" onPress={this.showDateTimePicker}/>
         </View>
           
          
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
              datePickerModeAndroid={'spinner'}
              mode={'date'}
            />
          
         
          
          <TextInput
            style = {styles.AddressBar}
            
            placeholder='Address'
            multiline={true}
            // errorStyle={{ color: 'red' }}
            onChangeText={(text) => this.setState({address: text})}

            
          />
           {/* <View style={ styles.container }>
        <Select
          options={options}
          defaultOption={4}
          onSelect={(index) => { console.log(index, 'is selected.'); }}/>
      </View> */}
      <View style={{flex:1,width:"80%"}}>
      <Dropdown
        label='Blood Group'
        data={options}
        itemTextStyle	={{color:'black',borderBottomColor:'grey',borderBottomWidth:0.5,fontSize:18}}
        
        
        onChangeText={(value)=> {this.setState({
          bloodGroup:value
        })}}
      />
      </View>
        
        <Text style={{alignSelf:'center',fontSize:30,color:"#192f6a" ,marginTop:30}}>Scroll Down</Text>
          <View style={styles.buttonContainer}>
              <Button
              
                color="#24a0ed"
                onPress={() => this.addUser(this.state.fname.toLowerCase(),this.state.lname.toLowerCase(),this.state.number,this.state.dob.toLowerCase(),this.state.address.toLowerCase(),this.state.bloodGroup.toLowerCase())}
                title="add to contact"
              />
          </View>

        </ScrollView>
         
         
         
         
        </View>
      );
    }
  }


  const styles = StyleSheet.create({

    ModalInputName:{
      marginTop:10,
      fontSize:20,
      borderColor: '#192f6a', 
      borderWidth: 1,
      
      padding: 10,
        },
    ModalInputNumber:{
      marginTop:10,
      

    },
    AddressBar:{
      textAlignVertical: "top",
      width:"95%",
      marginTop:10,
      fontSize:20,
      borderColor: '#192f6a', 
      
      borderWidth: 1,
      padding: 10
    },
    CloseButton:{
      fontSize:36
    },
    
    
    buttonContainer:{
      marginTop:100,
      alignSelf:'center',
      backgroundColor: '#24a0ed',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 10,
      shadowOpacity: 0.25

    }
  })