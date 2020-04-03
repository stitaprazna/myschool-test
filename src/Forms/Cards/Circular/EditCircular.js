import React from "react"

import './editcircular.css';
// --- This is the part to add

import { Form,FormControl,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class EditCircular extends React.Component {
	render() {
		return (
		<div id = "chai">
     <Form>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th>Date</th>
      <th>CircularDetails</th>
      <th>EditDetails</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Circular Date</td>
      <td>GetfromDB(Circular)</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Circular Date</td>
      <td>GetfromDB(Circular)</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
      <td>3</td>
      <td>Circular Date</td>
      <td>GetfromDB(Circular)</td>
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