import * as firebase from 'firebase';



var firebaseConfig = {
  apiKey: <YOUR KEY HERE>,
  authDomain: "ersdialer.firebaseapp.com",
  databaseURL: "https://ersdialer.firebaseio.com",
  projectId: "ersdialer",
  storageBucket: "ersdialer.appspot.com",
  messagingSenderId: "484417766763",
  appId: <YOUR APP ID HERE>,
  measurementId: "G-499K3JNDNS"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// Get a reference to the database service
var database = firebase.database();

export default database;

