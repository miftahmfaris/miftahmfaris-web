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
          <Col xl="4" sm="6">
            <h3 className="text-content-small margin-top-10">
              Helpdesk
              <span className="text-content-xsmall">(Okt 2015 - Des 2017)</span>
              <p className="text-content">Otoritas Jasa Keuangan</p>{" "}
            </h3>
          </Col>

          <Col xl="4" sm="6">
            <h3 className="text-content-small margin-top-10">
              Participant
              <span className="text-content-xsmall">(Mar 2018 - May 2018)</span>
              <p className="text-content">ImpactByte Jakarta</p>
            </h3>
          </Col>
        </Row>
      </div>
    </Jumbotron>
  );
};

export default Experience;
