import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";

const Experience = () => {
  return (
    <Jumbotron className="page-experience flex-full-center">
      <div className="content-bio">
        <div>
          <h1 className="text-sub-title">
            <strong>Experience</strong>
          </h1>
        </div>
        <Row>
          <Col>
            <h3 className="text-content-small">
              Helpdesk
              <span className="text-content-xsmall">(Okt 2015 - Des 2017)</span>
              <p className="text-content">Otoritas Jasa Keuangan</p>{" "}
            </h3>
          </Col>
        </Row>
      </div>
    </Jumbotron>
  );
};

export default Experience;
