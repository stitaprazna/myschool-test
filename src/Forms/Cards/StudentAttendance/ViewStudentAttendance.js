import React from "react"

import './viewstudentattendance.css';
// --- This is the part to add

import { Form,Button,Table,Tabs,Tab,Figure,FormControl,Badge, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class viewtsudentattendance extends React.Component {
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

            <Form inline>
                <FormControl type="text" placeholder="StudentName,StudentID" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form>

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
                            <td>
                            <Badge variant="success">Present</Badge>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Female</td>
                            <td>GetStatus</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Male</td>
                            <td>GetStatus</td>
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
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Female</td>  
                            <td>
                            <Badge variant="success">Present</Badge>{' '}
                            </td>    
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Gender</td>
                            <td>GetStatus</td>                               
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
                            <td>
                            <td>
                            <Badge variant="success">Present</Badge>
                            </td>
                                </td>   
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Get Gender</td>   
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