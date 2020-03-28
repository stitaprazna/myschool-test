import React from "react"

import './addteacher.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddTeacher extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Teacher Details</Form.Label>
    <Form.Control type="First Name" placeholder="First Name/Surname" />
    <Form.Control type="Last Name" placeholder="LastName" />
    <Form.Control type="MobileNumber" placeholder="Mobile Number" />
    <Form.Control type="e-mail" placeholder="nam@xyz.com" />
    <Form.Control type="AddImage" placeholder="Optional" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="Bio Of Teacher" rows="3" />
  </Form.Group>
  
</Form>
      
</div>
		)
	}
}