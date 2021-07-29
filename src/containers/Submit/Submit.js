import "./Submit.css"
import React from 'react'
import { Link } from "react-router-dom";
import datas from "../../data/homeImg";
const Submit = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-1">
                <div class="row g-3">
                  <div className="col-sm-7">
                    <input type="text" class="form-control" placeholder="City" aria-label="City" />
                  </div>
          </div>
          </div>
          </div>
        </div>
    )
}

export default Submit;