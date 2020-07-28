import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";

const Experience = () => {
    return (
        <Jumbotron className="page-experience">
            <div className="content-bio">
                <div>
                    <h1 className="text-sub-title">
                        <strong>Experience</strong>
                    </h1>
                </div>
                <Row className="flex-center-wrap">
                    <Col xl="4" sm="12">
                        <h3 className="text-content-small margin-top-10">
                            Tech Mentor
                        </h3>
                        <p className="text-content">Impactbyte</p>
                        <span className="text-content-xsmall">
                            (Sep 2019 - Present)
                        </span>
                    </Col>

                    <Col xl="4" sm="12">
                        <h3 className="text-content-small margin-top-10">
                            Software Engineering
                        </h3>
                        <p className="text-content">Coderscolony</p>
                        <span className="text-content-xsmall">
                            (Jul 2018 - Sep 2019)
                        </span>
                    </Col>

                    <Col xl="4" sm="12">
                        <h3 className="text-content-small margin-top-10">
                            Helpdesk
                        </h3>
                        <p className="text-content">Otoritas Jasa Keuangan</p>
                        <span className="text-content-xsmall">
                            (Okt 2015 - Des 2017)
                        </span>
                    </Col>
                </Row>
            </div>
        </Jumbotron>
    );
};

export default Experience;
