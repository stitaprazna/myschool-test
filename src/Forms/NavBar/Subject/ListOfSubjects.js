import React from "react"

import './listofsubjects.css';
// --- This is the part to add

import { Form,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class ListOfSubjects extends React.Component {
	render() {
		return (
		<div id = "chai">

      
<Form>
<Button variant="link">Download The List Of Subjects</Button>
			<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th>Subject Name</th>
      <th>Subject Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>GetfromDB(Subject Name)</td>
      <td>Get fromDB(Subject Code)</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>GetfromDB(Subject Name)</td>
      <td>GetfromDB(Subject Code)</td>
      
    </tr>
    <td>2</td>
      <td>GetfromDB(Subject Name)</td>
      <td>GetfromDB(Subject Code)</td>
    
  </tbody>
</Table>
</Form>

</div>
		)
	}
}