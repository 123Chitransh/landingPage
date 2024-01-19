import React from 'react'
// import img1 from "../img/pic1.avif"
import { Link } from 'react-router-dom'

export default function Common(props) {
    return (
        <>
            <section id='header' className='my'>
                <div className="container-fluid nav_bg ">
                    <div className="row">
                        <div className="col-10 mx-auto disp">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 mt-5 order-lg-1">
                                <h1>{props.heading1} <strong className='brand-name'>Chitransh Technical</strong></h1>
                                <h4 className="my-3">
                                    {props.heading2}
                                </h4>
                                <div className="mt-4">
                                    <Link to={props.visite} className='button'>{props.btnname}</Link>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={props.imgsrc} className='' alt="home"  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
