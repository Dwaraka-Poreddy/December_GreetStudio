import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtLkVsVzRuNO4Vrpq96UaVk6vghIAbj38",
  authDomain: "update-image.firebaseapp.com",
  databaseURL: "https://update-image.firebaseio.com",
  projectId: "update-image",
  storageBucket: "update-image.appspot.com",
  messagingSenderId: "760869146000",
  appId: "1:760869146000:web:08608045caa9dc4288f715",
  measurementId: "G-RKNX2Y23RH"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

const fb = firebase;

export { storage, fb as default };
