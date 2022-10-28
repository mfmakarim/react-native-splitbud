import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCGnL8P8L3ROW3AnxPFGnR_qbEcsPfqZ8',
  authDomain: 'split-21d33.firebaseapp.com',
  projectId: 'split-21d33',
  storageBucket: 'split-21d33.appspot.com',
  messagingSenderId: '306134283389',
  appId: '1:306134283389:web:e08537ef28619fd23b2d14',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
