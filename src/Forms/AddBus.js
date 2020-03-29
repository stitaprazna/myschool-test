import React from "react"

import './addbus.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddDriver extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Bus Details</Form.Label>
    <Form.Label>Enter Registered Number</Form.Label>
    <Form.Control type="Bus Registered Number" placeholder="EX: AP 39 X 9999" />
    <Form.Label>Bus Model Name</Form.Label>
    <Form.Control type="Bus Model Name" placeholder="Tata Motors Starbus Skool 30 Bs Iv Cng Bus" />
    <Form.Label>Bus Seating Capacity</Form.Label>
    <Form.Control type="Bus Seating Capacity" placeholder="EX : 30" />
    <Form.Label>Add Image(Optional)</Form.Label>
    <Form.Control type="AddImage" placeholder="Upload Image" />
  </Form.Group>
  
</Form>
      
</div>
		)
	}
}