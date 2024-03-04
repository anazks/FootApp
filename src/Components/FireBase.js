// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB2ZtRpBAExS3qLTVf34TTbXjvVk1lTkE",
  authDomain: "smartfeet-1c64f.firebaseapp.com",
  databaseURL: "https://smartfeet-1c64f-default-rtdb.firebaseio.com",
  projectId: "smartfeet-1c64f",
  storageBucket: "smartfeet-1c64f.appspot.com",
  messagingSenderId: "641895496481",
  appId: "1:641895496481:web:2b46831e515e734c8d5c60",
  measurementId: "G-G9LNSLE4Z4"
};

firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export default firebase;