import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  DropdownItem,
} from "reactstrap";
import RandomButton from "./RandomButton";
import SortButton from "./SortButton";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="px-3">
        <NavbarBrand href="/" style={heading}>
          Sorting Visualizer App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div>
            <Navbar color="dark" dark expand="md" className="rounded p-3">
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/AKASHCS50/Sorting-Visualizer-App">
                    GitHub
                  </NavLink>
                </NavItem>
                <NavItem className="ml-md-5">
                  <RandomButton></RandomButton>
                </NavItem>
                <DropdownItem divider />
                <Input
                  type="select"
                  name="select"
                  id="SelectSort"
                  className="ml-md-3 mr-md-1 mx-3"
                >
                  <option value="sel">Selection Sort</option>
                  <option value="ins">Insertion Sort</option>
                  <option value="bub">Bubble Sort</option>
                </Input>
              </Nav>
            </Navbar>
          </div>
        </Collapse>
        <Navbar color="dark" dark expand="md" className="rounded mr-3 px-3">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <SortButton></SortButton>
            </NavItem>
          </Nav>
        </Navbar>
      </Navbar>
    </div>
  );
};

const heading = {
  fontSize: "1.50rem",
  fontWeight: "600",
  fontFamily: "cursive",
  marginRight: "5rem",
};

export default Navigation;
