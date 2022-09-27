 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";

 const firebaseConfig = {
  apiKey:"AIzaSyB8P67DwlEEbAF7vm0CicBVq0I5WMqOw_c",
  authDomain: "admin-db20c.firebaseapp.com",
  projectId: "admin-db20c",
  storageBucket: "admin-db20c.appspot.com",
  messagingSenderId: "55763029139",
  appId: "1:55763029139:web:73c8fd3af9af72bac75166"
};

 const app = initializeApp(firebaseConfig);
export const auth =  getAuth()
 //test@admin.dev
 //123123