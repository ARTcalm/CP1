import { NavLink, useLocation } from "react-router"
import style from "./FavoursDisplay.module.css"
import { Item } from "../../../Item/Item";

export const FavourDisplay = (props) => {

    const {favoursItems, handleAddCart, handleFavours, handleAddRecently} = props

    const location = useLocation();
    
    // Функция для коррекции пути
    const getCorrectPath = (relativePath) => {
        // Убираем точку в начале пути
        if (relativePath.startsWith('./')) {
        return relativePath.substring(1);
        }
        return relativePath;
    };

    return(
        <>
            <h1>Избранное</h1> 
            <div className={style.favoursTrack}>
                {favoursItems.length === 0 ? 
                <div style={{margin:"0 auto",display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <h1>Ничего не найдено</h1>
                    <NavLink to={"/"} style={{textDecoration:"none", background:"#27332C", color:"white", padding:"20px 40px", borderRadius:"32px"}}>Перейти в каталог</NavLink>
                </div>:
                    favoursItems.map(el => (
                        <Item item={el} handleAddCart={handleAddCart} handleFavours={handleFavours} handleAddRecently={handleAddRecently} />
                    ))}
            </div>
        </>
    )
}