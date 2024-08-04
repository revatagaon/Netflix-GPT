import { signOut } from "firebase/auth"
// import NetflixProfilePic from "../assets/netflix-profile-pictures.jpg"
import { auth } from "../utils/fireBase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  console.log(user, "user");


  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch(() => {
      navigate("/error")
    })
  }

  return (
    <div className="absolute px-24 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo" />
      {user && <div className="flex py-6">
        <img alt="User Icon" className="w-8 h-8"
          src={user?.photoURL} />
        <button className="font-bold text-white"
          onClick={handleSignOut}>(Sign Out)</button>
      </div>
      }
    </div>
  )
}

export default Header