import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoswypP7kwz3nasGfNBeLBPCbCTZukL9c",
  authDomain: "react-demo-34a9a.firebaseapp.com",
  projectId: "react-demo-34a9a",
  storageBucket: "react-demo-34a9a.appspot.com",
  messagingSenderId: "382048057544",
  appId: "1:382048057544:web:b3339629b7e52053334dfd",
  measurementId: "G-0QHHFE0CZP"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseStorage = getStorage(firebaseApp);

export {firebaseApp, firebaseStorage}