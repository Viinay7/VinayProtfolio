// lib/saveUser.ts
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";

// Type definition for user
interface User {
  name: string;
  email: string;
  age: number;
}

export const saveUser = async (user: User) => {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
