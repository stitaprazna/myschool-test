import React from "react"

import './adddriver.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddDriver extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Driver Details</Form.Label>
    <Form.Label>FirstName/Surname</Form.Label>
    <Form.Control type="FirstName/Surname" placeholder="FirstName/Surname" />
    <Form.Label>LastName</Form.Label>
    <Form.Control type="LastName" placeholder="LastName" />

    <Form.Group controlId="exampleForm.ControlSelect4">
                    <Form.Label>Select Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group> 

    <Form.Label>Mobile Number</Form.Label>
    <Form.Control type="Mobile Number" placeholder="MobileNumber" />
    <Form.Label>License Number</Form.Label>
    <Form.Control type="License Number" placeholder="License Number" />
    <Form.Label>EmployeeID</Form.Label>
    <Form.Control type="EmployeeID" placeholder="EmployeeID" />
    <div className="mb-3">
                      <Form.File id="formcheck-api-regular">
                        <Form.File.Label>Add Image</Form.File.Label>
                        <Form.File.Input />
                      </Form.File>
                    </div>
  </Form.Group>
  
  <Button variant="dark">Submit</Button>
</Form>
      
</div>
		)
	}
}