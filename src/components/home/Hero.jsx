import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import Slide from "../jumbotron/Slide";

function Hero() {
  return (
    <div
      className=" text-light d-flex "
      style={{ height: "100vh", flexDirection: "column" }}
    >
      <div className=" bg-dark">
        <Row>
          <Col md={3}>
            <div
              className="container d-flex justify-content-center align-items-start"
              style={{
                flexDirection: "column",
                height: "50vh",
              }}
            >
              <h2>Get your Dream Place!</h2>
              <p className="text-muted my-3 h5">
                Buy or rent comfortable and hilarious properites of that matches
                your needs.
              </p>
            </div>
          </Col>
          <Col md={9}>
            <Slide />
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row className="my-5 ">
          <Col md={12} className="text-center my-3 text-dark">
            <h3>What we Offer</h3>
          </Col>
          <Col md={4} className="">
            <Card className="bg-dark py-5 px-3">
              <CardBody>
                <CardTitle className="h3">Virtual Survey</CardTitle>
                <CardText className="text-muted">
                  You can catch a glimple of your dream property from the comfot
                  of your leaving room. Yes! No travelling.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark py-5 px-3">
              <CardBody>
                <CardTitle className="h3">Choose your type</CardTitle>
                <CardText className="text-muted">
                  Find your lovely dream property, look for property model you
                  like and choose the best location that suites your needs
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark py-5 px-3">
              <CardBody>
                <CardTitle className="h3">Easy Payment</CardTitle>
                <CardText className="text-muted">
                  We accept a wide range of payment methods, including card
                  payments, bank payments, and we also offer a loan payment
                  method.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Hero;
