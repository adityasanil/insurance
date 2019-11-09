import React from "react";
import { Badge, Button, Card, CardBody, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrinBeam,
  faCheckDouble,
  faStickyNote,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { faStickerMule } from "@fortawesome/free-brands-svg-icons";

const CardsSection = () => {
  return (
    <section className="section bg-white">
      <Container>
        <Row className="row-grid align-items-center">
          <section className="section pt-lg-0">
            <Container>
              <h1 className="display-text">Why choose us?</h1>
              <br />
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4" md="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <FontAwesomeIcon icon={faCheckDouble} />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Expert & Unbiased Advice
                          </h6>
                          <p className="description mt-3">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature.
                          </p>
                          {/* <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div> */}
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <FontAwesomeIcon icon={faStickyNote} />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Automated Reminders
                          </h6>
                          <p className="description mt-3">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature.
                          </p>
                          {/* <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div> */}
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <FontAwesomeIcon icon={faHome} />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Doorstep application assistance
                          </h6>
                          <p className="description mt-3">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature.
                          </p>
                          {/* <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div> */}
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </Row>
      </Container>
    </section>
  );
};

export default CardsSection;
