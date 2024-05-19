import React from 'react';

const Legal = () => {
    return (
        <>
            <div className="container" id="mentions">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 col-md-12 mt-5 mx-auto">
                        <div className="card" style={{borderRadius: "30px"}}>
                            <div className="card-body" style={{backgroundColor: "#a6995bad", borderRadius: "30px"}}>
                                <div className="yin-yang text-center py-3">
                                    <i className="fa-solid fa-yin-yang fa-5x"></i>
                                </div>
                                <h2 className="card-title text-center fw-bold">Mentions Légales</h2>
                                <div className="text-center py-4">
                                    <i className="fa-solid fa-user-pen fa-3x"></i>
                                </div>
                                <h3 className="text-center fw-bold">Editeur du site</h3>
                                <p className="card-text text-center">EURL Grand test couveuse d'entreprise
                                </p>
                                <p className="text-center"><strong>Nom de société :</strong> Centre Formation Alexis
                                </p>
                                <p className="text-center">5 rue kastler 54320 Maxeville
                                </p>
                                <p className="text-center"><strong>Numéro Siret :</strong> 49109567500014
                                </p>
                                <p className="text-center"><strong>Numéro téléphone :</strong> -
                                </p>
                                <div className="text-center py-4">
                                    <i className="fa-solid fa-house-chimney-user fa-3x"></i>
                                </div>
                                <h3 className="text-center fw-bold">Fournisseur d’hébergement</h3>
                                <p className="card-text text-center">SAS au capital de 10 174 560 €
                                </p>
                                <p className="text-center">RCS Lille Métropole 424 761 419 00045
                                </p>
                                <p className="text-center">Code APE 2620Z
                                </p>
                                <p className="text-center"><strong>N° TVA :</strong> FR 22 424 761 419
                                </p>
                                <p className="text-center"><strong>Siège social :</strong> 2 rue Kellermann - 59100 Roubaix - France
                                </p>
                                <p className="text-center"><strong>Président :</strong> Michel Paulin
                                </p>
                                <p className="text-center px-5">OVH SAS est une filiale de la société OVH Groupe SA société immatriculée au RCS de Lille
                                    sous le numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Legal;