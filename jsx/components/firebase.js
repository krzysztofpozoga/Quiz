import * as Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCO1wIpXqCaxjyZInO1Djg-k0ngVV-sXxo",
    authDomain: "hisquiz.firebaseapp.com",
    databaseURL: "https://hisquiz.firebaseio.com",
    projectId: "hisquiz",
    storageBucket: "",
    messagingSenderId: "843638065814"
  };

  let fb = Firebase.initializeApp(config);
  let db = fb.database().ref();

export default db;
