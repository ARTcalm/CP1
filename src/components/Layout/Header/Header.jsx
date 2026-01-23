import { useEffect, useState } from "react"
import style from "./Header.module.css"

export const Header = (props) => {

    let {favoursOpen, setFavoursOpen} = props

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
        <div className={style.headerContainer} style={{opacity: headerStyle.opacity}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={style.menu}>
                <img alt="logo" src="./img/Logo2.svg" style={{cursor:"pointer", height:"60px"}} />
                <div className={style.nav}>
                    <a><img alt="burger" src="./img/burger_menu.svg"/>Каталог</a>
                    <a>О нас</a>
                    <a>Контакты</a>
                </div>
                <div className={style.deliver_favour}>
                    <img alt="delivery" src="./img/deliveryIcon.svg" />
                    <img alt="favours" src="./img/favoursIcon.svg" onClick={() => setFavoursOpen(favoursOpen = !favoursOpen)}/>
                </div>
            </div>
        </div>
    )
}