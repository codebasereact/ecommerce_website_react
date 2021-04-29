import firebase from "firebase/app";
import { firebaseConfig } from "./config";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp(firebaseConfig);
// if (process.env.REACT_APP_DEPLOY_ENV='production') {
//     firebase.initializeApp(productionConfig)
//   } else {
//     firebase.initializeApp(developmentConfig)
//   }

export default app;
