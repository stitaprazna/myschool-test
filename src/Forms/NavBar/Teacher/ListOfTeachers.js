import React from "react"

import './listofteachers.css';
// --- This is the part to add

import { Form,Button,Table,Tabs,Tab,Figure, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class listofteachers extends React.Component {
	render() {
		return (
		<div id = "chai">
            <Form>
            <Tabs defaultActiveKey="Home" transition={false} id="noanim-tab-example">
                <Tab eventKey="List" title="List">
                <Form>
                  <Button variant="link">Download The List Of Teachers</Button>
                      <Table striped bordered hover size="sm">
                          <thead>
                            <tr>
                              <th>No.</th>
                              <th>Teacher Name</th>
                              <th>EmployeeID</th>
                              <th>Subjects</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Getfrom DB(Teacher Name)</td>
                              <td>Get from DB(Employee_ID)</td>
                              <td>Get from DB(Subjects)</td>
                              
                              
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>GetfromDB(Teacher Name)</td>
                              <td>Get fromDB(Employee_ID)</td>
                              <td>Get from DB(Subjects)</td>
                              
                            </tr>
                            <td>3</td>
                              <td>GetfromDB(Teacher Name)</td>
                              <td>Get fromDB(Employee_ID)</td>
                              <td>Get from DB(Subjects)</td>
                            
                          </tbody>
                </Table>
            </Form>
                            </Tab>
                            <Tab eventKey="profiles" title="Profiles">
                            <Button variant="link">Download The List with profiles</Button>
                            
                            <Figure>
                              <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="holder.js/171x180"
                              />
                              <Figure.Caption>
                                Teacher Name : FirstName + LastName
                                Employee_ID : 
                                Subjects :
                                Gender :
                                Mobile Number : 
                                Address :  
                                Bio Of Teacher :                                
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
                              Teacher Name : FirstName + LastName
                                Employee_ID : 
                                Subjects :
                                Gender :
                                Mobile Number : 
                                Address :  
                                Bio Of Teacher :                                        
                              </Figure.Caption>
                            </Figure>
                                
                            </Tab>
                            
                            </Tabs>
                            


            </Form>



</div>
		)
	}
}
