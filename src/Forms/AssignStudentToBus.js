import React from "react"

import './assignstudenttobus.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AssignStudentToBus extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
			<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Bus</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(Bus)</option>
      <option>Get from DB(Bus)</option>
      <option>Get from DB(Bus)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
  <Form.Label>Select Class </Form.Label>
    <Form.Control as="select">
      <option>Get from DB(Class)</option>
      <option>Get from DB(Class)</option>
      <option>Get from DB(Class)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect3">
  <Form.Label>Select Section </Form.Label>
    <Form.Control as="select">
      <option>Get from DB(Section)</option>
      <option>Get from DB(Section)</option>
      <option>Get from DB(Section)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select Multiple Students</Form.Label>
    <Form.Control as="select" multiple>
      <option>Get from DB(Students of that class)</option>
      <option>Get from DB(Students of that class)</option>
      <option>Get from DB(Students of that class)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  
                
  
  
</Form>
      
</div>
		)
	}
}