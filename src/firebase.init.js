import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// NOT IDEAL to SHARE API in public
const firebaseConfig = {
  apiKey: "AIzaSyDdSuTf9s_OQBpfQ3UqWsIQ9o2PYjl43SM",
  authDomain: "email-password-auth-e887c.firebaseapp.com",
  projectId: "email-password-auth-e887c",
  storageBucket: "email-password-auth-e887c.firebasestorage.app",
  messagingSenderId: "1076271121565",
  appId: "1:1076271121565:web:51d39b914b75f75a084074",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
