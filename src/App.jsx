import { useState } from 'react'
import MyMap from './components/MyMap'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MyMap/>
    </>
  )
}

export default App
