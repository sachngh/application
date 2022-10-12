import firebase from 'firebase/compat/app';


var firebaseConfig = {
    apiKey: "AIzaSyCdfHYEhMGj24fmJNR-npkRS8EzJ4YYR4Q",
    authDomain: "leave-application-12f6d.firebaseapp.com",
    databaseURL: "https://leaveproject-766fc-default-rtdb.firebaseio.com/",
    projectId: "leave-application-12f6d",
    storageBucket: "leave-application-12f6d.appspot.com",
    messagingSenderId: "1094070867172",
    appId: "1:1094070867172:web:a3ffc84c992d1a3b3fc8f1"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;