/** @format */

import firebaseDb from "./config";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  collection,
  getDocs,
  where,
  addDoc,
  deleteDoc,
  onSnapshot,
  limit,
  orderBy,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";







//how to get UID(unique identification of user)
export const getUID = () => {
  if (firebaseDb.auth.currentUser !== null) {
    return firebaseDb.auth.currentUser.uid;
  } else {
    return null;
  }
  //return firebaseDb.auth.currentUser.uid;
};

//get current signed in user
export const getUser = () => {
  return firebaseDb.auth.currentUser;
};

//signing user up with google
export const signInWithGoogle = async () => {
  await setPersistence(firebaseDb.auth, browserSessionPersistence);
  return await signInWithPopup(firebaseDb.auth, googleProvider)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};




//logging user in
export const logInWithEmailAndPassword = async (email, password) => {
  await setPersistence(firebaseDb.auth, browserSessionPersistence);
  return await signInWithEmailAndPassword(firebaseDb.auth, email, password)
    .then(() => {
      return true
    })
    .catch((err) => {
      return false;
    });
   
};

//register user with email and password
export const registerWithEmailAndPassword = async (data, photoUrl) => {
  await setPersistence(firebaseDb.auth, browserSessionPersistence);
  const res = await createUserWithEmailAndPassword(
    firebaseDb.auth,
    data.email,
    data.password,
  );
  const user = res.user;
  return await setDoc(doc(firebaseDb.db, `users/${user.uid}`), {
    uid: user.uid,
    username: data.name,
    authProvider: "local",
    email: data.email,
    photoUrl,
  })
    .then(() => {
      return true;
    })
    .catch((er) => {
      return false;
    });
};



//send password reset to users
export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(firebaseDb.auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//logout users
export const logout = () => {
  signOut(firebaseDb.auth);
};












//user uploading documents to firebase storage
export const uploadDoc = async (file, callback) => {
  const uid = getUID();
  const storage = firebaseDb.storage;
  const storageRef = ref(storage, `/workOrders/${uid}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on("state_changed", (snapshot) => {
    const percents = Math.round(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    callback(percents);
  });
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => reject(err),
      (res) => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};


const googleProvider = new GoogleAuthProvider();

export const photoUploadData = (file) => {
  const uid = getUID();
  const storage = firebaseDb.storage;
  const storageRef = ref(storage, `/users/photos/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => reject(err),
      (res) => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

export const updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    await updateDoc(
      doc(firebaseDb.db, `users/${getUID()}`),
      data
    )
      .then(() => {
        resolve(true);
      })
      .catch((er) => {
        reject(er);
      });
  });
};



