import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="flex-center">
          <h1 className="text-title flex-center-center">mf</h1>
        </div>
        <Jumbotron className="page-overview">
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

        <Jumbotron className="page-bio">
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

        <Jumbotron className="page-experience">
          <div className="content-bio">
            <div>
              <h1 className="text-sub-title">
                <strong>Experience</strong>
              </h1>
            </div>
            <div className="width-full">
              <div className="border-content">
                <span className="text-content-small">Helpdesk </span>
                <span className="text-content-year">(2015 - 2017)</span>
                <p className="text-content">Otoritas Jasa Keuangan</p>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="page-edu">
          <div className="content-bio">
            <div>
              <div>
                <h1 className="text-sub-title">
                  <strong>Education</strong>
                </h1>
              </div>
              <div>
                <span className="text-content">2015</span>
                <p className="text-content">
                  Bachelor Degree in Informatic Engineering
                </p>
                <span className="text-content">
                  Indonesian Computer University
                </span>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="page-skill">
          <div className="content-bio">
            <div>
              <div>
                <h1 className="text-sub-title">
                  <strong>Skillset</strong>
                </h1>
              </div>
              <div className="flex-center-skill">
                <span className="text-title-logo-skill">
                  <img
                    src={require(`../images/html.png`)}
                    alt="html5"
                    className="img-logo-skill"
                  />html5
                </span>
                <span className="text-title-logo-skill">
                  <img
                    src={require(`../images/css.png`)}
                    alt="css3"
                    className="img-logo-skill"
                  />
                  css3
                </span>
                <span className="text-title-logo-skill">
                  <img
                    src={require(`../images/js.png`)}
                    alt="js"
                    className="img-logo-skill"
                  />
                  javaScript
                </span>
                <span className="text-title-logo-skill">
                  <img
                    src={require(`../images/react.png`)}
                    alt="react"
                    className="img-logo-skill"
                  />
                  react JS
                </span>
                <span className="text-title-logo-skill">
                  <img
                    src={require(`../images/node.png`)}
                    alt="node"
                    className="img-logo-skill"
                  />
                  node JS
                </span>
                <span className="text-title-logo-skill">
                  <img
                    src={require(`../images/mongod.png`)}
                    alt="mongo"
                    className="img-logo-skill"
                  />
                  mongodb
                </span>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="page-portofolio">
          <div className="content-bio">
            <div>
              <div>
                <h1 className="text-sub-title">
                  <strong>My Works</strong>
                </h1>
              </div>
              <div>
                <span className="text-content">2015</span>
                <p className="text-content">
                  Bachelor Degree in Informatic Engineering
                </p>
                <span className="text-content">
                  Indonesian Computer University
                </span>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
