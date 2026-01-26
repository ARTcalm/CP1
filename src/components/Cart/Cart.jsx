import style from "./Cart.module.css"

export const Cart = (props) => {
    const {cartItems, setCartItems} = props
    let {cartOpen, setCartOpen} = props

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
                            </div>
                        ))}
                </div>
                <div>
                    <h1>Доставка</h1>
                    <p>Количество</p>
                    <p>Стоимость</p>
                </div>
        </div>
    )
}