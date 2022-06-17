import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPwk8nAjZmdsV3yWS3pyPeRMw1IIomHbs",
  authDomain: "learn-app-auth.firebaseapp.com",
  projectId: "learn-app-auth",
  storageBucket: "learn-app-auth.appspot.com",
  messagingSenderId: "75852301750",
  appId: "1:75852301750:web:2044f61f4df6c3228e6d17",
  measurementId: "G-4VGM7TG31Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;