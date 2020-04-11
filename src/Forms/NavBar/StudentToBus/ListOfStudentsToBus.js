import React from "react"

import './listofstudentstobus.css';
// --- This is the part to add

import { Form,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class listofstudentstobus extends React.Component {
	render() {
		return (
		<div id = "chai">

      
<Form>
<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Bus</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(BusReg.Num)</option>
      <option>Get from DB(BusReg.Num)</option>
      <option>Get from DB(BusReg.Num)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
<Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select Class</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(class)</option>
      <option>Get from DB(class)</option>
      <option>Get from DB(class)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect3">
  <Form.Label>Select Section</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(section)</option>
      <option>Get from DB(section)</option>
      <option>Get from DB(section)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Button variant="link">Download The List Of Students To Bus</Button>	
            <Table striped bordered hover size="sm">
      <thead>
                            <tr>
                              <th>No.</th>
                              <th>Bus Registered Number</th>
                              <th>Bus Model Name</th>
                              <th>Class Name</th>
                              <th>Section Name</th>
                              <th>Student Name</th>
                              <th>StudentID</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>AP37CA6699</td>
                              <td>TATA school Bus</td>
                              <th>class2</th>
                              <th>B</th>
                              <th>Pawan</th>
                              <th>121045564</th>
                              
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Getfrom DB(Bus Registered Number)</td>
                              <td>Get from DB(Model Name)</td>
                              <td>Get from DB(Class Name)</td>
                              <td>Get from DB(Section Name)</td>
                              <td>Get from DB(Student Name)</td>
                              <td>Get from DB(StudentID)</td>

                            </tr>
                            <td>3</td>
                            <td>Getfrom DB(Bus Registered Number)</td>
                              <td>Get from DB(Model Name)</td>
                              <td>Get from DB(Class Name)</td>
                              <td>Get from DB(Section Name)</td>
                              <td>Get from DB(Student Name)</td>
                              <td>Get from DB(StudentID)</td>
                              
                            
                          </tbody>
</Table>
</Form>

</div>
		)
	}
}