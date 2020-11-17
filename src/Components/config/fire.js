import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCgqhI_iOBbbnAnCJsG-DXrr7E0JxeTjkU",
    authDomain: "phone-selling-interface.firebaseapp.com",
    databaseURL: "https://phone-selling-interface.firebaseio.com",
    projectId: "phone-selling-interface",
    storageBucket: "phone-selling-interface.appspot.com",
    messagingSenderId: "162561936983",
    appId: "1:162561936983:web:2fd674d4d6e011b8105d12",
    measurementId: "G-7CWPGP351T"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;