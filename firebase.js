firebase.js


    import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

    import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

    import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBwyyYafXD8fAJqyFdT8G7eXXmk_zBCKmE",
      authDomain: "answer-site.firebaseapp.com",
      projectId: "answer-site",
      storageBucket: "answer-site.firebasestorage.app",
      messagingSenderId: "334871277449",
      appId: "1:334871277449:web:cf02f074949f19583cbb58"
    };

    const app = initializeApp(firebaseConfig);

    export const auth = getAuth(app);
    export const db = getFirestore(app);

    export default app;
