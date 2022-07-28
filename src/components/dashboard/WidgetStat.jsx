import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Col,
  Row,
  List,
  CardSubtitle,
  Button,
} from "reactstrap";
import ListingsSummaryChart from "../charts/ListingsSummaryChart";

function WidgetStat() {
  return (
    <Card
      className="my-2"
      style={{
        width: "100%",
      }}
    >
      <div
        className="d-flex "
        style={{
          width: "100%",
        }}
      >
        <ul
          className="d-flex list-unstyled justify-content-between p-3"
          style={{
            width: "100%",
          }}
        >
          <li>
          <ul className="list-unstyled">
            <li>Listings Summary</li>
            <li>
              <small className="text-muted">
                Last Updated {new Date().toLocaleDateString()}
              </small>
            </li>
          </ul>
          </li>
         
          <li>
            <Link to="/analytics">
              <Button>
                Go to analytics<i class="fa-solid fa-chevron-right"></i>
              </Button>
            </Link>
          </li>
        </ul>
      </div>

      <CardBody>
        <div
          className="d-flex "
          style={{
            width: "100%",
          }}
        >
          <ul
            className="d-flex list-unstyled justify-content-between"
            style={{
              width: "100%",
            }}
          >
            <li>
              <i class="fa-solid fa-globe"></i>
              <small>Total</small>
              <h2>{689}</h2>
            </li>
            <li>
              <i class="fa-solid fa-money-bill-trend-up"></i>
              <small>Average price range</small>
              <h2>{10000} </h2>
            </li>
            <li>
              <i class="fa-solid fa-cloud-arrow-up"></i>
              <small> Uploads</small>
              <h2>{5000000} </h2>
            </li>
          </ul>
        </div>
      </CardBody>
      <CardSubtitle>Structure of Listings</CardSubtitle>
      <Row>
        <Col md={6}>
          <ListingsSummaryChart />
        </Col>
        <Col md={6}>
          <Col md={12}>
            <List>
              <li>Single Family Home</li>
              <li>Attached House, Town House</li>
              <li>Apartment, Condo</li>
              <li>Commercial Property</li>
              <li>Estate</li>
              <li>Land Plot</li>
            </List>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}

export default WidgetStat;
