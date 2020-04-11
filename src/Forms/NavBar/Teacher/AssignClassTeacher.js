import React from "react"

import './assignclassteacher.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AssignClassTeacher extends React.Component {
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
  <Form.Group controlId="exampleForm.ControlSelect2">
  <Form.Label>Select Section</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(section)</option>
      <option>Get from DB(section)</option>
      <option>Get from DB(section)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
  <Form.Label>Select Teacher</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(TeacherName(ID))</option>
      <option>Get from DB(TeacherName(ID))</option>
      <option>Get from DB(TeacherName(ID))</option>
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