import React from "react"

import './addteacher.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddTeacher extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Teacher Details</Form.Label> 
     {' '};
    <Form.Label>FirstName/SurName</Form.Label>
    <Form.Control type="First Name/Surname" placeholder="First Name/Surname" />
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="Last Name" placeholder="LastName" />
    <Form.Label>Contact Number</Form.Label>
    <Form.Control type="Mobile Number" placeholder="Mobile Number" />
    <Form.Label>e-mail</Form.Label>
    <Form.Control type="e-mail" placeholder="nam@xyz.com(optional)" />
    <Form.Label>Address</Form.Label>
    <Form.Control type="Address Line1" placeholder="Address Line1" />
    <Form.Control type="Address Line2" placeholder="Address Line2" />
    <Form.Control type="LandMark" placeholder="LandMark" />
   </Form.Group> 
    <Form.Group controlId="exampleForm.ControlSelect4">
                    <Form.Label>Select Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
    </Form.Group> 
   
   <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select Subjects</Form.Label>
    <Form.Control as="select" multiple>
      <option>Get From DB(Subjects)</option>
      <option>Get From DB(Subjects)</option>
      <option>Get From DB(Subjects)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Form.Label>EmployeeID</Form.Label>
  <Form.Control type="EmlpoyeeID" placeholder="EmployeeID" />
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Bio Of Teacher</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>Add Image</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div>
  <Button variant="dark">Submit</Button>
</Form>

      
</div>
		)
	}
}