import React from "react"

import './addstaff.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddClass extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
            <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Enter Staff Details</Form.Label>
  <Form.Label>FirstName</Form.Label>
  <Form.Control type="FirstName/Surname" placeholder="FirstName/Surname" />
  <Form.Label>LastName</Form.Label>
  <Form.Control type="LastName" placeholder="LastName" />
  <Form.Label>Mobile Number</Form.Label>
  <Form.Control type="Mobile Number" placeholder="MobileNumber" />
  <Form.Label>Employee Role</Form.Label>
  <Form.Control type="License Number" placeholder="License Number" />
  <Form.Label>EmployeeID</Form.Label>
  <Form.Control type="EmployeeID" placeholder="EmployeeID" />
  <Form.Label>AddImage(OPTIONAL)</Form.Label>
  <Form.Control type="AddImage" placeholder="+AddImage" />
</Form.Group>

</Form>
      
</div>
		)
	}
}





