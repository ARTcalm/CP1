import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Layout/Header/Header'
import { Footer } from './components/Layout/Footer/Footer'
import { Greeting } from './components/Greeting/Greeting'
import { Slider } from './components/Slider/Slider'
import { GOODS } from './consts'
import { Catalog } from './components/Catalog/Catalog'
import { Favours } from './components/Favour/Favour'
  
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

export const App = () => {
  const [items, setItems] = useState(GOODS)
  const [favoursItems, setFavoursItems] = useState([])
  const groupedSliderItems = useGroupByCategory(GOODS);
  let [favoursOpen, setFavoursOpen] = useState(false)


  return (
    <>
      <Header favoursOpen={favoursOpen}  setFavoursOpen={setFavoursOpen}/>
      <div className='main'>
        {favoursOpen &&
          <Favours items={items} />
        }
        <Greeting />
        <div>
          {Object.entries(groupedSliderItems).map(([title,items]) => (
            <div key={title}>
                <Slider items={items} />
            </div>
          ))}
        </div>
        <Catalog items={items} setItems={setItems} favoursItems={favoursItems} setFavoursItems={setFavoursItems} />
      </div>
      <Footer />
    </>
  )
}

