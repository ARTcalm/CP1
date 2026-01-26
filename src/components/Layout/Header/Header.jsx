import { useEffect, useState } from "react"
import style from "./Header.module.css"
import { NavLink } from "react-router"


export const Header = (props) => {
    
    const [headerStyle, setHeaderStyle] = useState({
        opacity: 1,
    })

    const handleMouseEnter = () => {
        setHeaderStyle({opacity: 1})
    }
    const handleMouseLeave = () => {
        if(window.scrollY > 200){
            setHeaderStyle({opacity:0.2})
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
                    <NavLink to={"/"} ><img alt="logo" src="./img/Logo2.svg" style={{cursor:"pointer", height:"100px"}} /></NavLink>
                    <div className={style.nav}>
                        <NavLink to={"/catalog"}><img alt="burger" src="./img/burger_menu.svg"/>Каталог</NavLink>
                        <NavLink to={"/aboutus"}>О нас</NavLink>
                        <NavLink to={"/contact"}>Контакты</NavLink>
                    </div>
                    <div className={style.deliver_favour}>
                        <NavLink to={'/cart'}><img alt="delivery" src="./img/deliveryIcon.svg"/></NavLink>
                        <NavLink to={'/favours'}><img alt="favours" src="./img/favoursIcon.svg" /></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}