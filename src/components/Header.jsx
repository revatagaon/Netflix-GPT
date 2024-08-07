import { onAuthStateChanged, signOut } from "firebase/auth"
// import NetflixProfilePic from "../assets/netflix-profile-pictures.jpg"
import { auth } from "../utils/fireBase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addUser, removeUser } from "../store/userSlice"
import { LOGO } from "../utils/constants"

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

  useEffect(() => {
    const unsunscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
      } else {
        // logout
        dispatch(removeUser())
        navigate("/")
      }
    })
    // unsubscribe will be called when component unMounts
    return () => unsunscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        src={LOGO}
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