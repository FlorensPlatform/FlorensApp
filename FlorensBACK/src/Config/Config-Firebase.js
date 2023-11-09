const firebase = require("firebase-admin");

const firebaseConfig = {
    apiKey: "AIzaSyDnqou_LZYNUrH3PEmdELofoRGlYAqCqg4",
    authDomain: "appenfermeria-d612d.firebaseapp.com",
    projectId: "appenfermeria-d612d",
    storageBucket: "appenfermeria-d612d.appspot.com",
    messagingSenderId: "660550132391",
    appId: "1:660550132391:web:b538599e89f1bf79def182"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
  /* Configuración de conección */
  const db = firebase.firestore();

  module.exports = db;