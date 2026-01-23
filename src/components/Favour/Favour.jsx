import { useEffect, useState } from "react"
import style from "./Favour.module.css"

export const Favours = (props) => {

    const {items, favoursItems, setFavoursItems} = props
    useEffect(() => {

    },[items])

    return(
        <div className={style.favoursContainer}>

        </div>
    )
}