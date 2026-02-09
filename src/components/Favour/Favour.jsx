import style from "./Favour.module.css"
import { NavLink } from "react-router";
import { Item } from "../Item/Item";

export const Favours = (props) => {

    const {favoursItems, handleAddCart, handleFavours, handleAddRecently} = props

    return(
        <div className={style.favoursBG}>
            <div className={style.favoursTrack}> 
                <h1 style={{color:"white"}}>Избранные</h1>
                <hr style={{width:"100%"}}/>
                <div className={style.cards}>
                    {favoursItems.length === 0 ? 
                    <div style={{margin:"0 auto",display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <h1 style={{marginBottom:"20px", color:"white"}}>Ничего не найдено</h1>
                        <NavLink to={"/"} style={{textDecoration:"none", background:"#27332C", color:"white", padding:"20px 40px", borderRadius:"32px"}}>Перейти в каталог</NavLink>
                    </div>:
                        favoursItems.map(el => (
                            <Item item={el} handleAddCart={handleAddCart} handleFavours={handleFavours} handleAddRecently={handleAddRecently}  />
                        ))}
                </div>
            </div>
        </div>
    )
}
