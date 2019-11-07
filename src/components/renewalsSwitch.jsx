import React from "react";
import { Container, Col, Row } from "reactstrap";

const RenewalsSwitch = () => {
  return (
    <section className="section bg-white">
      <Container>
        <Row className="row-grid align-items-center">
          <Col md="6">
            <div className="pl-md-5">
              <div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle mb-5">
                <i className="ni ni-settings" />
              </div>
              <h3 className="font-weight-bold text-danger">Renewals</h3>
              <p className="lead">
                WhatsApp: 'Renewals' on
                <a
                  href="//api.whatsapp.com/send?phone=918169848105&text=Renewals"
                  title="Connect on whatsapp"
                  className="pl-2"
                >
                  <u>+91-7059010203</u>
                </a>{" "}
                and our experts will get in touch with you.
              </p>

              <a
                className="font-weight-bold text-warning mt-5"
                href={null}
                onClick={e => e.preventDefault()}
              >
                Sample text
              </a>
            </div>
          </Col>
          <Col md="6">
            <div className="pl-md-5">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <i className="ni ni-settings" />
              </div>
              <h3 className="font-weight-bold text-success">Switch</h3>
              <p className="lead">
                WhatsApp: 'Switch' on
                <a
                  href="//api.whatsapp.com/send?phone=918169848105&text=Switch"
                  title="Connect on whatsapp"
                  className="pl-2"
                >
                  <u>+91-7059010203</u>
                </a>{" "}
                and our experts will get in touch with you.
              </p>

              <a
                className="font-weight-bold text-warning mt-5"
                href={null}
                onClick={e => e.preventDefault()}
              >
                Sample text
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RenewalsSwitch;
