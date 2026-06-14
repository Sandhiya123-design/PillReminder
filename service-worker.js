self.addEventListener("install", (e) => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker activated");
  return self.clients.claim();
});

// (Optional) Show notification if push is received
self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "Pill Reminder";
  const body = data.body || "Time to take your medicine 💊";

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: "Gemini_Generated_Image_itxv59itxv59itxv.png",
      vibrate: [200, 100, 200],
      badge: "Gemini_Generated_Image_itxv59itxv59itxv.png"
    })
  );
});
