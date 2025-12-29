import { useState } from 'react'



import Buttons from './components/buttons.jsx'
import './App.css'
import Card from './components/card.jsx'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        <Card title="Sample Card" img="https://images.unsplash.com/photo-1766326789373-6f30e149f1ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" img2="https://plus.unsplash.com/premium_photo-1763825865931-9a0850bf1cac?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  content="This is the back of the card." />
      </div>
     <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
        <Buttons text="Hello" color="bg-blue-500"/>
    </div>
    </>
  )
}

export default App
