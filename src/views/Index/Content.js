import React from "react";

function Content() {
    return (
        <div>
            <div className="container content">
                <div className="row">
                    <div className="col-sm-6 talk">
                        <h1>ENER DAO</h1>
                        <br />
                        <h6 className="bold-four">
                        <b>The ENER DAO</b> is a community that aims to reimagine the traditional universal basic income (UBI) model by leveraging renewable energy sources as its backbone. <b>ENER DAO</b> ensures fair and sustainable distribution of resources such as wind, solar, and hydroelectric energy. Through our transformative ecosystem, we hope to not only address income inequality but also accelerate the global transition towards a cleaner, greener future.
                    </h6>
                        <br />
                        <h6><a className="btn btn-dark start start-two" href="https://app.aragon.org/#/daos/polygon/0xb5499a94970440b6d6894fa26da3bf1c258fccd8">Check out DAO</a></h6>
                    </div>
                    <div className="col-sm-6 showcase-img">
                        
                    </div>
                </div>
            </div>

            <section className="features-icons bg-light text-center det-ails">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex  icon-bra-ails">
                                    <i className="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Green Energy Global Reach</h5>
                                <p className="lead mb-0">Through ENER DAO, our community can easily access lucrative return from renewable energy assets.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex  icon-bra-ails">
                                    <i className="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Climate Change Derisk</h5>
                                <p className="lead mb-0">Carbon neutrality is global and irreversible. ENER DAO provides the state-of-the-art mechansim to mitigate your climate risks.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex  icon-bra-ails">
                                    <i className="icon-check m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Universial Basic Income</h5>
                                <p className="lead mb-0">ENER DAO builds a truly sustainable community for providing continuos UBI for the ENER DAO community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;