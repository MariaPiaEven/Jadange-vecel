import React from 'react';

const Massage = () => {
    return (
        <>
            <section id="page-massage">
                <h2 class="mt-5 text-center">Massage Bien-Être</h2>

                <div class="container mt-5">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active fit">

                                        <img src="./massage1.jpg" class="d-block w-100 pb-4" alt="massage nancy" />
                                    </div>
                                    <div class="carousel-item fit">
                                        <img src="./massage2.jpg" class="d-block w-100 pb-4" alt="massage nancy" min-height="500" />
                                    </div>
                                    <div class="carousel-item fit">
                                        <img src="./massage3.jpg" class="d-block w-100 pb-4" alt="massage nancy" />
                                    </div>
                                    <div class="carousel-item fit">
                                        <img src="./massage4.jpg" class="d-block w-100 pb-4" alt="massage nancy" />
                                    </div>
                                    <div class="carousel-item fit">
                                        <img src="./massage5.jpg" class="d-block w-100 pb-4" alt="massage nancy" min-height="500" />
                                    </div>
                                    <div class="carousel-item fit">
                                        <img src="./massage6.jpg" class="d-block w-100 pb-4" alt="massage nancy" />
                                    </div>
                                    <div class="carousel-item fit">
                                        <img src="./massage7.jpg" class="d-block w-100 pb-4" alt="massage nancy" />
                                    </div>
                                    <div class="carousel-item fit">
                                        <img src="./massage8.jpg" class="d-block w-100 pb-4" alt="massage nancy" min-height="500" />
                                    </div>
                                    <div class="carousel-item fit">
                                        <img src="./massage9.jpg" class="d-block w-100 pb-4" alt="massage nancy" min-height="500" />
                                    </div>
                                    <div class="carousel-item fit">
                                        <img src="./massage10.jpg" class="d-block w-100 pb-4" alt="massage nancy" min-height="500" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <p>Prendre soin de soi, se faire plaisir est important.<br />
                                Je vous propose un massage Bien-Être centré sur la personne, est un équilibre entre le savoir faire et l'attention porté à l'autre, il met en évidence la singularité de la personne massée car elle se recentre sur elle même.<br />
                                Elle permet aussi la libre expression verbale et corporelle.
                            </p>
                            <h2 class="mt-5 text-center">Mes tarifs</h2>
                            <div class="container mt-5">
                                <div class="row">
                                    <div class="text-center">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Massage Bien-Être</h5>
                                                
            
                                                <p class="card-text">
                                                    Moyens de paiement :
                                                </p>
                                                <p class="card-text">
                                                    <i class="fa-brands fa-cc-visa fa-2x text-primary mx-1"></i>
                                                    <i class="fa-solid fa-money-bill-1-wave fa-2x text-success mx-1"></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container mt-5">
                                <div class="row">
                                    <div class="text-center">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Massage Fusion</h5>
                                                <p class="card-text">
                                                    <ul>
                                                        <li>Séance de 1h</li>
                                                    </ul>
                                                </p>
                                                <p class="card-text">
                                                    Moyens de paiement :
                                                </p>
                                                <p class="card-text">
                                                    <i class="fa-brands fa-cc-visa fa-2x text-primary mx-1"></i>
                                                    <i class="fa-solid fa-money-bill-1-wave fa-2x text-success mx-1"></i>
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

export default Massage;
