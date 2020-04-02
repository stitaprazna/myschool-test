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
          <Navbar.Brand href="#home">MySchoolAdmin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" >

              <NavDropdown title="Subject" id="collasible-nav-dropdown">
              <LinkContainer to="/addsubject" activeClassName="active">
                <NavDropdown.Item href="Add_Subject_Names">Add Subject Details</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/editsubject" activeClassName="active"> 
                <NavDropdown.Item href="#Edit Subject Details">Edit Subject Details</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/listofsubjects" activeClassName="active">
                <NavDropdown.Item href="List Of Subjects">List Of Subjects</NavDropdown.Item>
                </LinkContainer>

              </NavDropdown>
              <NavDropdown title="Class" id="collasible-nav-dropdown" >
              <LinkContainer to="/addclass" activeClassName="active">
                <NavDropdown.Item href="Add_Class_Details" >Add Class Details</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/addsection" activeClassName="active">
                <NavDropdown.Item href="Add_Section_Details">Add Section Details</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/editclass" activeClassName="active">
                <NavDropdown.Item href="#Edit_Class_Details">Edit Class/Section Details</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/listofclasses" activeClassName="active">
                <NavDropdown.Item href="List Of Classes">List Of Classes</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              
              <NavDropdown title="Faculty" id="collasible-nav-dropdown">
              <LinkContainer to="/addteacher" activeClassName="active">
                <NavDropdown.Item href="Add_Teacher_Details">Add Teacher Details</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/editteacher" activeClassName="active">
                <NavDropdown.Item href="#Edit_Teacher_Details">Edit Teacher Details</NavDropdown.Item>
                </LinkContainer>
              <LinkContainer to="/assignclassteacher" activeClassName="active">
                <NavDropdown.Item href="Assign_Class_Teacher">Assign Class Teacher</NavDropdown.Item>
              </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/listofteachers" activeClassName="active">
                <NavDropdown.Item href="List_Of_Teachers">List Of Teachers</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Students" id="collasible-nav-dropdown">
              <LinkContainer to="/addstudent" activeClassName="active">
                <NavDropdown.Item href="Add_Student_Details">Add Student Details</NavDropdown.Item>
                </LinkContainer>
              <LinkContainer to="/editstudent" activeClassName="active">
                <NavDropdown.Item href="#Edit_Student_Details">Edit Student Details</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/listofstudents" activeClassName="active">
                <NavDropdown.Item href="List Of Students">List Of Students</NavDropdown.Item> 
                </LinkContainer>             
              </NavDropdown>


              <NavDropdown title="Transport" id="collasible-nav-dropdown">
              <LinkContainer to="/adddriver" activeClassName="active">
                <NavDropdown.Item href="Add_Driver_Details">Add Driver Details</NavDropdown.Item>
              </LinkContainer>              
               <LinkContainer to="/addbus" activeClassName="active">
                <NavDropdown.Item href="Add_Bus_Details">Add Bus Details</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/assigndrivertobus" activeClassName="active">
                <NavDropdown.Item href="Assign_Driver_to_Bus">Assign Driver to Bus</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/assignstudenttobus" activeClassName="active">
                <NavDropdown.Item href="Assign_Student_to_Bus">Assign Student to Bus</NavDropdown.Item>
                </LinkContainer>
                    <NavDropdown.Divider />
                <LinkContainer to="/editdriver" activeClassName="active">
                <NavDropdown.Item href="#Edit_Driver_Details">Edit Driver Details</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/editbus" activeClassName="active">
                <NavDropdown.Item href="#Edit_Bus_Details">Edit Bus Details</NavDropdown.Item>
                </LinkContainer>                
                <LinkContainer to="/editassigndrivertobus" activeClassName="active">
                <NavDropdown.Item href="Edit_Assign_Driver_to_Bus">Edit Assign Driver to Bus</NavDropdown.Item>
                </LinkContainer>              
                <LinkContainer to="/editassignstudenttobus" activeClassName="active">
                <NavDropdown.Item href="#Edit_Assign_Student_to_Bus">Edit Assign Student to Bus</NavDropdown.Item>
                </LinkContainer>
                    <NavDropdown.Divider />
                <LinkContainer to="/listofdrivers" activeClassName="active">    
                <NavDropdown.Item href="List Of Drivers">List Of Drivers</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/listofbus" activeClassName="active">
                <NavDropdown.Item href="List Of Bus">List Of Bus</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/listofdriverstobus" activeClassName="active">
                <NavDropdown.Item href="List Of Drivers To Bus">List Of Drivers To Bus</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/listofStudentsToBus" activeClassName="active">
                <NavDropdown.Item href="List Of Students To Bus">List Of Students To Bus</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              
              <NavDropdown title="Employees" id="collasible-nav-dropdown">
              <LinkContainer to="/addemployee" activeClassName="active">  
                <NavDropdown.Item href="Add_Employee_Details">Add Employee Details</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/editemployee" activeClassName="active">
                <NavDropdown.Item href="#Edit_Employee_Details">Edit Employee Details</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/listofemployees" activeClassName="active">
                <NavDropdown.Item href="List Of Employees">List Of Employees</NavDropdown.Item>
              </LinkContainer> 
              </NavDropdown>
              </Nav>
                </Navbar.Collapse>
                
            
            </Navbar>
            
        </div>
        
       
        </>
        
		)
	}
}