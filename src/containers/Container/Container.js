import "./Container.css";
import Header from "../Header"
import Footer from "../Footer"
import Submit from '../Submit'
import React from 'react'
import Tegs from '../Tegs'

const Container = (props) => {
    return (
        <>
            <Header />
            <Submit />
            <div className="content">
                {props.children}
            </div>
            <Tegs />
            <Footer />
        </>
    )
}

export default Container
