import React from "react";
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

const Portofolio = () => {
  return (
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
                  <CardTitle className="text-content">
                    <strong>Foodbook</strong>
                  </CardTitle>
                  <CardText className="text-content-small">
                    This app useful for sharing your favorite food to everyone.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Portofolio;
