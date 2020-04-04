import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDoUQNUFp0MAEyzcQ2Sh9lRkh39U07POs0",
  authDomain: "plans-faaff.firebaseapp.com",
  databaseURL: "https://plans-faaff.firebaseio.com",
  projectId: "plans-faaff",
  storageBucket: "plans-faaff.appspot.com",
  messagingSenderId: "286337419385",
  appId: "1:286337419385:web:3616fc8272c604297beca8",
  measurementId: "G-KZK1ZFDK07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({
//   timestampsInSnapshots: true
// });
// firebase.analytics();

export default firebase;