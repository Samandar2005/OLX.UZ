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
let meno1 = [
    {to: "rre", men2: "Moy Profil"},
]

let meno3 = [
    {to: "rre", men3: "Podat Oblovleniya"}
]

// let menu = [
//     { to: "/", title: "Home" },
//     { to: "/mobileapps", title: "Мобильные приложения" },
//     { to: "/dashboard", title: "Dashboard" },
// ]

const Header = () => {
    return (
        <header className="mainshadov shadow mb-3">
            <div className="container py-3">
                <div className=" map col-md-12">

                </div>
            <div className="map">


            </div>



                {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link> */}
            </div>
        </header>
    )
}

export default Header
