import React from "react"

import './assigndrivertobus.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AssignDriverToBus extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
			<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Bus</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(BusNum + Name)</option>
      <option>Get from DB(BusNum + Name)</option>
      <option>Get from DB(BusNum + Name)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
  <Form.Label>Select Driver</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(DriverName + EmpID)</option>
      <option>Get from DB(DriverName + EmpID)</option>
      <option>Get from DB(DriverName + EmpID)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Button variant="dark">Submit</Button>
  
                
  
  
</Form>
      
</div>
		)
	}
}