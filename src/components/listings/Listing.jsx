import React from "react";
import {
  Col,
  Card,
  CardSubtitle,
  CardTitle,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function Listing({ listing }) {
  return (
    <Col style={{ backgroundColor: "#e5e5e5" }}>
      <Card
        color="secondary"
        className="mb-3"
        inverse
        style={{
          width: "100%",
        }}
      >
        <img
          id="listing-img"
          alt="Listing"
          src="https://picsum.photos/300/200"
        />
        <i className="fa-solid fa-heart" id="wish-icon"></i>
        <CardBody>
          <CardTitle tag="h5">
            <ul className="list-unstyled d-flex justify-content-between align-content-center">
              <li>{listing.listingName}</li>
              <li>
                <i className="fa-solid fa-share-nodes"></i>
              </li>
            </ul>
          </CardTitle>

          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {listing.location}, {listing.listingCounty} county
          </CardSubtitle>

          <CardSubtitle className="mb-2 text-light" tag="h6">
            {listing.listingPrice}
          </CardSubtitle>
          <ListGroup
            horizontal
            className="d-flex text-center"
            style={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <ListGroupItem
              tag="a"
              style={{
                width: "100%",
              }}
            >
              <i className="fa-solid fa-bed"></i>
              {listing.numberOfBedrooms}
            </ListGroupItem>
            <ListGroupItem
              tag="a"
              style={{
                width: "100%",
              }}
            >
              <i className="fa-solid fa-shower"></i>
              {listing.numberOfBathrooms}
            </ListGroupItem>
            <ListGroupItem
              tag="a"
              style={{
                width: "100%",
              }}
            >
              <var>{listing.listingSize}</var>
              <sup>2</sup> ft
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Listing;
