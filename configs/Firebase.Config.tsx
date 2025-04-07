// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//@ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB43n9s9S8xRqsB6ZOisYD8wfx9q_mRmbo",
  authDomain: "festagram-2b914.firebaseapp.com",
  projectId: "festagram-2b914",
  storageBucket: "festagram-2b914.firebasestorage.app",
  messagingSenderId: "293272951986",
  appId: "1:293272951986:web:00a6eac02b69a1c4f07dab",
  measurementId: "G-DGKWBRCGPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// const analytics = getAnalytics(app);