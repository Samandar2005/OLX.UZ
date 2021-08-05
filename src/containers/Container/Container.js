import "./Container.css";
import Header from "../Header"
import Footer from "../Footer"
import Submit from '../Submit'
import React from 'react'
import Tegs from '../Tegs'
import Tegs2 from '../Tegs2'
import Tegs3 from '../Tegs3'
import Tegs4 from '../Tegs4'

const Container = (props) => {
    return (
        <>
            <Header />
            <Submit />
            <div className="content">
                {props.children}
            </div>
            <Tegs />
            <Tegs2 />
            <Tegs3 />
            <Tegs4 />
            <Footer />
        </>
    )
}

export default Container;
