import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Nav from './Components/nav'
import Rout from './Components/Rout'
import Footer from './Components/Footer'

function App() {


  return (
    <>
        <BrowserRouter>
            <Nav/>
            <Rout/>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
