import React from "react"

import './listofclasses.css';
// --- This is the part to add

import { Form,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class listofclasses extends React.Component {
	render() {
		return (
		<div id = "chai">

      
<Form>
<Button variant="link">Download The List Of Classes</Button>
			<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th>Class Name</th>
      <th>Section Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>GetfromDB(Class Name)</td>
      <td>Get fromDB(Section Name)</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>GetfromDB(Class Name)</td>
      <td>GetfromDB(Section Name)</td>
      
    </tr>
    <td>2</td>
      <td>GetfromDB(Class Name)</td>
      <td>GetfromDB(Section Name)</td>
    
  </tbody>
</Table>
</Form>

</div>
		)
	}
}