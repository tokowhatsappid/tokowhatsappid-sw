// Import library Firebase untuk Service Worker
importScripts("https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.4.0/firebase-messaging.js");

// Konfigurasi Firebase (harus sama persis dengan yang kamu pakai di Blogger)
firebase.initializeApp({
  apiKey: "AIzaSyDHVLz9cNPwPK6_9gYHcisJwjbc9_RXqqA",
  authDomain: "bloggerloginnotif.firebaseapp.com",
  projectId: "bloggerloginnotif",
  storageBucket: "bloggerloginnotif.firebasestorage.app",
  messagingSenderId: "652545827585",
  appId: "1:652545827585:web:f79f93a65f69b99ee9b100"
});

// Inisialisasi Firebase Messaging agar service worker bisa menerima notifikasi
const messaging = firebase.messaging();

// Opsional: handle notifikasi background (kalau nanti mau dikembangkan)
messaging.onBackgroundMessage(function(payload) {
  console.log("📩 Notifikasi background diterima:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icon.png" // kamu bisa ganti dengan URL icon kamu sendiri
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
