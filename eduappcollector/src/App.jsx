import { useState } from 'react'
import Page from './Components/Page'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Page/>
    </div>
  )
}

export default App
