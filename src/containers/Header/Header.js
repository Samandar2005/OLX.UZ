import './Header.css';
import React from 'react'
import { Link } from 'react-router-dom';
let meno2 = [
    {to: "rre", uz: "O'Z"},
    {to: "rre", ru: "|"},
    {to: "rre", men: "RU"},
    {to: "rre", men2: "Moy Profil"},
    {to: "rre", men3: "Podat Oblovleniya"}
]

const Header = () => {
    return (
            <div className="mainshadov shadow mb-3 container py-3">
                <div className=" map col-md-12 d-flex">
                    <div className="img111">
                       <img src="https://1000logos.net/wp-content/uploads/2020/09/OLX-logo.png" />
                    </div>

                    <div className="main fw-bold">
                        <ul className="d-flex main222">
                            <li>
                                <a href="\">O'z</a>
                            </li>
                            <li>
                                <a href="\">|</a>
                            </li>
                            <li>
                                <a href="\">Ru</a>
                            </li>
                        </ul>



                    </div>
                    <div className="imgmain1">
                        <a href="https://www.olx.uz/favorites/search/">
                        <img src="https://i.ya-webdesign.com/images/black-heart-icon-png-1.png" />
                        </a>

                    </div>
                    <div className="imgmain2">
                        <a href="https://www.olx.uz/account/?ref%5B0%5D%5Baction%5D=myaccount&ref%5B0%5D%5Bmethod%5D=index">
                        <img src="http://cdn.onlinewebfonts.com/svg/img_334589.png" />

                        </a>
                        <a className="asas fw-bold" href="https://www.olx.uz/account/?ref%5B0%5D%5Baction%5D=myaccount&ref%5B0%5D%5Bmethod%5D=index">
                        Мой профиль
                        </a>
                    </div>
                    <div className="buttontegmain">
                        <a href="https://www.olx.uz/account/?ref[0][params][url]=https%3A%2F%2Fwww.olx.uz%2Fd%2Fpost-new-ad%2F%3Fbs%3Dhomepage_adding&ref[0][action]=redirector&ref[0][method]=index" type="button">
                            <span>
                            Подать объявление
                            </span>

                        </a>
                    </div>
                </div>

            </div>
    )
}

export default Header;
