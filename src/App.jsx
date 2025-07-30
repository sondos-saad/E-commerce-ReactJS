import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Nav from './Components/nav'
import Rout from './Components/Rout'
import Footer from './Components/Footer'
import { useState } from 'react'
import HomeProduct from './Components/HomeProducts'

function App() {
    const [shop, setShop] = useState(HomeProduct);
    const [search, setSearch] = useState("");
    const [cart , setCart] = useState([])

    const Filter = (x) => {
        const cateFilter = HomeProduct.filter((product) => {
            return product.cat === x
        })
        setShop(cateFilter)
    }
    const allCateFilter = () => {
        setShop(HomeProduct)
    }
    
    const searchLength = (search || []).length === 0
    const searchProduct =() =>{
         if(searchLength){
        alert("Please Search Something!")
        setShop(HomeProduct)
        }else{
                const searchFilter = HomeProduct.filter((x) => {
                    return x.cat === search
                })
                setShop(searchFilter)
            }
    }
   
   const addToCart = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if(exist){
            alert("this product is already added in cart")
        }else{
            setCart([...cart, {...product , qty:1} ]);
            alert("Added To Cart")
        }
   }

  return (
    <>
        <BrowserRouter>
            <Nav search={search} setSearch={setSearch} searchProduct={searchProduct}/>
            <Rout cart={cart} shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart}/>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
