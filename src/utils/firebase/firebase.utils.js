import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, query } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBg1yREnaWyGOkcxbqLHx9btoqNQDPEFl0',
  authDomain: 'crwn-clothing-db-b9518.firebaseapp.com',
  projectId: 'crwn-clothing-db-b9518',
  storageBucket: 'crwn-clothing-db-b9518.appspot.com',
  messagingSenderId: '1015445872978',
  appId: '1:1015445872978:web:c5bebda0aeefafac701a8b',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRf = doc(db, 'users', userAuth.uid);
  let userSnapshot = await getDoc(userDocRf);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      await setDoc(userDocRf, { displayName, email, creatAt, ...additionalInformation });
      // userSnapshot = await getDoc(userDocRf); 重新获取
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  console.log(userSnapshot);

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

export const onAuthStateChangedListener = callback => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resove, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe();
        resove(userAuth);
      },
      reject
    );
  });
};
