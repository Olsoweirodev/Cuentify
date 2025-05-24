import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase yapılandırma bilgileri (Firebase Console’dan kopyaladığın bilgiler)
const firebaseConfig = {
  apiKey: "AIzaSyDgVm_OGwcbFrczb1tCr8Gq3j0euZt-_SM",
  authDomain: "cuentify-123.firebaseapp.com",
  projectId: "cuentify-123",
  storageBucket: "cuentify-123.firebasestorage.app",
  messagingSenderId: "430479061222",
  appId: "1:430479061222:web:f20451660c2a2223958b27"
};

// Firebase’i başlat
const app = initializeApp(firebaseConfig);

// Authentication modülünü al
const auth = getAuth(app);

export { auth };