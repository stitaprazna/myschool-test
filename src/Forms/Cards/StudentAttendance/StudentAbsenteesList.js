import React from "react"

import './studentabsenteeslist.css';
// --- This is the part to add

import { Form,Button,Table,Tabs,Tab,Figure,Badge, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class StudentAbsenteesList extends React.Component {
	render() {
		return (
		<div id = "chai">

          <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select Class</Form.Label>
                <Form.Control as="select">
                <option>Get from DB(class)</option>
                <option>Get from DB(class)</option>
                <option>Get from DB(class)</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Select Section</Form.Label>
                <Form.Control as="select">
                <option>Get from DB(section)</option>
                <option>Get from DB(section)</option>
                <option>Get from DB(section)</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Button variant="link">Download The List</Button>
                  <div>
                    <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>No.</th>
                        <th>Class Name</th>
                        <th>Section Name</th>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Gender</th>
                        <th>Parent Name</th>
                        <th>Parent Number</th>
                        <th>Attendance Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Class l</td>
                            <td>A</td>
                            <td>Chaitanya</td>
                            <td>20123325</td>
                            <td>Male</td>
                            <td>Parent</td>
                            <td>9394952999</td>
                            <td>
                            <Badge variant="danger">Absent</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Female</td>
                            <td>Parent</td>
                            <td>9999999999</td>
                            <td>
                            <Badge variant="danger">Absent</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Male</td>
                            <td>Parent</td>
                            <td>9999999999</td>
                            <td>
                            <Badge variant="danger">Absent</Badge>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    <Table responsive="md">
                        <thead>
                        <tr>
                            <th>No.</th>
                        <th>Class Name</th>
                        <th>Section Name</th>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Gender</th>
                        <th>Parent Name</th>
                        <th>Parent Number</th>
                        <th>Attendance Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Class 2</td>
                            <td>A</td>
                            <td>Siddu</td>
                            <td>20122326</td>
                            <td>Male</td>
                            <td>RamPrasad</td>
                            <td>9246666999</td>
                            <td>
                            <Badge variant="danger">Absent</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Female</td>
                            <td>Parent</td>
                            <td>GetfromDB(MobileNumber)</td>  
                            <td>
                            <Badge variant="danger">Absent</Badge>
                            </td>    
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Gender</td>
                            <td>Parent</td>
                            <td>GetFromDB(MobileNumber)</td>
                            <td>
                            <Badge variant="danger">Absent</Badge>
                            </td>                               
                        </tr>
                        </tbody>
                    </Table>
                    <Table responsive="lg">
                        <thead>
                        <tr>
                            <th>No.</th>
                        <th>Class Name</th>
                        <th>Section Name</th>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Gender</th> 
                        <th>Parent Name</th>
                        <th>Parent Number</th>
                        <th>Attendance Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Class 3</td>
                            <td>A</td>
                            <td>Sahithi</td>
                            <td>20122327</td>
                            <td>Female</td> 
                            <td>ParentName</td>
                            <td>GetFromDB(MobileNumber)</td> 
                            <td>
                            <Badge variant="danger">Absent</Badge>
                            </td>                         
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Female</td>
                            <td>ParentName</td>
                            <td>GetFromDB(MobileNumber)</td>
                            <td>
                            <Badge variant="danger">Absent</Badge>
                            </td>   
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Get Gender</td>  
                            <td>ParentName</td>
                            <td>GetFromDB(MobileNumber)</td> 
                            <td>
                            <Badge variant="danger">Absent</Badge>
                            </td>                           
                        </tr>
                        </tbody>
                    </Table>
                    
                    </div>
            </Form>

            </div>
		)
	}
}