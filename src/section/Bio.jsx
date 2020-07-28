import React from "react";
import { Jumbotron } from "reactstrap";

const Bio = () => {
    return (
        <Jumbotron className="page-bio flex-full-center">
            <div className="content-bio">
                <div>
                    <div>
                        <h1 className="text-sub-title">
                            <strong>Bio</strong>
                        </h1>
                        <p className="text-content-small">
                            This is a little story about me
                        </p>
                    </div>
                    <p className="text-content">
                        A cat lover who is a technology enthusiast. Also, a fast
                        learner who have a bachelor degree of computer science.
                    </p>
                    <p className="text-content">
                        Let's talk about technology together.
                        <i className="fa fa-hand-peace-o" />
                    </p>
                </div>
                <div />
            </div>
        </Jumbotron>
    );
};

export default Bio;
