import { Route, Routes, useLocation } from "react-router";
import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Layout/Header/Header'
import { Footer } from './components/Layout/Footer/Footer'
import { GOODS } from './consts'
import { Catalog } from './components/Catalog/Catalog'
import { Favours } from './components/Favour/Favour'
import { AbouUs } from "./components/AboutUs/AboutUs";
import { Cart } from "./components/Cart/Cart";
import { Contacts } from "./components/Contacts/Contacts";
import { DeliveryForm } from "./components/DeliveryForm/DeliveryForm";
import { Profile } from "./components/Profile/Profile";
  


export const Routers = () => {
    const [items, setItems] = useState(GOODS)
    const [cartItems, setCartItems] = useState([])
    const [favoursItems, setFavoursItems] = useState([])
    const [searchedItems,setSearchedItems] = useState([])
    const [orders, setOrders] = useState([])

    const handleAddCart = (item) => {
        const isInArray = cartItems.some(el => el.id === item.id)
        if(!isInArray){
        setCartItems(prev => [...prev, item])}
        setCartItems(cartItems => cartItems.map(item => ({...item, count:1})))
    }
    
    const handleFavours = (item) =>{
            setCartItems(cartItems => {
                return cartItems.map(el => {
                    if(item.id === el.id){
                        return {...el, favours: !el.favours}
                    }
                    return el
                })
            })

            setItems(items => {
                return items.map(el => {
                    if(item.id === el.id){
                        return {...el, favours: !el.favours}
                    }
                    return el
                })
            })
            console.log(favoursItems.length)
    }

    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location])





    return(
        <>
        <Header cartItems={cartItems} />        
        <div className="main">
            <Routes location={location} key={location.pathname}>
                <Route index element={<Catalog handleFavours={handleFavours} handleAddCart={handleAddCart} items={items} searchedItems={searchedItems} setSearchedItems={setSearchedItems} />}/>
                <Route path="aboutus" element={<AbouUs />} />
                <Route path="cart">
                    <Route index element={<Cart handleFavours={handleFavours}  cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="delivery-form" element={<DeliveryForm />} />
                </Route>
                <Route path="favours" element={<Favours handleFavours={handleFavours} handleAddCart={handleAddCart}  items={items} favoursItems={favoursItems} setFavoursItems={setFavoursItems} />} />
                <Route path="contacts" element={<Contacts/>} />
                <Route path="profile" element={<Profile cartItems={cartItems} orders={orders} favoursItems={favoursItems} />} />
            </Routes>
        </div>
        <Footer />
        </>
    )
}


// const useGroupByCategory = (items) => {
//   return useMemo(() => {
//     return items.reduce((acc, item) => {
//       const title = item.title || 'Без категории';
      
//       if (!acc[title]) {
//         acc[title] = [];
//       }
    
//         acc[title].push(item);
//       return acc;
//     }, {});
//   }, [items]);
// };