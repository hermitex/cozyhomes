import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  FormText,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";

function NewListingForm() {
  const [listingData, setlistingData] = useState({
    listingName: "",
    listingSize: "",
    listingAddress: "",
    listingPrice: "",
    listingLocation: "",
    listingCounty: "",
    numberOfBedrooms: "",
    numberOfBathrooms: "",
    listingFor: "",
    listingType: "",
    listingDescription: "",
    listingImages: "",
    termsAndConditions: "",
  });

  function handleChange(event) {
    let key = event.target.name;
    let value;
    if (event.target.type === "select") {
      value = event.target.selected;
    } else {
      value = event.target.value;
    }

    setlistingData({ ...listingData, [key]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(listingData),
    };
    fetch("http://localhost:8002/properties", options)
      .then((response) => response.json())
      .then((listing) => setlistingData(listing));
    console.log(listingData);
  }

  return (
    <Form className="mb-5" onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="listingName">Listing Name</Label>

            <Input
              onChange={handleChange}
              value={listingData.listingName}
              id="listingName"
              name="listingName"
              placeholder="Listing Name"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="listingSize">Listing Size</Label>

            <Input
              onChange={handleChange}
              value={listingData.listingSize}
              id="listingSize"
              name="listingSize"
              placeholder="Listing Size in Square Feet"
              type="number"
              min={0}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="listingAddress">Listing Address</Label>

        <Input
          onChange={handleChange}
          value={listingData.listingAddress}
          id="text"
          name="listingAddress"
          placeholder="1234 Main St"
        />
      </FormGroup>
      <FormGroup>
        <Label for="listingPrice">Listing Price</Label>

        <Input
          onChange={handleChange}
          value={listingData.listingPrice}
          id="listingPrice"
          name="listingPrice"
          placeholder="Listing Price"
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="listingLocation">Listing Location</Label>

            <Input
              onChange={handleChange}
              value={listingData.listingLocation}
              id="listingLocation"
              name="listingLocation"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="listingCounty">County</Label>

            <Input
              onChange={handleChange}
              value={listingData.listingCounty}
              id="listingCounty"
              name="listingCounty"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="numberOfBedrooms">Number of Bedrooms</Label>

            <Input
              onChange={handleChange}
              value={listingData.numberOfBedrooms}
              id="numberOfBedrooms"
              name="numberOfBedrooms"
              type="number"
              min={0}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="numberOfBathrooms">Number Of Bathrooms</Label>

            <Input
              onChange={handleChange}
              value={listingData.numberOfBathrooms}
              id="numberOfBathrooms"
              name="numberOfBathrooms"
              type="number"
              min={0}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="listingFor">Listing for:</Label>

            <Input
              onChange={handleChange}
              selected={listingData.listingFor}
              id="listingFor"
              name="listingFor"
              type="select"
            >
              <option defaultValue>Sale</option>
              <option>Rent</option>
              <option>Lease</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup row>
        <Label for="listingType" sm={2}>
          Listing Type
        </Label>
        <Col sm={10}>
          <Input
            onChange={handleChange}
            selected={listingData.listingType}
            id="listingType"
            name="listingType"
            type="select"
          >
            <option defaultValue>Single Family Home</option>
            <option>Attached House, Town House</option>
            <option>Apartment, Condo</option>
            <option>Commercial Property</option>
            <option>Estate</option>
            <option>Land Plot</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="listingDescription" sm={2}>
          Listing Description
        </Label>
        <Col sm={10}>
          <Input
            onChange={handleChange}
            value={listingData.listingDescription}
            id="listingDescription"
            name="listingDescription"
            type="textarea"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="listingImages" sm={2}>
          File
        </Label>
        <Col sm={10}>
          <Input
            onChange={handleChange}
            value={listingData.listingImages}
            id="listingImages"
            name="listingImages"
            type="file"
          />
          <FormText>Add multiple images for your listing.</FormText>
        </Col>
      </FormGroup>
      <Button>Add Listing</Button>
    </Form>
  );
}

export default NewListingForm;
