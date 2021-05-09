import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD59amDwObxXTQPUWmQ1CN76tdsCiGRdRA",
  authDomain: "instagram-clone-64f1c.firebaseapp.com",
  projectId: "instagram-clone-64f1c",
  storageBucket: "instagram-clone-64f1c.appspot.com",
  messagingSenderId: "335805485433",
  appId: "1:335805485433:web:741055e5b4079d97521fa8"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();  
const auth=firebase.auth();
const storage=firebase.storage();
const provider= new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider};