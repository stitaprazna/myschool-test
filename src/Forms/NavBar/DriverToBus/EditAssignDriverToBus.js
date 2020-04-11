import React from "react"

import './editassigndrivertobus.css';
// --- This is the part to add

import { Form,FormControl,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class EditBus extends React.Component {
	render() {
		return (
		<div id = "chai">
      
    <Form inline>
      <FormControl type="text" placeholder="BusRegNo. or Name" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>{' '}
  

     <Form>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th>Bus Details</th>
      <th>Driver Details</th>
      <th>Edit Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>GetfromDB(BusReg.Num+Name)</td>
      <td>GetfromDB(DriverName+EmployeeID)</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>GetfromDB(BusReg.Num+Name)</td>
      <td>GetfromDB(DriverName+EmployeeID)</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
    <td>2</td>
    <td>GetfromDB(BusReg.Num+Name)</td>
      <td>GetfromDB(DriverName+EmployeeID)</td>
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