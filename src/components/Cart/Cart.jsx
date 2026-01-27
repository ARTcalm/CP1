import style from "./Cart.module.css"

export const Cart = (props) => {
    const {cartItems, setCartItems} = props
    let {cartOpen, setCartOpen} = props

    let summa = 0
    cartItems.forEach(el => summa += Number.parseFloat(el.price))

    const DeleteCartItems = (id) =>{
          setCartItems(cartItems => cartItems.filter(el=> el.id !== id))
    }

    return(
        <div className={style.cartContainer}>
                <div className={style.cartTrack}> 
                        {cartItems.map(el => (
                            <div className={style.cart_card}>
                                <img src={el.img} />
                                <div>
                                    <h1>{el.name}</h1>
                                    <p>{el.price}₽</p>
                                </div>
                            <div style={{color:"red", fontWeight:"900", cursor:"pointer"}} onClick={() => DeleteCartItems(el.id)}>X</div>
                            </div>
                        ))}
                </div>
                <div>
                    <h1>Доставка</h1>
                    <p>Количество: {cartItems.length}</p>
                    <p>Стоимость: {summa}₽</p>
                </div>
        </div>
    )
}