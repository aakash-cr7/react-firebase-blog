import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDdjYQN94PjN88twoFVsAMC7AbKqVb-fTk',
  authDomain: 'react-blog-2f9ee.firebaseapp.com',
  databaseURL: 'https://react-blog-2f9ee.firebaseio.com',
  projectId: 'react-blog-2f9ee',
  storageBucket: 'react-blog-2f9ee.appspot.com',
  messagingSenderId: '75763983214',
  appId: '1:75763983214:web:1d201d11d043991c2f577f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
window.firestore = firestore;
