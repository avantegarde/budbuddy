import firebase from 'firebase/app'
import 'firebase/firestore'

const configOptions = {
  apiKey: "AIzaSyAONPC5ZYM6ed-W5qlVxYPzfa7oY-aQIDk",
  authDomain: "budbuddy-232c4.firebaseapp.com",
  databaseURL: "https://budbuddy-232c4.firebaseio.com",
  projectId: "budbuddy-232c4",
  storageBucket: "gs://budbuddy-232c4.appspot.com",
  messagingSenderId: "475467948845"
};

//firebase.initializeApp(configOptions);

// Get a Firestore instance
//export const db = firebase.firestore()
export const db = firebase
  .initializeApp(configOptions)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
//db.settings({ timestampsInSnapshots: true })