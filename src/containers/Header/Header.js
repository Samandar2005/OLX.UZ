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
                       <img src="https://s3-ap-southeast-1.amazonaws.com/odh.olx.in/Tik_Tok_TnC_html_45bfa830.png" />
                    </div>

                    <div className="main fw-bold">
                       <a href="\">O'z</a>
                       <a href="\">|</a>
                      <a href="\">Ru</a>
                    </div>
                </div>

            </div>
    )
}

export default Header;
