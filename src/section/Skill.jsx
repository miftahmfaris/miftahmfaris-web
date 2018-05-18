import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";

const Skill = () => {
  return (
    <Jumbotron className="page-skill">
      <div className="content-bio">
        <div>
          <div>
            <h1 className="text-sub-title">
              <strong>Skillset</strong>
            </h1>
          </div>
          <div className="flex-center-skill">
            <Row >
              <Col
                xl="2"
                sm="3"
                xs="4"
                className="text-title-logo-skill text-content-xsmall"
              >
                <img
                  src={require(`../images/html.png`)}
                  alt="html5"
                  className="img-logo-skill"
                />html5
              </Col>
              <Col
                xl="2"
                sm="3"
                xs="4"
                className="text-title-logo-skill text-content-xsmall"
              >
                <img
                  src={require(`../images/css.png`)}
                  alt="css3"
                  className="img-logo-skill"
                />
                css3
              </Col>
              <Col
                xl="2"
                sm="3"
                xs="4"
                className="text-title-logo-skill text-content-xsmall"
              >
                <img
                  src={require(`../images/js.png`)}
                  alt="js"
                  className="img-logo-skill"
                />
                javaScript
              </Col>
              <Col
                xl="2"
                sm="3"
                xs="4"
                className="text-title-logo-skill text-content-xsmall"
              >
                <img
                  src={require(`../images/react.png`)}
                  alt="react"
                  className="img-logo-skill"
                />
                react JS
              </Col>
              <Col
                xl="2"
                sm="3"
                xs="4"
                className="text-title-logo-skill text-content-xsmall"
              >
                <img
                  src={require(`../images/node.png`)}
                  alt="node"
                  className="img-logo-skill"
                />
                node JS
              </Col>
              <Col
                xl="2"
                sm="3"
                xs="4"
                className="text-title-logo-skill text-content-xsmall"
              >
                <img
                  src={require(`../images/mongod.png`)}
                  alt="mongo"
                  className="img-logo-skill"
                />
                mongodb
              </Col>
              <Col
                xl="2"
                sm="3"
                xs="4"
                className="text-title-logo-skill text-content-xsmall"
              >
                <img
                  src={require(`../images/git.png`)}
                  alt="html5"
                  className="img-logo-skill"
                />git
              </Col>
              <Col
                xl="2"
                sm="3"
                xs="4"
                className="text-title-logo-skill text-content-xsmall"
              >
                <img
                  src={require(`../images/api.png`)}
                  alt="html5"
                  className="img-logo-skill"
                />Rest API
              </Col>
              <Col
                xl="2"
                sm="3"
                xs="4"
                className="text-title-logo-skill text-content-xsmall"
              >
                <img
                  src={require(`../images/sql.png`)}
                  alt="html5"
                  className="img-logo-skill"
                />MySQL
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Skill;
