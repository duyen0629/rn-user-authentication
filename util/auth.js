import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;

async function createUser(email, password) {
  return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });
}

export { createUser };
