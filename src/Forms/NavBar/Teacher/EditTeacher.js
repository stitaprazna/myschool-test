import React from "react"

import './editteacher.css';
// --- This is the part to add

import { Form,FormControl,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class EditTeacher extends React.Component {
	render() {
		return (
		<div id = "chai">
      
    <Form inline>
      <FormControl type="text" placeholder="TeacherName" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>{' '}
  

     <Form>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th>TeacherName</th>
      <th>Employee-ID</th>
      <th>Edit Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>GetfromDB(TeacherName(F+L Name))</td>
      <td>Employee_ID</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>GetfromDB(TeacherName(F+L Name))</td>
      <td>Employee_ID</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
    <td>2</td>
      <td>GetfromDB(TeacherName(F+L Name))</td>
      <td>Employee_ID</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    
  </tbody>
</Table>
</Form>
      
</div>
		)
	}
}
      