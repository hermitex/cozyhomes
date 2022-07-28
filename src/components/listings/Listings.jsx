import React from "react";
import { Container, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import Search from "../search/Search";
import Listing from "./Listing";

function Listings() {
  const [listings] = useFetch("http://localhost:8002/properties");
  return (
    <>
      <Search />
      <Container
        className="d-flex  just-content-center mt-5"
        style={{ height: 100 + "vh" }}
      >
        <Row md={4}>
          {listings &&
            listings.map((listing) => (
              <Listing key={listing.id} listing={listing} />
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Listings;
