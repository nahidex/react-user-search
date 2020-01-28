import React, { Component } from 'react'

export default class Top extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="hero-one">
                    <div className="section-container">
                        <div className="info-content">
                            <h6 className="rabel">ABOUT US</h6>
                            <h2 className="h1">For healthy lives and smiles of people around the world</h2>
                            <p>
                                Sunstar operates in the business sectors of Oral Care, Health & Beauty, Motorcycle parts, and Chemicals. We strive to help people everywhere achieve better health and enhance their quality-of-life through our products and services.</p>
                            <a href="#" className="btn btn-link btn-link-lg btn-link-reversed">Watch Video <span className="icon icon-play"></span></a>
                        </div>
                        <div className="img-content"></div>
                    </div>
                </section>

                <section className="chairman-interview" style={{backgroundImage: "url(../assets/img/about/chairman.png);"}}>
                    <div className="section-container">
                        <div className="mobile-chairman-image" style={{backgroundImage: "url(../assets/img/about/chairman-mobile.png);"}}></div>
                        <div className="info-content">
                            <h2 className="h1">Responding to the rapidly changing world to become a global company supporting</h2>
                            <p>
                                Sunstar Group chairman <br />
                                <strong>Yoshihiro Kaneda</strong>
                            </p>
                            <a href="#" className="btn btn-primary">Chairman Interview</a>
                        </div>

                    </div>
                </section>

                <section className="business-performance">
                    <div className="section-container">
                        <div className="info-content">
                            <h2 className="h1">Continued success on the path of profitable growth and globalization</h2>
                            <img src="../assets/img/about/performance.png" alt="" />
                            <p>
                                The Sunstar Group continues to accelerate business globalization in new and existing territories. While maintaining a steady growth of our existing business, we strive for an exponential growth with our innovations.
        </p>
                            <p>
                                With over 4,000 employees collaborating across over 20 countries, Sunstar delivers products and services in around 100 countries.
        </p>
                            <a href="#" className="btn btn-primary">Business Performance</a>
                            <nav>
                                <a href="" className="btn btn-link btn-link-md">Global Network <span className="icon icon-ang-right"></span></a>
                                <a href="" className="btn btn-link btn-link-md">Our company <span className="icon icon-ang-right"></span></a>
                            </nav>
                        </div>
                        <div className="graph">
                            <img src="../assets/img/about/performance.png" alt="" />
                        </div>
                    </div>
                </section>

                <section className="about-detail">

                    <img className="about-detail-top-img" src="../assets/img/about/detail.png" alt="" />
                    <div className="section-container history">
                        <div className="graphic-content">
                            <img src="../assets/img/about/detail-one.png" alt="" />
                        </div>
                        <div className="info-content">
                            <h2 className="h1">Innovating for <br />over 80 years</h2>
                            <img src="../assets/img/about/detail-one.png" alt="" />
                            <p>
                                Our origins date back to 1932 as a manufacturer of bicycle parts and glue for repairing flat tires. By packaging toothpaste in the metal tube containers used for the glue, we expanded into the Oral Care sector and the rest is history.
        </p>
                            <a href="#" className="btn btn-primary">History</a>
                        </div>
                    </div>

                    <div className="section-container career">
                        <div className="info-content">
                            <h2 className="h1">Working together as one global team</h2>
                            <video src="../assets/img/about/lifewithsunstar.mp4" muted autoplay loop></video>
                            <p>
                                The Sunstar Group offers an attractive, creative work environment in which each and every employee can reach their full potential.
        </p>
                            <a href="#" className="btn btn-primary">Careers at Sunstar</a>
                            <nav>
                                <a href="" className="btn btn-link btn-link-md">Life with Sunstar<span className="icon icon-ang-right"></span></a>
                            </nav>
                        </div>
                        <div className="graphic-content">
                            <video src="../assets/img/about/lifewithsunstar.mp4" muted autoplay loop></video>
                        </div>
                    </div>

                    <div className="section-container activities">
                        <div className="graphic-content">
                            <img src="../assets/img/about/detail-two.png" alt="" />
                        </div>
                        <div className="info-content">
                            <h2 className="h1">Promoting healthy living and providing knowledge around the world</h2>
                            <p>
                                For many years, Sunstar has been helping people around the world become healthier by contributing our knowledge, skills, and resources.
        </p>
                            <a href="#" className="btn btn-primary">Our CSR Activities</a>
                        </div>
                    </div>

                </section>
            </React.Fragment>
        )
    }
}
