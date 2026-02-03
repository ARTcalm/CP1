import { useEffect, useState } from "react"
import style from "./Profile.module.css"

export const Profile = (props) => {
    const {cartItems, orders, favoursItems} = props
    const profileDisplay = () => {
        return(
            <div className={style.profile}>
                <div className={style.profileBlock}>
                    <img src="./img/profileIcon.png" className={style.profileIcon} />
                    <h1>Артём</h1>
                </div>
                <div className={style.widgets}>
                    <div className={style.widgetBG} >
                        <div className={style.widgetInfo} >
                            <img />
                            <h1>Заказы</h1>
                            <p>{orders.length !== 0 ? orders.length: 0} </p>
                        </div>
                    </div>
                    <div className={style.widgetBG}>
                        <div className={style.widgetInfo} >
                            <img />
                            <h1>Избранное</h1>
                            <p>{favoursItems.length !== 0 ? favoursItems.length : 0}</p>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }

    const cartDisplay = () => {
        return(
            <div>CART</div>
        )
    }

    const favourDisplay = () => {
        return(
            <div>FAVOUR</div>
        )
    }
    const [activeDisplay, setActiveDisplay] = useState(profileDisplay)


    return(
        <>
            <div className={style.personalCabinetBG}>
                <div className={style.sideBarMenu}>
                    <div className={style.buttonMenu} onClick={() => setActiveDisplay(profileDisplay)}>Профиль</div>
                    <div className={style.buttonMenu} onClick={() => setActiveDisplay(cartDisplay)}>Заказы</div>
                    <div className={style.buttonMenu} onClick={() => setActiveDisplay(favourDisplay)}>Избранное</div>
                </div>
                <div className={style.display}>
                    {activeDisplay}
                </div>
            </div>
        </>
    )
}