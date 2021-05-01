import firebase from "firebase/app";
import { firebaseConfig } from "./config";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBupDegmbzcteoUSKtefDt5E7strUtXyX8",
  authDomain: "ecommercewebsite-865f2.firebaseapp.com",
  projectId: "ecommercewebsite-865f2",
  storageBucket: "ecommercewebsite-865f2.appspot.com",
  messagingSenderId: "739115696817",
  appId: "1:739115696817:web:cd0a5cdfb2107d01ac9890",
  measurementId: "G-DJK42E4KTN",
};
const app = firebase.initializeApp(firebaseConfig);
// if (process.env.REACT_APP_DEPLOY_ENV='production') {
//     firebase.initializeApp(productionConfig)
//   } else {
//     firebase.initializeApp(developmentConfig)
//   }

export default app;
