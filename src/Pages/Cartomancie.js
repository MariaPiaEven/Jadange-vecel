import React from 'react';

const Cartomancie = () => {
    return (
        <>
            <section id="page-cartomancie">
                <h2 className="mt-5 text-center">Cartomancie et Communication avec vos défunts</h2>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="./cartomancie1.jpg" className="d-block w-100 pb-4" alt="cartomancie nancy" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./cartomancie2.jpg" className="d-block w-100 pb-4" alt="cartomancie nancy" style={{ maxHeight: "600px" }} />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./cartomancie3.jpg" className="d-block w-100 pb-4" alt="cartomancie nancy" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./cartomancie4.jpg" className="d-block w-100 pb-4" alt="cartomancie nancy" />
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
                            <p>Je vous propose mes services de voyance grâce aux cartes pour vous permettre de trouver des solutions à vos questions et d'en savoir plus sur votre avenir.
                                Je vous invite à me contacter afin que je vous renseigne sur ce que je fais, ou pour un éventuel rendez-vous.
                            </p>

                            <h2 className="mt-5 text-center">Mes tarifs</h2>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 text-center">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Cartomancie :</h5>
                                                <p className="card-text">
                                                    <ul>
                                                        <li>Tarif selon la prestation demandée</li>
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
                                                <h5 className="card-title">Communication avec les défunts :</h5>
                                                <p className="card-text">
                                                    <ul>
                                                        <li>Tarif selon la prestation demandée</li>
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Cartomancie;