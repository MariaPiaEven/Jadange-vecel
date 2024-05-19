import React from 'react';

const Lahochi = () => {
    return (
        <>

            <section id="page-lahochi">
                <h2 className="mt-5 text-center">Soin Lahochi</h2>

                <div className="container mt-5">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active fit">
                                        <img src="./lahochi1.jpg" className="d-block w-100 pb-4" alt="massage nancy"/>
                                    </div>
                                    <div className="carousel-item fit">
                                        <img src="./lahochi2.jpg" className="d-block w-100 pb-4" alt="massage nancy" min-height="500"/>
                                    </div>
                                    <div className="carousel-item fit">
                                        <img src="./lahochi3.jpg" className="d-block w-100 pb-4" alt="massage nancy"/>
                                    </div>
                                    <div className="carousel-item fit">
                                        <img src="./lahochi4.jpg" className="d-block w-100 pb-4" alt="massage nancy"/>
                                    </div>
                                    <div className="carousel-item fit">
                                        <img src="./lahochi5.jpg" className="d-block w-100 pb-4" alt="massage nancy" min-height="500"/>
                                    </div>
                                    <div className="carousel-item fit">
                                        <img src="./lahochi8.jpg" className="d-block w-100 pb-4" alt="massage nancy" min-height="500"/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <p>Prendre soin de soi, soulager ses maux, c'est ce que je vous propose grâce au Lahochi.<br />
                                Il s'agit, par l’apposition des mains, d'un soin énergétique qui canalise et soulage les zones sensibles du corps.
                                Il permet d'augementer son taux vibratoire, d’accéder et d’intégrer des énergies subtiles de guérison aux fréquences plus élevées, ouvrant à la conscience multidimensionnelle.
                                Les enfants sont aussi réceptifs que les adultes.
                                Les traitements Lahochi peuvent être transmis en séance en présentiel ou à distance.
                            </p>
                        </div>


                    </div>
                </div>
            </section>

            <section>

                <h2 className="mt-5 text-center">Mes tarifs</h2>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 text-center">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Tarif Adultes:</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>50€</li>
                                        </ul>
                                    </p>
                                    <p className="card-text">
                                        Moyens de paiement :
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-brands fa-cc-visa fa-2x text-primary mx-1"></i>
                                        <i className="fa-solid fa-money-bill-1-wave fa-2x text-success mx-1"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Tarif Enfants:</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>30€</li>
                                        </ul>
                                    </p>
                                    <p className="card-text">
                                        Moyens de paiement :
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-brands fa-cc-visa fa-2x text-primary mx-1"></i>
                                        <i className="fa-solid fa-money-bill-1-wave fa-2x text-success mx-1"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Lahochi;