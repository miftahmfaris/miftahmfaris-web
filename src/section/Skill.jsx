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
                    <div className="flex-center">
                        <Row className="flex-center">
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
                                />
                                <p>html5</p>
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
                                <p>css3</p>
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
                                <p>javaScript</p>
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
                                <p>react JS</p>
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
                                <p>node JS</p>
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
                                <p>mongodb</p>
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
                                />
                                <p>git</p>
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
                                />
                                <p>Rest API</p>
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
                                />
                                <p>MySQL</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
};

export default Skill;
