import React from "react";
import { Jumbotron } from "reactstrap";

const Overview = () => {
  return (
    <Jumbotron className="page-overview flex-full-center">
      <div className="content-overview">
        <div>
          <p className="text-content">Hi Everyone,</p>
          <p className="text-content-small">
            I'm <strong>Miftah Faris</strong>, a Developer based in
            <strong> Jakarta</strong>
          </p>
          <p className="text-content">Keep scrolling</p>
          <p className="text-content-small">to know me better</p>
        </div>
        <div className="flex-center">
          <a href="https://www.facebook.com/miftahdefariis?ref=bookmarks">
            <i
              className="img-logo fa fa-facebook-official fa-3x"
              aria-hidden="true"
            />
          </a>
          <a href="https://www.linkedin.com/in/miftah-faris-8072ba115/">
            <i
              className="img-logo fa fa-linkedin-square fa-3x "
              aria-hidden="true"
            />
          </a>
          <a href="https://github.com/miftahmfaris">
            <i className="img-logo fa fa-github fa-3x" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Overview;
