import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA07fbYWwpD3iWMGUAM6zVaFzzEviHXEPk",
  authDomain: "bt3103-7c681.firebaseapp.com",
  databaseURL: "https://bt3103-7c681.firebaseio.com",
  projectId: "bt3103-7c681",
  storageBucket: "bt3103-7c681.appspot.com",
  messagingSenderId: "730985364484",
  appId: "1:730985364484:web:60f24c4ddfdebade4c0951",
  measurementId: "G-HR5XXF1P93"
};
  
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;