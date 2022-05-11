import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAhdEs8jV8lYjtJkVy3omRMw2qVfTmMc1k',
  authDomain: 'bueberry-d1082.firebaseapp.com',
  projectId: 'bueberry-d1082',
  storageBucket: 'bueberry-d1082.appspot.com',
  messagingSenderId: '142828013488',
  appId: '1:142828013488:web:284bc0954fc41e3b277875',
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
