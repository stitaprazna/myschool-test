import React from "react"

import './uploadmodelquestionpapers.css';
// --- This is the part to add

import { Form,FormControl,Button,InputGroup,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class UploadModelQuestionPapers extends React.Component {
	render() {
		return (
		<div id = "chai">

      <Form.Label>Upload Model Question Papers</Form.Label>

      

      <Form.Group controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Teacher" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Select Teacher</Form.Label>
        <Form.Control as="select">
        <option>Get from DB(Teacher)</option>
        <option>Get from DB(Teacher)</option>
        <option>Get from DB(Teacher)</option>
        <option>4</option>
        <option>5</option>
        </Form.Control>
    </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Students/Parents" />
      </Form.Group>

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
  <Form.Label>Select Subject</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(subject)</option>
      <option>Get from DB(subject)</option>
      <option>Get from DB(subject)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Title"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>Upload Model Question Paper</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div>

      <Button variant="dark">Submit</Button>

      
</div>
		)
	}
}