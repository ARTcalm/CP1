import { Greeting } from "../Greeting/Greeting"
import style from "./Catalog.module.css"
import { useState } from "react"
import { GOODS } from "../../consts"

export const Catalog = (props) => {
    const {items, setItems, cartItems, setCartItems} = props

    const sentToFavours = (el,id) =>{
        setItems(items => {
            return items.map(el => {
                if(el.id === id){
                    return {
                        ...el,
                        favours: !el.favours,
                    }
                }
                return el
            })}
        )
    }

    const [activeIndex, setActiveIndex] = useState(null)
    const availableTitle = [...new Set(GOODS.map(el => el.title))]

    const chooseTitle = (title) => {
        if(title === "Всё"){
            setItems(GOODS)
            setActiveIndex(null)
            console.log(title)
        }
        else{
            setItems(GOODS.filter(el => el.title === title ))
        }
    }


    const handleAddCart = (item) => {
        const isInArray = cartItems.some(el => el.id === item.id)
        if(!isInArray){
        setCartItems(prev => [...prev, item])}
    }


 [{title:"dsdsd", truefalse: false}]
    return(
        <>
        <Greeting />
        <div id="catalog" className={style.catalog_container}>
            <h1 style={{color:"white"}}>Каталог</h1>
            <div className={style.catalogs_panels}>
                <div className={style.filters_panel}>
                    <h1>Категория</h1>
                    <div className={style.categories_container}>
                        {availableTitle.map((el,index) => (
                            <div className={style.category_button} >
                                <div
                                    className={style.category_title}  
                                    onClick={() => {chooseTitle(el), setActiveIndex(index)}}
                                    style={{background:activeIndex === index ? "#27332C": '', color:activeIndex === index ? "white" : ''}}
                                >
                                    {el}
                                </div>
                                {activeIndex === index ? <div className={style.cancel_button} onClick={() => chooseTitle("Всё")} >X</div> : ''}
                            </div>
                        ))}
                    </div>
                    <h1>Сортировка</h1>
                    <div className={style.sort_container}>
                        <select>
                            <option>По возрастанию: Цены</option>
                            <option>По убыванию: Цены</option>
                        </select>
                    </div>
                </div>
                <div className={style.items_panel}>
                    {items.map(el => (
                        <div key={el.id} className={style.item_card} >
                            <svg className={`${style.favours} ${el.favours ? style.active : ''}`} onClick={() => sentToFavours(el,el.id)} viewBox="0 0 1024 1024"><path fill="current" stroke="current" strokeWidth={"30px"} d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9"></path></svg> 
                            <div className={style.item_information}>
                                <div className={style.item_image}>
                                    <img src={el.img} />
                                </div>
                                <div className={style.item_text}>
                                    <p>{el.price}₽</p>
                                    <h1>{el.name}</h1>
                                    <button onClick={() => handleAddCart(el)}>В корзину</button>
                                </div>
                            </div>   
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}