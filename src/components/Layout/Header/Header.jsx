import { useEffect, useState } from "react"
import style from "./Header.module.css"
import { NavLink } from "react-router"


export const Header = (props) => {
    
    const {cartItems} = props

    const [headerStyle, setHeaderStyle] = useState({
        background:"none",
        color:"black"
    })

    const handleMouseEnter = () => {
        setHeaderStyle({
            background:"rgba(255,255,255,0.3)", 
            color:"black" })
    }
    const handleMouseLeave = () => {
        if(window.scrollY > 200){
            setHeaderStyle({
            background:"rgba(255,255,255,0.3)", 
            color:"black" 
            })
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
            <div className={style.headerContainer} >
                <div className={style.menu}>
                    <div className={style.nav}>
                        <NavLink to={""}>Каталог</NavLink>
                        <NavLink to={"aboutus"}>О нас</NavLink>
                        <NavLink to={"contacts"}>Контакты</NavLink>
                    </div>
                    <NavLink to={""} className={style.logo} ><img alt="logo" src="/CommandWorks/CP1/img/Logo2.svg" style={{cursor:"pointer", height:"100px"}} /></NavLink>
                    <div className={style.nav}>
                        <NavLink to={"profile"}>Личный кабинет</NavLink>
                        <div className={style.deliver_favour}>
                            <NavLink id={style.deliverIcon} to={'/cart'}>Корзина<div className={`${style.counterCart} ${cartItems.length != 0 ? style.active: style.noactive}`}>{cartItems.length}</div></NavLink>
                            <NavLink to={'favours'}>Избранное</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}