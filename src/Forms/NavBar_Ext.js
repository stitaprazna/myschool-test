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
                <NavDropdown.Item href="Add_Class_Details" >Add Class Details</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/addsection" activeClassName="active">
                <NavDropdown.Item href="Add_Section_Details">Add Section Details</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#Edit Class Details">Edit Class Details</NavDropdown.Item>
                <NavDropdown.Item href="#Edit Section Details">Edit Section Details</NavDropdown.Item>
                <NavDropdown.Item href="List Of Classes">List Of Teacher</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Faculty" id="collasible-nav-dropdown">
              <LinkContainer to="/addteacher" activeClassName="active">
                <NavDropdown.Item href="Add_Teacher_Details">Add Teacher Details</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#Edit Teacher Details">Edit Teacher Details</NavDropdown.Item>
              <LinkContainer to="/assignclassteacher" activeClassName="active">
                <NavDropdown.Item href="Assign_Class_Teacher">Assign Class Teacher</NavDropdown.Item>
              </LinkContainer>
                <NavDropdown.Item href="List Of Teachers">List Of Teachers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Students" id="collasible-nav-dropdown">
              <LinkContainer to="/addstudent" activeClassName="active">
                <NavDropdown.Item href="Add_Student_Details">Add Student Details</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#Edit Student Details">Edit Student Details</NavDropdown.Item>
                <NavDropdown.Item href="List Of Students">List Of Students</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Transport" id="collasible-nav-dropdown">
              <LinkContainer to="/adddriver" activeClassName="active">
                <NavDropdown.Item href="Add_Driver_Details">Add Driver Details</NavDropdown.Item>
              </LinkContainer> 
                <NavDropdown.Item href="#Edit Driver Details">Edit Driver Details</NavDropdown.Item>
                <LinkContainer to="/addbus" activeClassName="active">
                <NavDropdown.Item href="Add_Bus_Details">Add Bus Details</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#Edit Bus Details">Edit Bus Details</NavDropdown.Item>
                <LinkContainer to="/assigndrivertobus" activeClassName="active">
                <NavDropdown.Item href="Assign_Driver_to_Bus">Assign Driver to Bus</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#Edit Driver to Bus">Edit Driver to Bus</NavDropdown.Item>
                <LinkContainer to="/assignstudenttobus" activeClassName="active">
                <NavDropdown.Item href="Assign_Student_to_Bus">Assign Student to Bus</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#Edit Student to Bus">Edit Student to Bus</NavDropdown.Item>
                <NavDropdown.Item href="List Of Drivers">List Of Drivers</NavDropdown.Item>
                <NavDropdown.Item href="List Of Bus">List Of Bus</NavDropdown.Item>
                <NavDropdown.Item href="List Of Students To Bus">List Of Students To Bus</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Other Staff" id="collasible-nav-dropdown">
              <LinkContainer to="/addstaff" activeClassName="active">  
                <NavDropdown.Item href="Add_Staff_Details">Add Staff Details</NavDropdown.Item>
              </LinkContainer>
                <NavDropdown.Item href="#Edit Staff Details">Edit Staff Details</NavDropdown.Item>
                <NavDropdown.Item href="List Of Staff">List Of Staff</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              </Nav>
                </Navbar.Collapse>
                
            
            </Navbar>
            
        </div>
        
       
        </>
        
		)
	}
}