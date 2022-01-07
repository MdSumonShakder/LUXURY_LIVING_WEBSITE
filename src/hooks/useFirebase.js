import { useEffect, useState } from "react";
import initializeFirebase from "./../Page/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";

//// initialize firebase app ////
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  ////////***********///////
  const loginUser = (email, password, location, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  ////////***********///////
  const registerUser = (email, password, name, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, "POST");
        ///////*****/////
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/home");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  ///////********///////
  const signInWithGoogle = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        const destination = location?.state?.from || "/home";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  ///////********///////
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setLoading(false));
  };

  ////*************/////////

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  ////*************/////////
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://thawing-wildwood-68433.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  //////**********//////

  return {
    user,
    loading,
    error,
    loginUser,
    registerUser,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
