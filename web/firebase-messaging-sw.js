importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: 'AIzaSyB2vSW0qH3tOgJ-qazF4ROIZg1gVgqllJk',
    appId: '1:473484473329:web:f407da95f122e7b4b98a50',
    messagingSenderId: '473484473329',
    projectId: 'flutterwebnoti',
    authDomain: 'flutterwebnoti.firebaseapp.com',
    storageBucket: 'flutterwebnoti.appspot.com',
    measurementId: 'G-7VL5PB78HN',
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
  const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
