import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBRRN1wP8ZdVsV2-O8BJRuEe9W8DD3r-N0",
  authDomain: "chat-app-signal-59a5a.firebaseapp.com",
  projectId: "chat-app-signal-59a5a",
  storageBucket: "chat-app-signal-59a5a.firebasestorage.app",
  messagingSenderId: "540808767557",
  appId: "1:540808767557:web:bab841daa88227d7bedb2c"
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();


// HuyPhung
