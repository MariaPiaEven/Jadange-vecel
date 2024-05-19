import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 20px;
  background-color: #fff3e0;
  text-align: center;
`;

const Home = () => {
    return (
        <>
            <section className="presentation">
                <div className="container reveal">
                    <h2 className="mt-5 text-center">Mon Entreprise</h2>
                    <div className="row">
                        <div className="col-md-6 mt-5 pt-5 text-center">
                            <img src="./la-gerante.jpg" className="imgGerante img-fluid" alt="Thérapeute lahochi Nancy" width="400" />
                            <p className="text-center">Carla Pereira<br />
                                Practicienne et Accompagnante Bien-Être
                            </p>
                        </div>
                        <div className="col-md-6 mt-5 mx-auto">
                            <h3 className="mb-5 pt-5">Bienvenue chez Jad'Ange</h3>
                            <p>Je suis Carla Pereira, Practicienne et Accompagnante Bien-Être et Thérapeute en Lahochi - Soins énergétiques et magnétiseuse à Nancy. Je vous propose des séances de Massage Bien-Être et Soin Lahochi.
                                Mes services sont issus d'une technique de toucher et d'écoute dans l'accompagnement de toute personne en recherche de détente, de relaxation et de mieux-être.<br />
                                Je vous propose également des séances Cartomancie et Communication avec les défunts.
                            </p>
                            <p>"Un masseur bien-être écoute avec ses mains et son coeur."</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services">
                <div className="container pb-5 pt-3 reveal">
                    <h2 className="mt-5 text-center">Nos Services</h2>
                    <div className="row">
                        <div className="col col-xl-3 col-lg-6 col-md-6 mt-5 mx-auto mx-sm-0">
                            <div className="card border-0" style={{ Width: "18rem" }}>
                                <div className="card-body">
                                    <h3 className="card-title text-white text-center">Massage<br />Bien-Être</h3>
                                    <p className="card-text text-white text-center">Je vous propose un massage centré sur la personne , offre la tranquillité et la relaxation du corps et de l'esprit.</p>
                                    <p className="text-white text-center">Tarif Adultes :</p>
                                    <ul className="text-white">
                                        <li>40€ --- Séance de 45 min</li>
                                        <li>50€ --- Séance de 1h 00</li>
                                        <li>70€ --- Séance de 1h 30</li>
                                    </ul>
                                    <p className="text-white text-center">Tarif Enfants :</p>
                                    <ul className="text-white">
                                        <li>30€ --- Séance de 30 min</li>
                                    </ul>
                                    <img className="card-img-top" src="./massage-card.jpg" alt="massage nancy" />
                                    <div className="button text-center"><button type="button" className="btn shadow-none"><a href="massage.php#page-massage">Découvrir</a></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-6 col-md-6 mt-5 mx-auto">
                            <div className="card border-0" style={{ Width: "18rem" }}>
                                <div className="card-body">
                                    <h3 className="card-title text-white text-center">Lahochi (Soin énergétique)</h3>
                                    <p className="card-text text-white text-center">Le Lahochi est une technique énergétique de soin très puissante transmise par l’apposition des mains.
                                    </p>
                                    <p className="text-white text-center">Tarif Adultes :</p>
                                    <ul className="text-white ps-5 ms-4">
                                        <li>50€ --- Séance</li>
                                    </ul>
                                    <p className="text-white text-center">Tarif Enfants :</p>
                                    <ul className="text-white ps-5 ms-4">
                                        <li>30€ --- Séance</li>
                                    </ul>

                                    <img className="card-img-top" src="./lahochi-card.jpg" alt="lahochi nancy" />
                                    <div className="button text-center"><button type="button" className="btn shadow-none"><a href="lahochi.php#page-lahochi">Découvrir</a></button></div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xl-3 col-lg-6 col-md-6 mt-5 mx-auto">
                            <div className="card border-0" style={{ Width: "18rem" }}>
                                <div className="card-body">
                                    <h3 className="card-title text-white text-center">Magnétisme</h3>
                                    <p className="card-text text-white text-center">Le magnétisme permet de dénouer les nœuds du corps et du mental pour se sentir plus apaisé et pour libérer l'énergie afin qu'elle circule bien des pieds à la tête.
                                    </p>
                                    <p className="text-white text-center">Tarif Adultes :</p>
                                    <ul className="text-white ps-5 ms-4">
                                        <li>50€ --- Séance</li>
                                    </ul>
                                    <p className="text-white text-center">Tarif Enfants :</p>
                                    <ul className="text-white ps-5 ms-4">
                                        <li>30€ --- Séance</li>
                                    </ul>

                                    <img className="card-img-top" src="./magnetisme-card.jpg" alt="lahochi nancy" />
                                    <div className="button text-center"><button type="button" className="btn shadow-none"><a href="magnetisme.php#page-magnetisme">Découvrir</a></button></div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xl-3 col-lg-6 col-md-6 mt-5 mx-auto">
                            <div className="card border-0" style={{ Width: "18rem" }}>
                                <div className="card-body">
                                    <h3 className="card-title text-white text-center">Cartomancie</h3>
                                    <p className="card-text text-white text-center">Lire l'avenir grâce aux cartes.</p>
                                    <p className="card-text text-white text-center">Tarif :</p>
                                    <ul className="text-white text-center">
                                        <li>A partir de 50€ --- Séance</li>
                                    </ul>
                                    <h3 className="card-title text-white text-center">Communication avec les défunts</h3>
                                    <p className="card-text text-white text-center">Communiquer avec nos proches qui ont quitté notre plan.</p>
                                    <p className="card-text text-white text-center">Tarif :</p>
                                    <ul className="text-white text-center">
                                        <li>A partir de 50€ --- Séance</li>
                                    </ul>
                                    <img className="card-img-top" src="./cartomancie-card.jpg" alt="cartomancie nancy" />
                                    <div className="button text-center"><button type="button" className="btn shadow-none"><a href="">Découvrir</a></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="warning card text-center w-50 m-auto reveal" style={{ backgroundColor: "#A6995B7e" }}>
                    <div className="card-body">
                        <div className="card-header">
                            <ion-icon className="icon-warning" name="warning-outline" style={{ color: "red", fontSize: "20px" }}></ion-icon>
                        </div>
                        <h5 className="card-title pt-3" style={{ borderTop: "dotted 2px red", fontWeight: "bold" }}>Message d'Avertissement</h5>
                        <p className="card-text">
                            Je vous informe que l'ensemble de mes services ne comprennent pas la nudité ainsi que les pratiques suggestives quelle qu'elles soient.
                        </p>
                        <p className="card-text">
                            Je vous informe que les moyens de paiement acceptés sont cartes bancaires et en espèces.
                        </p>
                        <p className="card-text">
                            <i className="fa-brands fa-cc-visa fa-2x text-primary mx-1"></i>
                            <i className="fa-solid fa-money-bill-1-wave fa-2x text-success mx-1"></i>
                        </p>
                        <div className="card-footer text-muted" style={{ borderTop: "dotted 2px red" }}>
                            <ion-icon className="icon-warning" name="warning-outline" style={{ color: "red", fontSize: "20px" }}></ion-icon>
                        </div>
                    </div>
                </div>
            </section >

            <section className="temoignage container-fluid reveal mt-5">
                <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>

                    </div>
                    <div className="carousel-inner md-6">
                        <h2 className="pt-4 text-center text-white">Témoignages</h2>
                        <div className="carousel-img carousel-item active" data-bs-interval="10000">
                            <img src="./temo-1.jpg" className="d-block m-auto" alt="..." />
                            <div className="carousel-caption d-block">
                                <h3>Caro CA</h3>
                                <p>Massage bien être très appréciable et à l’écoute des besoins du client. Douce et très accueillante,<br />
                                    Carla y met tout son cœur, avec passion et le plaisir de partager. Je recommande.</p>
                            </div>
                        </div>
                        <div className="carousel-img carousel-item" data-bs-interval="2000">
                            <img src="./temo-2.jpg" className="d-block m-auto" alt="..." />
                            <div className="carousel-caption d-block">
                                <h5>Jani SU</h5>
                                <p>Je confirme..ça ma fait beaucoup de bien...!!</p>
                            </div>
                        </div>
                        <div className="carousel-img carousel-item">
                            <img src="./temo-5.jpg" className="d-block m-auto" alt="..." />
                            <div className="carousel-caption d-block">
                                <h5>Bastien DEBROUWERE</h5>
                                <p>Excellente masseuse ! douce, équilibrante. je l'a recommande fortement, tellement de douceur, de rééquilibre, d'écoute,<br /> sensibilité. après la séance, on se sent bien plus nous-même, équilibré, calme avec beaucoup de sérénité !!<br />
                                    Excellente cartomancienne, à l'écoute et aucun jugement. elle est claire dans sa communication, avec beaucoup de talents dans<br />
                                    ses visions. on peut poser tout types de questions, sans gênes, ni Complexes ! je l'a recommande fortement !</p>
                            </div>
                        </div>
                        <div className="carousel-img carousel-item">
                            <img src="./temo-4.jpg" className="d-block m-auto" alt="..." />
                            <div className="carousel-caption d-block">
                                <h5>Maria-Pia EVEN</h5>
                                <p>L'expérience et le service c'était impeccable, Carla est très impliquée dans la prestations de ses services.<br />
                                    Je l'ai consulté pour un séance de cartomancie. Elle fût très discrète et bienveillante.<br />
                                    Je te remercie pour cette expérience!</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;
