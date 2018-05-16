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
                <h1>
                  <strong className="text-content">Bio</strong>
                </h1>
                <p className="text-context">This is a little story about me</p>
              </div>
              <p className="text-content">
                I'm a bachelor degree of computer science from
                <strong> Indonesian Computer University</strong>. I'd loved all
                about computer that's why i take computer science.
              </p>
            </div>
            <div />
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
