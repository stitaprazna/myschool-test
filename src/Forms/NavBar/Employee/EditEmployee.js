import React from "react"

import './editemployee.css';
// --- This is the part to add

import { Form,FormControl,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class EditStaff extends React.Component {
	render() {
		return (
		<div id = "chai">
      
    <Form inline>
      <FormControl type="text" placeholder="EmployeeName" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>{' '}
  

     <Form>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th>EmployeeName</th>
      <th>Employee-ID</th>
      <th>Employee Role</th>
      
      <th>Edit Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>GetfromDB(EmployeeName(F+L Name))</td>
      <td>Employee_ID</td>
      <td>Employee Role</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>GetfromDB(EmployeeName(F+L Name))</td>
      <td>Employee_ID</td>
      <td>Employee Role</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
    <td>3</td>
    <td>GetfromDB(EmployeeName(F+L Name))</td>
      <td>Employee_ID</td>
      <td>Employee Role</td>
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
      