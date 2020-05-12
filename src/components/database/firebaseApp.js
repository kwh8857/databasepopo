import firebaseApp from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDUPeWaXtipXQHOSeNaYkWtIFa5LxyRCzY",
  authDomain: "fir-databasetutolial.firebaseapp.com",
  databaseURL: "https://fir-databasetutolial.firebaseio.com",
  projectId: "fir-databasetutolial",
  storageBucket: "fir-databasetutolial.appspot.com",
  messagingSenderId: "193600972713",
  appId: "1:193600972713:web:feb1df10a120f4387586b8"
};
// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig);
export default firebaseApp;