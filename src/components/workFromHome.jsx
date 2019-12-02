import React from "react";
import { Badge, Container, Col, Row, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMoneyCheckAlt,
  faHome,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";

const WorkFromHome = () => {
  return (
    <section className="section section-lg bg-gradient-secondary">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="6">
            <img
              alt="..."
              className="img-fluid floating"
              src={require("assets/img/theme/promo-1.png")}
            />
          </Col>
          <Col className="order-md-1" md="6">
            <div className="pr-md-5">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3>Work from Home Opportunity</h3>
              <p>
                Perfect work from home opportunity to become a Financial
                Advisor.
              </p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">Zero investment & free training.</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <FontAwesomeIcon icon={faHome} />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">Work from home opportunity.</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <FontAwesomeIcon icon={faHeadset} />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        Online and offline sales support.
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
              <div>
                <Button
                  className="mt-4"
                  color="danger"
                  // onClick={e => e.preventDefault()}
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfe7H8xID0rB3wBdncWbg3l3yoqZVl_AtSh0OzXY87EJ03UZQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff" }}
                  >
                    Apply
                  </a>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkFromHome;
