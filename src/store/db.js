import firebase from 'firebase/app'
import 'firebase/firestore'

/**
 * Input your firebase/firestore app credentials below
 */
const configOptions = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID"
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
