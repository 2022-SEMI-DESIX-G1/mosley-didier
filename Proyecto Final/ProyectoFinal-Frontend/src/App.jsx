import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom';
import logo from './logo.svg'
import './App.css'
import Pages from './pages/Pages';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
     <BrowserRouter>
        <Pages/>
     </BrowserRouter>
    </div>
  )
}

export default App;
