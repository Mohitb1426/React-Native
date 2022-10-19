import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCONK3Oeg6CxlfhRY35awe9DOmqK9lIzfw',
  authDomain: 'react-native-firebase-2c01d.firebaseapp.com',
  projectId: 'react-native-firebase-2c01d',
  storageBucket: 'react-native-firebase-2c01d.appspot.com',
  messagingSenderId: '1092370280056',
  appId: '1:1092370280056:web:a014777f62ae561bd3078d',
  measurementId: 'G-PX97ZF0VRN',
});
export const auth = app.auth();
export default app;
