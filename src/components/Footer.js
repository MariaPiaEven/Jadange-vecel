import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #D4AF37;
  padding: 10px;
  text-align: center;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start mt-5 text-muted reveal">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Suivez nous sur mes réseaux sociaux :</span>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pages/category/Massage-Service/JadAnge-101255065530768/" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:jadange54000@gmail.com" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/carla-pereira-5219a4110/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </section>
                <section className="">
                    <div className="container-fluid text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <a className="" href="index.php" title="index"><img src="./logotype4.png" className="logofooter mb-3" alt="logofooter" /></a><br />Jad'Ange L'Eveil Des Sens
                                </h6>

                                <p>
                                    "Un corps libre de tensions et de fatigue permet d'affronter toutes les complexités de la vie."
                                </p>

                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Mes Services
                                </h6>
                                <p>
                                    <a href="/massage" className="text-reset">Bien-Être</a>
                                </p>
                                <p>
                                    <a href="/lahochi" className="text-reset">Lahochi</a>
                                </p>
                                <p>
                                    <a href="/magnetisme" className="text-reset">Magnétisme</a>
                                </p>
                                <p>
                                    <a href="/cartomancie" className="text-reset">Cartomancie</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Informations Légales
                                </h6>
                                <p>
                                    <a href="/legal" className="text-reset">Mentions Légales</a>
                                </p>
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Informations Complémenaires
                                </h6>
                                <p>Mes massages Bien-Etre ne remplacent pas des soins médicaux. <br />
                                    Ils ne relèvent en aucun cas à de la Masso- kinésithérapie.</p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                {/* <p><i className="fas fa-home me-3"></i> 29 Rue des Frères Voirin, 54000 Nancy, France</p> */}
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    jadange54000@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> 06 18 00 28 89</p>
                            </div>
                        </div>

                    </div>
                </section >

                <div className="text-center p-4" style={{ backgroundColor: "hsla(0, 0%, 0%, 0.05)" }}>
                    © 2024 Copyright: Site réalisé par <a target="_blank" rel="noopener noreferrer" className="text-reset fw-bold" href="https://www.linkedin.com/in/maria-pia-even/">EVEN Maria-Pia</a>
                </div>

            </footer >
        </>
    );
};

export default Footer;
