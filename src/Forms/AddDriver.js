import React from "react"

import './adddriver.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddDriver extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Driver Details</Form.Label>
    <Form.Label>FirstName/Surname</Form.Label>
    <Form.Control type="FirstName/Surname" placeholder="FirstName/Surname" />
    <Form.Label>LastName</Form.Label>
    <Form.Control type="LastName" placeholder="LastName" />
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control type="Mobile Number" placeholder="MobileNumber" />
    <Form.Label>License Number</Form.Label>
    <Form.Control type="License Number" placeholder="License Number" />
    <Form.Label>EEmployeeID</Form.Label>
    <Form.Control type="EmployeeID" placeholder="EmployeeID(OPTIONAL)" />
    <Form.Label>AddImage(OPTIONAL)</Form.Label>
    <Form.Control type="AddImage" placeholder="Upload Image" />
  </Form.Group>
  
</Form>
      
</div>
		)
	}
}