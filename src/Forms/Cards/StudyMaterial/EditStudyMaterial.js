import React from "react"

import './editstudymaterial.css';
// --- This is the part to add

import { Form,FormControl,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class EditStudyMaterial extends React.Component {
	render() {
		return (
		<div id = "chai">
      
    <Form inline>
      <FormControl type="text" placeholder="Title Name" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>{' '}
  

     <Form>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th>Date</th>
      <th>Subject Name</th>
      <th>Title</th>
      <th>StudyMaterial</th>
      <th>EditDetails</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>GetfromDB(Todays Date)</td>
      <td>Physics</td>
      <td>Title</td>
      <td>StudyMaterialFile</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>GetfromDB(Todays Date)</td>
      <td>GetFRomDB(Subjects)</td>
      <td>Title</td>
      <td>StudyMaterialFile</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
    </tr>
      <td>3</td>
      <td>GetfromDB(Todays Date)</td>
      <td>GetFRomDB(Subjects)</td>
      <td>Title</td>
      <td>StudyMaterialFile</td>
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