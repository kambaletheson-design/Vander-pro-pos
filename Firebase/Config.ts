import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "WEKA_API_KEY_YAKO_HAPA",
  authDomain: "WEKA_AUTH_DOMAIN_YAKO_HAPA", 
  projectId: "WEKA_PROJECT_ID_YAKO_HAPA",
  storageBucket: "WEKA_STORAGE_BUCKET_YAKO_HAPA",
  messagingSenderId: "WEKA_SENDER_ID_YAKO_HAPA",
  appId: "WEKA_APP_ID_YAKO_HAPA"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
