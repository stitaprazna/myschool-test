import React from "react"
import AddSubject from './Forms/AddSubject';

// --- This is the part to add

import { Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Amplify from "aws-amplify"
import config from "./aws-exports"
import { withAuthenticator } from "aws-amplify-react"

Amplify.configure(config)


class App extends React.Component {

  getInitialState(){
    return({activeKey: 1})
}
handleSelect(selectedKey, event) {
    event.preventDefault();
    this.setState({activeKey: selectedKey});
}

	
	constructor(props) {
    super(props);
    this.state = {
      activeKey: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  _onButtonClick() {
   this.setState({
      showComponent: true,
    });
  }
  
	render() {
		return (
		<>
    <div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" activeKey={this.state.activeKey} onSelect={this.handleSelect} >
      <NavDropdown title="Subject" eventKey={2} id="collasible-nav-dropdown">
        <NavDropdown.Item href="Add Subject Names" eventKey="1.1">Add Subject Details</NavDropdown.Item>
		
        <NavDropdown.Item href="#Edit Subject Details">Edit Subject Details</NavDropdown.Item>
        <NavDropdown.Item href="List Of Subjects">List Of Subjects</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Class" id="collasible-nav-dropdown">
        <NavDropdown.Item href="Add Class Details">Add Class Details</NavDropdown.Item>
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


{this.state.activeKey == 1.1 ? <AddSubject /> : null}

</>


		)
	}
}

export default withAuthenticator(App, true)