import { useState } from 'react';
import Page from './Components/Page';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar className="absolute z-100 top-0 left-0 right-0 w-full" />

      <Page/>
    </div>
  )
}

export default App
