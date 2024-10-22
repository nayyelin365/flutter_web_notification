// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");
const firebaseConfig = {
    apiKey: "AIzaSyB2vSW0qH3tOgJ-qazF4ROIZg1gVgqllJk",
    authDomain: "flutterwebnoti.firebaseapp.com",
    projectId: "flutterwebnoti",
    storageBucket: "flutterwebnoti.appspot.com",
    messagingSenderId: "473484473329",
    appId: "1:473484473329:web:f407da95f122e7b4b98a50",
    measurementId: "G-7VL5PB78HN"
  };
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
 
});