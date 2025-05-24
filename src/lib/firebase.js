import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgVm_OGwcbFrczb1tCr8Gq3j0euZt-_SM",
  authDomain: "cuentify-123.firebaseapp.com",
  projectId: "cuentify-123",
  storageBucket: "cuentify-123.firebasestorage.app",
  messagingSenderId: "430479061222",
  appId: "1:430479061222:web:f20451660c2a2223958b27"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };