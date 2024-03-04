import React from 'react'

const Home = () => {
    return(
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h2 className="display-4 fw-bolder mb-4 text-center text-white">Empowering Wellness: Your Guide to Optimal Health and Care</h2>
                            <p className="lead text-center fs-4 mb-5 text-white">Wellness Redefined: Caring for Your Mind, Body, and Spirit
                            A Healthier Tomorrow Begins Today.
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Get Started</button>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;