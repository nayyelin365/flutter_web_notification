import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class NotificationService {
  Future<void> listenNotifications() async {
    await FirebaseMessaging.instance.requestPermission(provisional: true);
    // Register the service worker for web (only for web)
    if (kIsWeb) {
      // Manually register the service worker for Firebase Messaging
      try {
        await FirebaseMessaging.instance.setAutoInitEnabled(true);
      } catch (e) {
        print('Failed to initialize FCM: $e');
      }
    }
    FirebaseMessaging messaging = FirebaseMessaging.instance;

    NotificationSettings settings = await messaging.requestPermission(
      alert: true,
      announcement: false,
      badge: true,
      carPlay: false,
      criticalAlert: false,
      provisional: false,
      sound: true,
    );

    print('User granted permission: ${settings.authorizationStatus}');

    FirebaseMessaging.onMessage.listen(_showFlutterNotification);
  }

  void _showFlutterNotification(RemoteMessage message) {
    debugPrint('Got a message whilst in the foreground!');
    debugPrint('Message data: ${message.data}');

    if (message.notification != null) {
      debugPrint(
          'Message also contained a notification: ${message.notification?.title}');
    }
    // Feel free to add UI according to your preference, I am just using a custom Toast.
  }

  void getToken() async {
    final fcmToken = await FirebaseMessaging.instance.getToken(
        vapidKey:
            "BIeFx78idiTW05gMVF4cnH2xDy84rLe-oKsdIO9ahLk2IYO_5HfEyEYYojYSxyXs5yGkUc9FMYbQLTMF7FCBZnw");

    debugPrint('Token: $fcmToken');
  }
}
