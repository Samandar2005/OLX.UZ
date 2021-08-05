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
                    <div className="d-block col-md-4 fw-bold col-sm-4">
                        <ul>
                            <li>
                                <a className="maina" href="/mobileapps">Мобильные приложения</a>
                            </li>
                            <li>
                                <a className="maina" href="/mobileapps">Помощь</a>
                            </li>
                            <li>
                                <a className="maina" href="/mobileapps">Платные услуги</a>
                            </li>
                            <li>
                                 <a className="maina" href="/mobileapps">Бизнес на OLX</a>
                            </li>
                            <li>
                                <a className="maina" href="/mobileapps">Реклама на сайте</a>
                            </li>
                            <li>
                                <a className="maina" href="/mobileapps">Условия использования</a>
                            </li>
                            <li>
                            <a className="maina" href="/mobileapps">Политика конфиденциальности</a>
                            </li>
                            <li>
                            <a className="maina" href="/mobileapps">Партнёры</a>
                            </li>
                        </ul>
                    {/* {menu.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)} */}
                   </div>
                    <div className="mainster2 fw-bold col-md-4 col-sm-4">
                    {/* {menu2.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)} */}
                             <ul>
                            <li>
                                <a className="maina" href="/mobileapps">Как продавать и покупать?</a>
                            </li>
                            <li>
                                <a className="maina" href="/mobileapps">Правила безопасности</a>
                            </li>
                            <li>
                                <a className="maina" href="/mobileapps">Карта сайта</a>
                            </li>
                            <li>
                                 <a className="maina" href="/mobileapps">Карта регионов</a>
                            </li>
                            <li>
                                <a className="maina" href="/mobileapps">Карьера в OLX</a>
                            </li>
                            <li>
                                <a className="maina" href="/mobileapps">Обратная связь</a>
                            </li>
                        </ul>
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
