import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

import { NavLink } from "react-router-dom";

const Navigation = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light mb-5"
      style={{ height: 8 + "rem" }}
    >
      <div className="container">
        <div className="d-flex">
          <NavLink className="navbar-brand" to="/">
            COZYHOMES
          </NavLink>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 end d-flex">
            <li className="nav-item">
              <NavLink className="nav-link" to="listings">
                I am interesed in:
              </NavLink>
            </li>
          </ul>

          <Form
            className="p-1 "
            style={{
              width: 15 + "rem",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <FormGroup className="navbar-nav me-auto mb-2 mb-lg-0 end d-flex">
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                style={{ width: 100 + "%" }}
              >
                <option>Buying</option>
                <option>Renting</option>
                <option>Leasing</option>
                <option>Selling</option>
              </Input>
            </FormGroup>
          </Form>
        </div>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0 end d-flex">
          <li className="nav-item">
            <NavLink className="nav-link" to="listings">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="listings">
              Listings
            </NavLink>
          </li>
        </ul>

        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 end d-flex">
            <li className="nav-item">
              <NavLink className="nav-link" to="listings">
                <var>
                  <i className="fa-solid fa-bell m-0"></i>
                  <sup className="text-danger">2</sup>
                </var>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Account
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ width: 3 + "rem" }}
              >
                <li className="nav-item">
                  <NavLink className="nav-link" to="dashboard">
                    <i className="fa-solid fa-table-cells"></i> Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="profile">
                    <i className="fa-solid fa-user"></i>Profile
                  </NavLink>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="login">
                    <i className="fa-solid fa-right-from-bracket"></i>Logout
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
