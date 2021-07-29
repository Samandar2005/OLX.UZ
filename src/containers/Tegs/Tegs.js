import "./Tegs.css"
import React from 'react'
import { Link } from "react-router-dom"
import datas from "../../data/homeImg";
const Tegs = () => {
    return (
      <div className="container">
      <h1 className="text-center">Премиум объявления</h1>
      <div className="row">
          {datas.map(v =>
              <div className="col-sm-6 col-md-3">
                  <div className="product shadow rounded overflow-hidden p-2 mt-5">
                      <img src={v.icon} className="w-100 mb-4" alt="" />
                      <p className="pteg">{v.mainTitle}</p>
                      <span className="fon">{v.gorod}</span> <br />
                      <span className="fon">{v.time}</span>
                      <div className="spandiv d-flex">
                          <h5 className="fw-bold">{v.title}</h5>
                          <img src={v.love} className="love" alt="" />
                      </div>
                  </div>
              </div>)
          }
      </div>
  </div>
    )
}

export default Tegs;