let firebaseConfig = { 
    apiKey: "AIzaSyCmZy9b6W7eF2cD1qc8SukEm36y54ztR6w", 
    authDomain: "blog-page-83b86.firebaseapp.com", 
    projectId: "blog-page-83b86", 
    storageBucket: "blog-page-83b86.appspot.com", 
    messagingSenderId: "718812907772", 
    appId: "1:718812907772:web:8a6cca2e80d2ff23f02f79" 
}; 
// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}