
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc,doc } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCyiq9EKpdMbMAui1sTssWoCOCQIIQMVBk",
    authDomain: "fir-javascript-crud-3016f.firebaseapp.com",
    projectId: "fir-javascript-crud-3016f",
    storageBucket: "fir-javascript-crud-3016f.appspot.com",
    messagingSenderId: "227116450313",
    appId: "1:227116450313:web:f4f9fd6bfa0fc727796ed8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore()

  export const saveTask = (title, description) =>
      addDoc(collection(db, 'tasks'), {title, description});

  export const getTasks = () => getDocs(collection(db,'tasks'))
//funcion para evitar exportar onSnapshot, collection, db
  export const onGetTasks = (callback) => onSnapshot(collection(db,'tasks'),callback)
//ahora tenemos que exportar onGetTasks en index.js para poder actualizar las tareas en tiempo real

  export const deleteTask = id => deleteDoc(doc(db, 'tasks',id))