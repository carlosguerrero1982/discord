import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDIY1i7oUvduN0akyq4yy13vYS9Hok38nM",
    authDomain: "discord-46355.firebaseapp.com",
    databaseURL: "https://discord-46355.firebaseio.com",
    projectId: "discord-46355",
    storageBucket: "discord-46355.appspot.com",
    messagingSenderId: "827797521669",
    appId: "1:827797521669:web:2d08ba42e860e28d0b636c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };

  export default db;