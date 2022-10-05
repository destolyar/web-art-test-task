import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAI4lfruv2wM-AwqvLKX9ks6OoaL7N53po",
    authDomain: "web-art-test-task.firebaseapp.com",
    projectId: "web-art-test-task",
    storageBucket: "web-art-test-task.appspot.com",
    messagingSenderId: "926803265690",
    appId: "1:926803265690:web:ec52843d51d1471fa33723",
    measurementId: "G-701NZGCB8D"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export default firestore;