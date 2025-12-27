import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Card from './components/card.jsx'
function App() {
  const [count, setCount] = useState(0)
   // const [Value,function] = useState(default);// React hooks are methods
  const [name,setName]=useState("React") 
  return (
    <>
      <div>
        <Card title="Sample Card" img="https://images.unsplash.com/photo-1766326789373-6f30e149f1ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" content="This is the back of the card." />
      </div>

    </>
  )
}

export default App
