import "./Home.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";
import categories from "../../data/homeTitle";
import Submit from "../../containers/Submit"


const Home = () => {
    <Submit />
    return (
        <Container>
             <header className="mainshadov3 mb-3">
             <div className="container py-4">
                <div className="col-md-12 col-sm-12">
                    <div className="height">
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
             </header>

        </Container>


    )
}

export default Home;
