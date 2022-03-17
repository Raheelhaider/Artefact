// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  Online configration for the datbase 
const firebaseConfig = {
    apiKey: "AIzaSyAiBVQ__6Utv976lx67gPfJpTE-4bup1HQ",
    authDomain: "microbit-6e479.firebaseapp.com",
    databaseURL: "https://microbit-6e479-default-rtdb.firebaseio.com/",
    projectId: "microbit-6e479",
    storageBucket: "microbit-6e479.appspot.com",
    messagingSenderId: "1091962523077",
    appId: "1:1091962523077:web:e59526b1db9361ccb38fac"
  };
// for 
  firebase.initializeApp(firebaseConfig)
// the Object MyDB has been created to store the Fiebase database refrence. 
  var myDB = firebase.database().ref('data');
// the function definiation for the turn On/Off button has been created.
  function turnOn(){
      alert("ON");
// the function will chnage the vaue withinthe firbase database to On once called.
         myDB.set({
             'Condition' : 'on'
         });
    }
// the function will chnage the vaue withinthe firbase database to Off once called.
    function turnOff(){
        alert("Off");
        myDB.set({
            'Condition' : 'off'
        });
    }

    