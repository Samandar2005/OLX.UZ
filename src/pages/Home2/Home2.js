import "./Home2.css"
import React from 'react'
import Container from "../../containers/Container";
import datas from "../../data";
import { useParams } from "react-router-dom";

console.log(datas);

const Category = () => {
    const { category } = useParams();
    console.log(category);

    const obj = datas.filter(v => v.category === category)[0];
    const data = obj.data;
    console.log(obj);
    console.log(data);

    return (
        <Container>
            <div className="container">
                <div className="row">
                <h1 className="shedow2">Детский мир</h1>
                    {data.map(v =>
                        <div className="col-md-12">

                            <div className="products shadow mt-4 d-flex fw-bold">
                                <img src={v.img} className="w-100" alt="" />
                                <p className="titlemain">{v.title}</p>
                            </div>
                            <div className="spanmain fw-bold">
                                   <span>{v.price}</span> <br />
                                </div>
                            <div className="narx">
                                    <span>{v.location}</span>
                                </div>
                        </div>)
                    }
                </div>
            </div>
        </Container>

    )
}

export default Category;
