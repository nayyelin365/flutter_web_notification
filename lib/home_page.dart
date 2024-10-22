import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:flutter_web_notification/notifications_services.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  var token = '';
  @override
  void initState() {
    super.initState();
    final notificationService = NotificationService();

    notificationService.getToken();
    Future.delayed(Duration(seconds: 1), () async {
      token = await getFcmToken();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter Web Notification'),
      ),
      body: Center(
        child: Column(
          children: [
            Text(
              'Flutter Web Notification $token',
            ),
            ElevatedButton(
              onPressed: () {
                setState(() {});
              },
              child: const Text('Get FCM Token'),
            ),
          ],
        ),
      ),
    );
  }

  Future<String> getFcmToken() async {
    final fcmToken = await FirebaseMessaging.instance.getToken(
        vapidKey:
            "BIeFx78idiTW05gMVF4cnH2xDy84rLe-oKsdIO9ahLk2IYO_5HfEyEYYojYSxyXs5yGkUc9FMYbQLTMF7FCBZnw");

    print('Token: $fcmToken');
    return fcmToken ?? 'no token';
  }
}
