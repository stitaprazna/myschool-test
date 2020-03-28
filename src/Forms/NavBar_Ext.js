import React from "react"
import { Route, RouteHandler, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Navbar_Ext extends React.Component {
	render() {
		return (
            <>
            <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Quarantine</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" >
              <NavDropdown title="Subject" id="collasible-nav-dropdown">
              <LinkContainer to="/addsubject" activeClassName="active">
                <NavDropdown.Item href="Add_Subject_Names">Add Subject Details</NavDropdown.Item>
                </LinkContainer> 
                <NavDropdown.Item href="#Edit Subject Details">Edit Subject Details</NavDropdown.Item>
                <NavDropdown.Item href="List Of Subjects">List Of Subjects</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Class" id="collasible-nav-dropdown" >
              <LinkContainer to="/addclass" activeClassName="active">
                <NavDropdown.Item href="Add Class Details" >Add Class Details</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="Add Section Details">Add Section Details</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Class Details">Edit Class Details</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Section Details">Edit Section Details</NavDropdown.Item>
                <NavDropdown.Item href="List Of Classes">List Of Teacher</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Faculty" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Add Teacher Details">Add Teacher Details</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Teacher Details">Edit Teacher Details</NavDropdown.Item>
                <NavDropdown.Item href="Assign Class Teacher">Assign Class Teacher</NavDropdown.Item>
                <NavDropdown.Item href="List Of Teachers">List Of Teachers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Students" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Add Student Details">Add Student Details</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Student Details">Edit Student Details</NavDropdown.Item>
                <NavDropdown.Item href="List Of Students">List Of Students</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Transport" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Add Driver Details">Add Driver Details</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Driver Details">Edit Driver Details</NavDropdown.Item>
                <NavDropdown.Item href="Add Bus Details">Add Bus Details</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Bus Details">Edit Bus Details</NavDropdown.Item>
                <NavDropdown.Item href="Assign Driver to Bus">Assign Driver to Bus</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Driver to Bus">Edit Driver to Bus</NavDropdown.Item>
                <NavDropdown.Item href="Assign Student to Bus">Assign Student to Bus</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Student to Bus">Edit Student to Bus</NavDropdown.Item>
                <NavDropdown.Item href="List Of Drivers">List Of Drivers</NavDropdown.Item>
                <NavDropdown.Item href="List Of Bus">List Of Bus</NavDropdown.Item>
                <NavDropdown.Item href="List Of Students To Bus">List Of Students To Bus</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Other Staff" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Add Staff Details">Add Staff Details</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Staff Details">Edit Staff Details</NavDropdown.Item>
                <NavDropdown.Item href="List Of Staff">List Of Staff</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              </Nav>
                </Navbar.Collapse>
                
            
            </Navbar>
            
        </div>
        
        {/*
        {this.state.activeKey == 1.1 ? <AddSubject /> : null}
        {this.state.activeKey == 2.1 ? <AddSubject /> : null}
        */}
        </>
        
		)
	}
}


