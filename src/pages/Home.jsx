import React, { Component } from "react";
import {
  Jumbotron,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div>
        <div className="flex-center">
          <h1 className="text-title flex-center-center">mf</h1>
        </div>
        <Jumbotron className="page-overview flex-full-center">
          <div className="content-overview">
            <div>
              <p className="text-content">Hi Everyone,</p>
              <p className="text-content">
                I'm <strong>Miftah Faris</strong>, a Developer
              </p>
            </div>
            <div className="flex-center">
              <a href="https://www.facebook.com/miftahdefariis?ref=bookmarks">
                <img
                  src={require(`../images/facebook.png`)}
                  alt="facebook"
                  className="img-logo"
                />
              </a>
              <a href="https://www.linkedin.com/in/miftah-faris-8072ba115/">
                <img
                  src={require(`../images/linkedin.png`)}
                  alt="linkedin"
                  className="img-logo"
                />
              </a>
              <a href="https://github.com/miftahmfaris">
                <img
                  src={require(`../images/github.png`)}
                  alt="github"
                  className="img-logo"
                />
              </a>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="page-bio flex-full-center">
          <div className="content-bio">
            <div>
              <div>
                <h1 className="text-sub-title">
                  <strong>Bio</strong>
                </h1>
                <p className="text-content">This is a little story about me</p>
              </div>
              <p className="text-content">
                I'm a bachelor degree of computer science from
                <strong> Indonesian Computer University</strong>.
                <span> I'd loved all about computer</span>.
              </p>
            </div>
            <div />
          </div>
        </Jumbotron>

        <Jumbotron className="page-experience flex-full-center">
          <div className="content-bio">
            <div>
              <h1 className="text-sub-title">
                <strong>Experience</strong>
              </h1>
            </div>
            <div className="width-full">
              <div className="flex-space-around">
                <h3 className="text-content">
                  Helpdesk
                  <p className="text-content-small">
                    Otoritas Jasa Keuangan
                  </p>{" "}
                </h3>
                <span className="text-content-xsmall">Okt 2015 - Des 2017</span>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="page-skill flex-full-center">
          <div className="content-bio">
            <div>
              <div>
                <h1 className="text-sub-title">
                  <strong>Skillset</strong>
                </h1>
              </div>
              <div className="flex-center-skill">
                <Row>
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
                </Row>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="page-portofolio flex-full-center">
          <div className="content-bio">
            <div>
              <div>
                <h1 className="text-sub-title">
                  <strong>Latest Works</strong>
                </h1>
              </div>

              <Row className="flex-space-around">
                <Col xs="12" xl="4">
                  <Card className="card-project">
                    <a href="http://foodbook.xyz/">
                      <CardImg
                        width="10%"
                        src={require(`../images/foodbook.png`)}
                        alt="Card image cap"
                      />
                    </a>
                    <CardBody>
                      <CardTitle className="text-content">Foodbook</CardTitle>
                      <CardText className="text-content-small">
                        This app useful for sharing favorite food to everyone.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <a onClick={this.scrollToTop}>
            <img className="img-top" src={require(`../images/top.png`)} alt="TOP" />
          </a>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
