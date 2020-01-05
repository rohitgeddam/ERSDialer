import React from 'react'
import {Alert, View ,Text ,StyleSheet,ScrollView,ActivityIndicator} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import { ThemeProvider ,Button,SearchBar,ListItem} from 'react-native-elements'
import {Header} from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';

import database from "../firebaseConfig"
import FontAwesome from 'react-native-vector-icons/FontAwesome'


var contacts = [];
var displayUsers = [];

export default class SearchServerScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
        isLoading:true,
        search: '',
       
        // llist:[],
    }
    this.getDataForList = this.getDataForList.bind(this)
  }

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


  

//   componentDidMount(){
//     //fetch data
    

//   const events = database.ref('Users');
//   const query = events.orderByChild('name').limitToFirst(20);



// // ------------------------------
// // var ref = database.ref("Users");
// query.once('value',(snapshot)=>{
  
//   const users = snapshot.val();
//   // console.log(data.val());
//   // var keys = Object.keys(users);
//   // // console.log(keys);
//   // for(var i = 0;i < keys.length;i++){
//   //   var k = keys[i];
//   //   var name = users[k].name;
//   //   var number = users[k].number;
//   //   // console.log(name,number);
//   //   that.state.dataSource.push({
//   //     name : name,number:number
//   //   })
//   // }

//   var u = Object.keys(users).map(function(key){
//     return users[key]
//   })
//   this.setState({
//     list: u
//   })

// })
// }

loadContact = ()=>{


  const events = database.ref('Users');
  const query = events.orderByChild('name');


  
// ------------------------------
// var ref = database.ref("Users");
query.on('value',(snapshot)=>{
  
  const users = snapshot.val();
  console.log(users)

  var u = Object.keys(users).map(function(key){
    return users[key]
  })

  var sorter = u.sort(function(a,b){
    if(a.fname < b.fname) return -1;
    else if (a.fname > b.fname) return 1;
    return 0;
  });
 
  contacts = sorter;
  // console.log(contacts)
})



    this.setState({isLoading:false})

}


componentDidMount() {
 this.setState({isLoading:false})
 this.loadContact()
 this.getDataForList()
 

}

handleChange= text =>{
  
  this.setState({search:text})
  this.getDataForList()
  // if(displayUsers.length < 1){
  //   displayUsers = contacts
  // }
 //  console.log(this.state.contacts)
}

getDataForList = () =>{
  const word = this.state.search.toLowerCase();
  // console.log(contacts)
  // contacts.forEach((contact)=>{
  //   console.log(contact.fname)
  // })

  var filteredUsers = contacts.filter((contact)=>{
    // console.log(contact.fname,contact.lname)
    const name = contact.fname +" " +  contact.lname
    const name1 =  contact.fname + contact.lname
    return (contact.fname.includes(word) || contact.lname.includes(word) || name.includes(word) || name1.includes(word) )
      
    
  })
  // filteredUsers.forEach((contact)=>{
  //     console.log(contact.fname,contact.lname)
  //   })
  // this.setState({
  //   contacts : filteredUsers
  // })

  var sorted = filteredUsers.sort(function(a,b){
    if(a.fname < b.fname) return -1;
    else if (a.fname > b.fname) return 1;
    return 0;
  });
  
  displayUsers = sorted;
  
 
 }
 
   
  

    
    // getfData = () => {

       
    //         if(this.state.search){
    //           const events = database.ref('Users');
              
    //           const query = events.orderByChild('fname').startAt(this.state.search.toLowerCase()).endAt(`${this.state.search.toLowerCase()}\uf88f`).limitToFirst(20);
              
              

            

    //         // ------------------------------
    //         // var ref = database.ref("Users");
    //         query.on('value',(snapshot)=>{
              
    //           const users = snapshot.val();
    //           // console.log(data.val());
    //           // var keys = Object.keys(users);
    //           // // console.log(keys);
    //           // for(var i = 0;i < keys.length;i++){
    //           //   var k = keys[i];
    //           //   var name = users[k].name;
    //           //   var number = users[k].number;
    //           //   // console.log(name,number);
    //           //   that.state.dataSource.push({
    //           //     name : name,number:number
    //           //   })
    //           // }
    //           console.log(users)

    //          if( users == null){

    //           // Alert.alert(
    //           //   'Alert Title',
    //           //   'My Alert Msg',
    //           //   [
    //           //     { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
    //           //     {
    //           //       text: 'Cancel',
    //           //       onPress: () => console.log('Cancel Pressed'),
    //           //       style: 'cancel',
    //           //     },
    //           //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    //           //   ],
    //           //   { cancelable: false }
    //           // );
    //           this.setState({
    //             fname: []
    //           })
    //           return null

    //          }else{
    //           var u = Object.keys(users).map(function(key){
    //             return users[key]
    //           })
    //           this.setState({
    //            flist: u
    //           })
    //          }
              

    //         })
    //         }
    //         else{


    //           const events = database.ref('Users');
    //           const query = events.orderByChild('fname').limitToFirst(20);
              
            

            

    //         // ------------------------------
    //         // var ref = database.ref("Users");
    //         query.on('value',(snapshot)=>{
              
    //           const users = snapshot.val();
    //           // console.log(data.val());
    //           // var keys = Object.keys(users);
    //           // // console.log(keys);
    //           // for(var i = 0;i < keys.length;i++){
    //           //   var k = keys[i];
    //           //   var name = users[k].name;
    //           //   var number = users[k].number;
    //           //   // console.log(name,number);
    //           //   that.state.dataSource.push({
    //           //     name : name,number:number
    //           //   })
    //           // }
    //           console.log(users)

    //          if( users == null){

    //           // Alert.alert(
    //           //   'Alert Title',
    //           //   'My Alert Msg',
    //           //   [
    //           //     { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
    //           //     {
    //           //       text: 'Cancel',
    //           //       onPress: () => console.log('Cancel Pressed'),
    //           //       style: 'cancel',
    //           //     },
    //           //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    //           //   ],
    //           //   { cancelable: false }
    //             this.setState({

    //             fname: []
    //           })
    //           return null

    //          }else{
    //           var u = Object.keys(users).map(function(key){
    //             return users[key]
    //           })
    //           this.setState({
    //             flist: u
    //           })
    //          }

              

    //         })

    //         }
            


        


    // }


   


//     getlData=()=>{
//       if(this.state.search){
//         const events = database.ref('Users');
        
//         const query = events.orderByChild('lname').startAt(this.state.search).endAt(`${this.state.search}\uf88f`).limitToFirst(20);
        
        

      

//       // ------------------------------
//       // var ref = database.ref("Users");
//       query.on('value',(snapshot)=>{
        
//         const users = snapshot.val();
//         // console.log(data.val());
//         // var keys = Object.keys(users);
//         // // console.log(keys);
//         // for(var i = 0;i < keys.length;i++){
//         //   var k = keys[i];
//         //   var name = users[k].name;
//         //   var number = users[k].number;
//         //   // console.log(name,number);
//         //   that.state.dataSource.push({
//         //     name : name,number:number
//         //   })
//         // }
//         console.log(users)

//        if( users == null){

//         // Alert.alert(
//         //   'Alert Title',
//         //   'My Alert Msg',
//         //   [
//         //     { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
//         //     {
//         //       text: 'Cancel',
//         //       onPress: () => console.log('Cancel Pressed'),
//         //       style: 'cancel',
//         //     },
//         //     { text: 'OK', onPress: () => console.log('OK Pressed') },
//         //   ],
//         //   { cancelable: false }
//         // );
//         this.setState({
//           lname: []
//         })
//         return null

//        }else{
//         var u = Object.keys(users).map(function(key){
//           return users[key]
//         })
//         this.setState({
//          llist: u
//         })
//        }
        

//       })
//       }
//       else{


//         const events = database.ref('Users');
//         const query = events.orderByChild('lname').limitToFirst(20);
        
      

      

//       // ------------------------------
//       // var ref = database.ref("Users");
//       query.on('value',(snapshot)=>{
        
//         const users = snapshot.val();
//         // console.log(data.val());
//         // var keys = Object.keys(users);
//         // // console.log(keys);
//         // for(var i = 0;i < keys.length;i++){
//         //   var k = keys[i];
//         //   var name = users[k].name;
//         //   var number = users[k].number;
//         //   // console.log(name,number);
//         //   that.state.dataSource.push({
//         //     name : name,number:number
//         //   })
//         // }
//         console.log(users)

//        if( users == null){

//         // Alert.alert(
//         //   'Alert Title',
//         //   'My Alert Msg',
//         //   [
//         //     { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
//         //     {
//         //       text: 'Cancel',
//         //       onPress: () => console.log('Cancel Pressed'),
//         //       style: 'cancel',
//         //     },
//         //     { text: 'OK', onPress: () => console.log('OK Pressed') },
//         //   ],
//         //   { cancelable: false }
//         // );
//         this.setState({
//           fname: []
//         })
//         return null

//        }else{
//         var u = Object.keys(users).map(function(key){
//           return users[key]
//         })
//         this.setState({
//           llist: u
//         })
//        }

        

//       })

//       }
      


  


// }




    


      // updateSearch = search => {
      //  let  s = search.toLowerCase()
        
      //   this.setState({ search:s });
      //   this.getfData()
      //   // this.getlData()
        
        
      // };



    render(){


      console.log(this.state.search)

      // if(this.state.search === ''){
      //   this.getfData


      // }
      if(this.state.search === ''){
        displayUsers = contacts;
      }

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
                        onChangeText=  {(text)=>this.handleChange(text)}
                        value={this.state.search}
                    />

                {
                 
                  (this.state.isLoading) ? 
                  
                  <View style={[styles.container, styles.horizontal]}>
                  <ActivityIndicator size="large" color="#0000ff" />
                  </View>
                    : 
                    <ScrollView>
                    {
                      
                            displayUsers.map((l, i) => (
                                <ListItem
                                    key={i}
                                    Component={TouchableScale}
                                    bottomDivider= {true}
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
                                      name:l.fname + " " + l.lname,
                                      icon:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                      // subtitle:l.numb,
                                      phoneNumber:l.number,
                                    })} 
                                    //   ViewComponent={LinearGradient} // Only if no expo
                                    styles={{margin:4}}
                                    leftAvatar={{ rounded: true, source: { uri:  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                                    title={`${l.fname} ${l.lname}`} 
                                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                                    subtitleStyle={{ color: 'white' }}
                                    subtitle={l.number}
                                    chevron={{ color: 'white' }}
                                    />
                            ))
                        }

                    </ScrollView>
                
                }

                  
                    
                      
                        

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
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
    });