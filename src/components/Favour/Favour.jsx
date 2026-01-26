import { useEffect, useState } from "react"
import style from "./Favour.module.css"

export const Favours = (props) => {

    const {items, favoursItems, setFavoursItems} = props
    let {favoursOpen, setFavoursOpen} = props
    useEffect(() => {

    },[items])

    return(
        <div className={style.favoursContainer}>
            <div className={style.closeButton} onClick={() => setFavoursOpen(favoursOpen = !favoursOpen)}>X</div>
            FAVOURS
        </div>
    )
}