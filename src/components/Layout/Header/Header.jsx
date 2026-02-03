import { useEffect, useState } from "react"
import style from "./Header.module.css"
import { NavLink } from "react-router"


export const Header = (props) => {
    
    const {cartItems} = props

    const [headerStyle, setHeaderStyle] = useState({
        opacity: 1,
        visibility:"visible"
    })

    const handleMouseEnter = () => {
        setHeaderStyle({opacity: 1})
    }
    const handleMouseLeave = () => {
        if(window.scrollY > 200){
            setHeaderStyle({opacity:0})
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY < 200){
                setHeaderStyle({opacity: 1})
            }
            if(window.scrollY > 200){
                setHeaderStyle({opacity:0})
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return(
        <>
            <div className={style.headerContainer} style={{opacity: headerStyle.opacity}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={style.menu}>
                    <NavLink to={""} ><img alt="logo" src="./img/Logo2.svg" style={{cursor:"pointer", height:"100px"}} /></NavLink>
                    <div className={style.nav}>
                        <NavLink to={""}>Каталог</NavLink>
                        <NavLink to={"aboutus"}>О нас</NavLink>
                        <NavLink to={"contacts"}>Контакты</NavLink>
                        <NavLink to={"profile"}>Личный кабинет</NavLink>
                    </div>
                    <div className={style.deliver_favour}>
                        <NavLink id={style.deliverIcon} to={'/cart'}><img alt="delivery" src="./img/Basket.svg"/><div className={`${style.counterCart} ${cartItems.length != 0 ? style.active: style.noactive}`}>{cartItems.length}</div></NavLink>
                        <NavLink to={'favours'}><img alt="favours" src="./img/favoursIcon.svg"/></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}