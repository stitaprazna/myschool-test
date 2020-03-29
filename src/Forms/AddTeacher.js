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
    <Form.Label>FirstName/Surname</Form.Label>
    <Form.Control type="First Name" placeholder="First Name/Surname" />
    <Form.Label>LastName</Form.Label>
    <Form.Control type="Last Name" placeholder="LastName" />
    <Form.Label>MobileNumber</Form.Label>
    <Form.Control type="MobileNumber" placeholder="Mobile Number" />
    <Form.Label>e-mail</Form.Label>
    <Form.Control type="e-mail" placeholder="nam@xyz.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Subjects</Form.Label>
    <Form.Control as="select subjects" multiple>
      <option>Get from DB(subjects)</option>
      <option>Get from DB(subjects)</option>
      <option>Get from DB(Subjects)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="Bio Of Teacher" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
  <Form.Label>AddImage(OPTIONAL)</Form.Label>
    <Form.Control type="AddImage" placeholder="Upload Image" />
    </Form.Group>
</Form>
      
</div>
		)
	}
}