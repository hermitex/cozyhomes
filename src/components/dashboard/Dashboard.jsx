import React from "react";
import "./Dashboard.css";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  Button,
  CardSubtitle,
} from "reactstrap";
import useFetch from "../hooks/useFetch";
import Media from "./Media";
import Widget from "./Widget";
import WidgetStat from "./WidgetStat";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";

function Dashboard() {
  const [listings] = useFetch("http://localhost:8002/properties");
  return (
    <div className="container-fluid">
      <h1>Dashboard</h1>
      <Row>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <Widget />
            </Col>

            <Col md={6}>
              <Widget />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Col md={12}>
                <div>
                  <ul className="unstyled-list d-flex">
                    <h2>My Listings</h2>
                    <Link to="/new-listing">
                      <Button>Add New Listing</Button>
                    </Link>
                  </ul>
                </div>

                {listings &&
                  listings.map((listing) => (
                    <Media key={listing.id} listing={listing} />
                  ))}
              </Col>
            </Col>

            <Col md={6}>
              <Col md={12}>
                <div>
                  <ul className="unstyled-list d-flex">
                    <h2>Latest Blog</h2>
                    <Link to="/new-listing">
                    
                      <Button>Add New Blog</Button>
                    </Link>
                  </ul>
                </div>
                <Card
                  className="my-2"
                  color="dark"
                  inverse
                  style={{
                    width: "100%",
                  }}
                >
                  <CardHeader>Conmen secrets</CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">
                      How to spot real estate cones
                    </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>View</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={12}>
                <h1>Stats</h1>
                <WidgetStat />
              </Col>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <Profile />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
