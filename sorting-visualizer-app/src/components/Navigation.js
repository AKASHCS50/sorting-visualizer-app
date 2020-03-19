import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import RandomButton from "./RandomButton";
import SortButton from "./SortButton";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light fixed expand="md">
        <NavbarBrand href="/">Sorting Visualizer App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div>
            <Navbar color="dark" dark expand="md">
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Navbar>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

const nav = {
  display: "flex",
  width: "100vw",
  height: "13vh",
  backgroundColor: "#333",
  position: "fixed",
  top: "0",
  left: "0",
  color: "white"
};

const nav_ul = {
  minWidth: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  listStyle: "none",
  padding: "20px",
  cursor: "default"
};

const heading = {
  fontSize: "1.25rem"
};

const sort_btn = {
  fontSize: "1.3rem",
  cursor: "pointer",
  backgroundColor: "#96a2967a",
  padding: "10px",
  borderRadius: "10px",
  minWidth: "80px",
  textAlign: "center"
};

export default Navigation;
