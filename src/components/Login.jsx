import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import USER_URL from "../assets/netflix-profile-pictures.jpg";
import { NETFLIX_BG_URL } from "../utils/constants";

const Login = () => {

  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    let message = null;
    if (isSignInForm) {
      message = checkValidData(null, email.current.value, password.current.value);
    } else {
      message = checkValidData(name.current.value, email.current.value, password.current.value);
    }
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_URL
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
          }).catch((error) => {
            setErrorMessage(error.message)
          })
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BG_URL}
          alt="Logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 p-12 bg-black text-white my-28 mx-auto left-0 right-0 rounded-md bg-opacity-80">
        <h1 className="text-3xl font-bold py-5">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-md bg-transparent border-solid border-2 border-gray-600"
          />
        }
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-md bg-transparent border-solid border-2 border-gray-600"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-md bg-transparent border-solid border-2 border-gray-600"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-md"
          onClick={() => handleButtonClick()}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login