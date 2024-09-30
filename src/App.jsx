import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import FAQ from './components/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FAQ/>
    </>
  )
}

export default App
