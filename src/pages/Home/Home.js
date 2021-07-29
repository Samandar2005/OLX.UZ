import "./Home.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";
import datas from "../../data/homeImg";
import categories from "../../data/homeTitle";



const Home = () => {
    return (
        <Container>
            <div className="container py-4">
                <div className="col-md-12">
                    <div className="height bg-dark">
                        <h1 className="text-center">Главные категории</h1>
                        {categories.map(v =>
                            <Link to={v.to} key={v.to} className="category">
                                <div className="icon" style={{ backgroundColor: v.backColor }}>
                                    <img src={v.icon} alt="" />
                                </div>
                                {v.title}
                            </Link>)
                        }
                    </div>
                </div>
            </div>
        </Container>


    )
}

export default Home;
