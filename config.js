import firebase from 'firebase';
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyAjHC6DHyw8ADwtsdqbAjhdfHukrHQ72xs",
    authDomain: "barter-app1.firebaseapp.com",
    projectId: "barter-app1",
    storageBucket: "barter-app1.appspot.com",
    messagingSenderId: "646398829480",
    appId: "1:646398829480:web:780fe58e5e37eeb515739d"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
