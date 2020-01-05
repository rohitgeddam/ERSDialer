import * as firebase from 'firebase';



var firebaseConfig = {
  apiKey: "AIzaSyCe4OcY1Cl28o7prIwZfXXm6XJmROx-W_Y",
  authDomain: "ersdialer.firebaseapp.com",
  databaseURL: "https://ersdialer.firebaseio.com",
  projectId: "ersdialer",
  storageBucket: "ersdialer.appspot.com",
  messagingSenderId: "484417766763",
  appId: "1:484417766763:web:9219ece02944511072382e",
  measurementId: "G-499K3JNDNS"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// Get a reference to the database service
var database = firebase.database();

export default database;

