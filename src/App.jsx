import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Nav from './Components/nav'
import Rout from './Components/Rout'

function App() {


  return (
    <>
        <BrowserRouter>
            <Nav/>
            <Rout/>
        </BrowserRouter>
    </>
  )
}

export default App
