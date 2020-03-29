import React from "react"

import './addstudent.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddStudent extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Class</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(class)</option>
      <option>Get from DB(class)</option>
      <option>Get from DB(class)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Label>Select Section</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(section)</option>
      <option>Get from DB(section)</option>
      <option>Get from DB(section)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>FirstName/SurName</Form.Label>
    <Form.Control type="First Name/Surname" placeholder="First Name/Surname" />
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="Last Name" placeholder="LastName" />
    <Form.Label>Parent/Gaurdian Name</Form.Label>
    <Form.Control type="Parent/Guardian Name" placeholder="Parent/Guardain Name" />
    <Form.Label>Parent/Gaurdian Mobile Number</Form.Label>
    <Form.Control type="Parent/Guardian MobileNumber" placeholder="Parent/Guardian Mobile Number" />
    <Form.Label>e-mail</Form.Label>
    <Form.Control type="e-mail" placeholder="nam@xyz.com(optional)" />
    <Form.Label>Address</Form.Label>
    <Form.Control type="Address Line1" placeholder="Address Line1" />
    <Form.Control type="Address Line2" placeholder="Address Line2" />
    <Form.Control type="LandMark" placeholder="LandMark" />
   </Form.Group> 
   <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select State</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(State)</option>
      <option>Get from DB(State)</option>
      <option>Get from DB(State)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
  <Form.Label>City</Form.Label>
  <Form.Control type="City" placeholder="Ex : Eluru" />
  <Form.Label>Pincode</Form.Label>
  <Form.Control type="Pincode" placeholder="Ex : 534001" />
  <Form.Label>Add Image(OPTIONAL)</Form.Label>
  <Form.Control type="AddImage" placeholder="Optional" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect3">
    <Form.Label>Is Transport Needed?</Form.Label>
    <Form.Control as="select">
      <option>Yes</option>
      <option>NO</option>
    </Form.Control>
  </Form.Group> 
  <Form.Group controlId="exampleForm.ControlInput3">
    <Form.Label>If selected Yes</Form.Label>
    <Form.Label>Enter DroppingPoint Details</Form.Label>
    <Form.Control type="DroppingPoint" placeholder="Ex : Jutemill" />
  </Form.Group>
  
</Form>
      
</div>
		)
	}
}