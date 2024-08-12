import { useSelector } from "react-redux"
import lang from "../utils/langConstants"

const GPTSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" placeholder={lang[langKey]?.gptPlaceHolder}
          className="p-2 m-2 rounded-lg col-span-9" />
        <button
          className="py-2 px-4 m-2 bg-red-800 text-white rounded-lg col-span-3">
          {lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar