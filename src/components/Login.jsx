import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {

  const navigate = useNavigate();
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

    // Sign In / Sign Up Logic

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIux1GKJj8xTQXxvhU9X5hE3ezkWwGFuVVfvF98N8AwYxtuH50o8W8uHnZg&s"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            navigate("/browse")
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
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
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
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
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