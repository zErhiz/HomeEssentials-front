import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from "uuid"

const firebaseConfig = {
  apiKey: "AIzaSyCkw-kLMLJdZrxuUtDCcExKdDSleoNSEBU",
  authDomain: "home-essentials-9e639.firebaseapp.com",
  projectId: "home-essentials-9e639",
  storageBucket: "home-essentials-9e639.appspot.com",
  messagingSenderId: "544382157244",
  appId: "1:544382157244:web:75fa3925bfcdc2b95eabb9"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export async function uploadFile(file, page){
    const storageRef = ref(storage, page+v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}