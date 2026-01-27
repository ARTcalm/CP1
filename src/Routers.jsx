import { Route, Routes } from "react-router";
import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Layout/Header/Header'
import { Footer } from './components/Layout/Footer/Footer'
import { GOODS } from './consts'
import { Catalog } from './components/Catalog/Catalog'
import { Favours } from './components/Favour/Favour'
import { AbouUs } from "./components/AboutUs/AboutUs";
import { Main } from "./components/Main/Main";
import { Cart } from "./components/Cart/Cart";
  
const useGroupByCategory = (items) => {
  return useMemo(() => {
    return items.reduce((acc, item) => {
      const title = item.title || 'Без категории';
      
      if (!acc[title]) {
        acc[title] = [];
      }
    
        acc[title].push(item);
      return acc;
    }, {});
  }, [items]);
};

export const Routers = () => {
    const [items, setItems] = useState(GOODS)
    const groupedSliderItems = useGroupByCategory(GOODS);
    const [cartItems, setCartItems] = useState([])
    const [favoursItems, setFavoursItems] = useState([])

    return(
        <>
        <Header />        
        <div className="main">
            <Routes>
                <Route path="/" element={<Catalog items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems} favoursItems={favoursItems} setFavoursItems={setFavoursItems} />}/>
                <Route path="/aboutus" element={<AbouUs />} />
                <Route path="/cart" element={<Cart  cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path="/favours" element={<Favours  items={items} setItems={setItems} favoursItems={favoursItems} setFavoursItems={setFavoursItems} />} />
            </Routes>
        </div>
        <Footer />
        </>
    )
}


{/* <div className='main'>
  <Greeting />
  <div>
    {Object.entries(groupedSliderItems).map(([title,items]) => (
      <div key={title}>
          <Slider items={items} />
          <hr style={{color:"white", width:"90%", height:"0px"}} />
      </div>
    ))}
  </div>
  <Catalog items={items} setItems={setItems} favoursItems={favoursItems} setFavoursItems={setFavoursItems} cartItems={cartItems} setCartItems={setCartItems} />
</div> */}