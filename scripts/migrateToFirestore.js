const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore');
const fs = require('fs').promises;
const path = require('path');

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyDgVm_OGwcbFrczb1tCr8Gq3j0euZt-_SM",
  authDomain: "cuentify-123.firebaseapp.com",
  projectId: "cuentify-123",
  storageBucket: "cuentify-123.firebasestorage.app",
  messagingSenderId: "430479061222",
  appId: "1:430479061222:web:f20451660c2a2223958b27"
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function migrateToFirestore() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'stories.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const stories = JSON.parse(fileContents);

    for (const story of stories) {
      // Hikayeye authorId ekle (test için sabit bir ID)
      const updatedStory = {
        ...story,
        authorId: "cblFQUSvoZhHuxeVMyCg6VHuTIj1" // Gerçek uid ile değiştirilecek
      };
      await setDoc(doc(db, 'stories', story.id), updatedStory);
      console.log(`Hikaye taşındı: ${story.title}`);
    }

    console.log('Tüm hikayeler Firestore’a taşındı!');
  } catch (error) {
    console.error('Hata oluştu:', error);
  }
}

migrateToFirestore();