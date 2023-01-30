// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD6cJq8HNz0taYat-vEWlEO7D-YbWV_El4',
  authDomain: 'workout-register-b4048.firebaseapp.com',
  projectId: 'workout-register-b4048',
  storageBucket: 'workout-register-b4048.appspot.com',
  messagingSenderId: '1000249049011',
  appId: '1:1000249049011:web:bace2251527cc7f7bad5c6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}
