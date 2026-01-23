import style from "./Footer.module.css"

export const Footer = () => {
    return(
    <div className={style.footer} >
        <div class="footer-section">
            <h4>Магазин</h4>
            <ul>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Доставка и оплата</a></li>
            <li><a href="#">Гарантия и возврат</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Новости</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h4>Контакты</h4>
            <ul class="contacts">
            <li><i class="icon-phone"></i> +7 (999) 123-45-67</li>
            <li><i class="icon-email"></i> info@magazin.ru</li>
            <li><i class="icon-clock"></i> Ежедневно 9:00 - 21:00</li>
            </ul>
            <div class="address">
            <i class="icon-location"></i>
            <span>г. Москва, ул. Примерная, д. 10, офис 25</span>
            </div>
        </div>
    </div>
    )
}