import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2vSW0qH3tOgJ-qazF4ROIZg1gVgqllJk",
    authDomain: "flutterwebnoti.firebaseapp.com",
    projectId: "flutterwebnoti",
    storageBucket: "flutterwebnoti.appspot.com",
    messagingSenderId: "473484473329",
    appId: "1:473484473329:web:f407da95f122e7b4b98a50",
    measurementId: "G-7VL5PB78HN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = getMessaging(app);

// Request notification permission
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
  }
});

// Listen for messages when the app is in the foreground
onMessage(messaging, (payload) => {
  console.log('Foreground message received:', payload);

  // Show notification manually
  if (Notification.permission === 'granted') {
    new Notification(payload.notification.title, {
      body: payload.notification.body,
      icon: payload.notification.icon,
    });
  }

  // Play notification sound
  playNotificationSound();
});

function playNotificationSound() {
  const audio = new Audio('/sounds/preview.mp3');
  audio.play();
}
