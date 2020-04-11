import React from "react"

import './addemployee.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddClass extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
            <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Enter Employee Details</Form.Label>
  <Form.Label>FirstName</Form.Label>
  <Form.Control type="FirstName/Surname" placeholder="FirstName/Surname" />
  <Form.Label>LastName</Form.Label>
  <Form.Control type="LastName" placeholder="LastName" />
  <Form.Label>Mobile Number</Form.Label>
  <Form.Control type="Mobile Number" placeholder="MobileNumber" />
  <Form.Label>Employee Role</Form.Label>
  <Form.Control type="Employee Role" placeholder="Director,P.R.O,Attendant,Security" />
  <Form.Label>EmployeeID</Form.Label>
  <Form.Control type="EmployeeID" placeholder="EmployeeID" />
  <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>Add Image</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div>
  <Button variant="dark">Submit</Button>
</Form.Group>

</Form>
      
</div>
		)
	}
}





