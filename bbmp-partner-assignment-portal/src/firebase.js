// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv98Aah_so9KB9Zj5u4naPq0nJ4YbnBK4",
  authDomain: "bbmp-partner-assignment-portal.firebaseapp.com",
  databaseURL: "https://bbmp-partner-assignment-portal-default-rtdb.firebaseio.com",
  projectId: "bbmp-partner-assignment-portal",
  storageBucket: "bbmp-partner-assignment-portal.appspot.com",
  messagingSenderId: "762886017411",
  appId: "1:762886017411:web:d349406af6cf3236bde6b6",
  measurementId: "G-Y2Z145N61C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);