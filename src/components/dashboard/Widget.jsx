import React from "react";

import { Card, CardBody } from "reactstrap";
import ListingsSummaryChart from "../charts/ListingsSummaryChart";

function Widget() {
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
          <li>Listings summary</li>
          <li>
            <i class="fa-solid fa-gear"></i>
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
              <i class="fa-solid fa-rectangle-list"></i>
              <small>My Listings</small>
              <h4>{689}</h4>
            </li>
            <li>
              <i class="fa-solid fa-eye"></i>
              <small>Listings Views</small>
              <h4>{10000} </h4>
            </li>
            <li>
              <i class="fa-solid fa-hand-holding-dollar"></i>
              <small> Revenue</small>
              <h4>{5000000} </h4>
            </li>
          </ul>
        
        </div>
      </CardBody>
    </Card>
    
  );
}

export default Widget;
