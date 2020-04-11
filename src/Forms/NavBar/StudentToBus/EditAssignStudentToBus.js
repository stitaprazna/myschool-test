import React from "react"

import './editassignstudenttobus.css';
// --- This is the part to add

import { Form,FormControl,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class EditAssignStudentToBus extends React.Component {
	render() {
		return (
		<div id = "chai">
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select Bus</Form.Label>
                <Form.Control as="select">
                <option>Get from DB(Bus)</option>
                <option>Get from DB(Bus)</option>
                <option>Get from DB(Bus)</option>
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
                <Form inline>    
                <FormControl type="text" placeholder="Student,Bus,Class" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form>{' '}
     
<div>
  <Table responsive="sm">
    <thead>
      <tr>
      <th>No.</th>
      <th>Bus Registered Number</th>
      <th>Class Name</th>
      <th>Section Name</th>
      <th>Student Name</th>
      <th>Student_ID</th>
      <th>Edit Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>1</td>
      <td>AP37CA66999</td>
      <td>Class10</td>
      <td>A</td>
      <td>Siddu</td>
      <td>1210411426</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
        
      </tr>
      <tr>
      <td>2</td>
      <td>GetfromDB(BusReg.Num)</td>
      <td>GetfromDB(ClassName)</td>
      <td>GetfromDB(Section Name)</td>
      <td>GetfromDB(Student Name)</td>
      <td>GetfromDB(Student_ID)</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
        
      </tr>
      <tr>
      <td>3</td>
      <td>GetfromDB(BusReg.Num)</td>
      <td>GetfromDB(ClassName)</td>
      <td>GetfromDB(Section Name)</td>
      <td>GetfromDB(Student Name)</td>
      <td>GetfromDB(Student_ID)</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
      </tr>
    </tbody>
  </Table>
  <Table responsive="md">
    <thead>
      <tr>
        <th>No.</th>
        <th>Bus Registered Number</th>
      <th>Class Name</th>
      <th>Section Name</th>
      <th>Student Name</th>
      <th>Student_ID</th> 
      <th>Edit Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>1</td>
      <td>AP37DE0909</td>
      <td>Class9</td>
      <td>B</td>
      <td>Chaitanya</td>
      <td>1210411320</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
        
      </tr>
      
      <tr>
      <td>2</td>
      <td>GetfromDB(BusReg.Num)</td>
      <td>GetfromDB(ClassName)</td>
      <td>GetfromDB(Section Name)</td>
      <td>GetfromDB(Student Name)</td>
      <td>GetfromDB(Student_ID)</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>   
      </tr>
      <tr>
      <td>3</td>
      <td>GetfromDB(BusReg.Num)</td>
      <td>GetfromDB(ClassName)</td>
      <td>GetfromDB(Section Name)</td>
      <td>GetfromDB(Student Name)</td>
      <td>GetfromDB(Student_ID)</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
        
      </tr>
    </tbody>
  </Table>
  
 
  
</div>
      
</div>
		)
	}
}