import { useState } from 'react'
// Components
import Home from '../components/Home';
import '../assets/css/App.styl'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
