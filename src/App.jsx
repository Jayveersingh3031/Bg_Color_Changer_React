import { useState } from "react"


function App() {
const [color, setcolor]=useState("olive");
  return (
       <div className="w-full h-screen flex justify-center"style={{backgroundColor:color}}>
        <div className="fixed bottom-12 flex justify-center">
          <div className="bg-white rounded-xl px-4 py-2 flex gap-3">
            <button onClick={()=>setcolor("red")} className="text-white rounded-2xl py-1 px-2 bg-red-600">Red</button>
            <button onClick={()=>setcolor("green")} className="text-white rounded-2xl py-1 px-2 bg-green-600" >green</button>
            <button onClick={()=>setcolor("blue")} className="text-white rounded-2xl py-1 px-2 bg-blue-500">blue</button>
          </div>
        </div>
       </div>
  )
}

export default App
