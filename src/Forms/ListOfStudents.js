import React from "react"

import './listofstudents.css';
// --- This is the part to add

import { Form,Button,Table,Tabs,Tab,Figure, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class listofstudents extends React.Component {
	render() {
		return (
		<div id = "chai">
            
            <Form>
            <Tabs defaultActiveKey="Home" transition={false} id="noanim-tab-example">
                <Tab eventKey="List" title="List">
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
            <Button variant="link">Download The List Of Students</Button>
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
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Female</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Male</td>
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
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Female</td>      
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Gender</td>                               
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
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Female</td>   
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GetfromDB(class)</td>
                            <td>GetfromDB(Section)</td>
                            <td>GetfromDB(StudentName)</td>
                            <td>Student_ID</td>
                            <td>Gender</td>                              
                        </tr>
                        </tbody>
                    </Table>
                    
                    </div>
            </Form>
                            </Tab>
                            <Tab eventKey="profiles" title="Profiles">
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
                            <Button variant="link">Download The List with profiles</Button>
                            
                            <Figure>
                              <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="holder.js/171x180"
                              />
                              <Figure.Caption>
                                Class Name :
                                Section A :
                                Name : FirstName + LastName
                                Gender :
                                Parent/Gaurdian Name : 
                                Parent/Gaurdian Mobile Number : 
                                e-mail :
                                Address :
                                LandMark :
                                Transport : 
                              </Figure.Caption>
                            </Figure>

                            <Figure>
                              <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="holder.js/171x180"
                              />
                              <Figure.Caption>
                              Class Name :
                                Section A :
                                Name : FirstName + LastName
                                Gender
                                Parent/Gaurdian Name : 
                                Parent/Gaurdian Mobile Number : 
                                e-mail :
                                Address :
                                LandMark :
                                Transport : 
                              </Figure.Caption>
                            </Figure>
                                
                            </Tab>
                            
                            </Tabs>
                            


            </Form>



</div>
		)
	}
}
