import "./Submit.css"
import React from 'react'
const Submit = () => {
    return (
      <header className="mainshadov2 mb-3">
        <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-6">
                <div class="teg g-3">
                  <div className=" input col-sm-12 d-flex">
                    <button className="otpravit d-flex">
                      <div className="qidir">
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                          </svg>
                      </div>
                    <input type="text" className="input1" placeholder="Poyisk" aria-label="City" />
                    </button>
                    <button className="otpravit d-flex">
                      <div className="qidir2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0  16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                      </div>
                      <input type="text" className="input2" placeholder="vce uzbekistan" />
                    </button>


                    <button className="submit d-flex" type="submit">
                      <div className="ssSss">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                          </svg>
                      </div>
                          <h6 className="Submit">Submit</h6></button>
                  </div>
          </div>

          </div>
          </div>


        </div>
      </header>

    )
}

export default Submit;