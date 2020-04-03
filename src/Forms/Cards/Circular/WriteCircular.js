import React from "react"

import './writecircular.css';
// --- This is the part to add

import { Form,FormControl,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class WriteCircular extends React.Component {
	render() {
		return (
		<div id = "chai">

      <Form.Label>Write Circular</Form.Label>

      <Form.Group controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Students" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Teacher" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Employee" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Parents" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
      </Form.Group>

      <Button variant="dark">Send</Button>

      
</div>
		)
	}
}