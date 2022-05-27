
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCKH8Euec_NN1RrM23TvJ_MUqpMr7QfqWw",
  authDomain: "eventtracker-969eb.firebaseapp.com",
  projectId: "eventtracker-969eb",
  storageBucket: "eventtracker-969eb.appspot.com",
  messagingSenderId: "79268772288",
  appId: "1:79268772288:web:07d43b6106c1e4dfcf7025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)