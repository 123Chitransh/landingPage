import React from 'react'
// import img1 from "../img/pic8.png"
import web from "../img/webde.avif"
import app from "../img/appd.avif"
import dsa from "../img/dsa.avif"
import digital from "../img/dig.avif"
import stock from "../img/stock.avif"
import software from "../img/softwaree.avif"
import { Link } from 'react-router-dom'
export default function Service() {
  return (
    <>
      <div className='my-5 servicehead'>
        <h1> Services </h1>
      </div>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto disp">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title"> Web Development</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="/contact" className="btn btn-primary">Enroll</Link>
                    </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={app} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">App Development</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="/contact" className="btn btn-primary">Enroll</Link>
                    </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={dsa} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Full DSA</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="/contact" className="btn btn-primary">Enroll</Link>
                    </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={digital} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Digital Marketing</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="/contact" className="btn btn-primary">Enroll</Link>
                    </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={stock} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Stock Market</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="/contact" className="btn btn-primary">Enroll</Link>
                    </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={software} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Software Development</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="/contact" className="btn btn-primary">Enroll</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
