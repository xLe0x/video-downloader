import axios from "axios";
import { useState } from "react"

function App() {
  const [url, setUrl] = useState("");
  const [type, setType] = useState("");
  

  function handleInput(e) {
    if(e.target.value !== "") {
        if(type !== "") {
        setUrl(e.target.value)
      }
    }
  }
  return (
    <div className="grid place-content-center m-6">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="url" className="outline outline-gray-500 rounded mx-8" onChange={handleInput} />
        <div className="flex items-center justify-center mt-8">
        <button className="mr-4 px-2 py-1 bg-slate-800 text-white rounded-md" onClick={() => setType("mp4")}>Video</button>
        <p>OR</p>
        <button className="ml-4 px-2 py-1 bg-slate-800 text-white rounded-md" onClick={() => setType("mp3")}>Audio</button>
        </div>
      </form>
      <iframe className="mt-8 rounded-lg" src={url && type && `https://convert2mp3s.com/api/single/${type}?url=${url}`} width="100%" height="100%" allowtransparency="true"></iframe>
    </div>
  )
}

export default App
