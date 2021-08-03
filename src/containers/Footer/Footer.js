import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

let menu = [
    { to: "/mobileapps", title: "Мобильные приложения" },
    { to: "/help", title: "Помощь" },
    { to: "/features", title: "Платные услуги" },
    { to: "/features", title: "Бизнес на OLX" },
    { to: "/features", title: "Реклама на сайте" },
    { to: "/features", title: "Условия использования" },
    { to: "/features", title: "Политика конфиденциальности" },
    { to: "/features", title: "Партнёры" },
]
let menu2 = [
    { to: "/mobileapps", title: "Как продавать и покупать?" },
    { to: "/help", title: "Правила безопасности" },
    { to: "/features", title: "Карта сайта" },
    { to: "/features", title: "Карта регионов" },
    { to: "/features", title: "Карьера в OLX" },
    { to: "/features", title: "Обратная связь" },
]

const Footer = () => {
    return (
            <div className="drtrte container py-4">
                <div class="row">
                    <div className="col-md-12 sder">
                    </div>
                    <div className=" col-md-4 col-sm-4"><div>
                        {menu.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)}
                    </div></div>
                    <div className="col-md-4 col-sm-4"> <div>
                    {menu2.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="imgdex">
                            <img className="img1" src="https://www.pngkey.com/png/full/203-2031321_app-store-icon-play-store-icon-google-logo.png" />
                            <img className="img2" src="https://www.baden-baden.com/extension/portal-baba/var/storage/images/media/bibliothek/teaser-bilder-1200x800-px/appstore/58496-1-ger-DE/appstore_teaser_md.png" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer;
