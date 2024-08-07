import { PLAY_BUTTON } from "../utils/constants"
import MORE_INFO from "../assets/more-info.svg"

/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[18%] px-20 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 text-md w-5/12 text-white">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black py-2 px-6 text-lg rounded-lg flex justify-between hover:bg-opacity-80">
          <img className="w-4 h-4 mt-[7px] mr-3" src={PLAY_BUTTON} />Play</button>
        <button className="bg-gray-400 text-white py-2 px-6 text-lg bg-opacity-50 rounded-lg mx-2 flex justify-between align-middle">
          <img className="w-6 h-6 mt-[2px] mr-3" src={MORE_INFO}/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle