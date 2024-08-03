import { useState } from "react"
import Header from "./Header"

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
          alt="Logo" />
      </div>
      <form className="absolute w-4/12 p-12 bg-black text-white my-28 mx-auto left-0 right-0 rounded-md bg-opacity-80">
        <h1 className="text-3xl font-bold py-5">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input type="text" placeholder="Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-md bg-transparent border-solid border-2 border-gray-600" />}
        <input type="text" placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-md bg-transparent border-solid border-2 border-gray-600" />
        <input type="password" placeholder="Password"
          className="p-4 my-4 w-full bg-transparent rounded-md border-solid border-2 border-gray-600" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login