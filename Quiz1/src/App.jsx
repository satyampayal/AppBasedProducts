import { useState } from 'react'
import Quiz from './Componenets/Quiz';
import './App.css'
import Start from './Componenets/Start';
function App() {
  const [isStart, setIsStart] = useState(false);

  return (
    <div className='w-[100%] h-[100vh]  flex justify-center place-items-center '>
    {isStart?<Quiz/>:<Start play={()=>setIsStart(true)} />}
    </div>
  )
}

export default App
