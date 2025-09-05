import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtT_AKRPEDRsqfmdKqL3pQL6KXhBgbsTA",
  authDomain: "bigboss-57f51.firebaseapp.com",
  projectId: "bigboss-57f51",
  storageBucket: "bigboss-57f51.firebasestorage.app",
  messagingSenderId: "460444453070",
  appId: "1:460444453070:web:69b9185f36699eda1ee89f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
