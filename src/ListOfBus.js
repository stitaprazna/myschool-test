import React from "react"

import './listofbus.css';
// --- This is the part to add

import { Form,Button,Table,Tabs,Tab,Figure, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class listofbus extends React.Component {
	render() {
		return (
		<div id = "chai">
            <Form>
            <Tabs defaultActiveKey="Home" transition={false} id="noanim-tab-example">
                <Tab eventKey="List" title="List">
                <Form>
                  <Button variant="link">Download The List Of bus</Button>
                      <Table striped bordered hover size="sm">
                          <thead>
                            <tr>
                              <th>No.</th>
                              <th>Bus Registered Number</th>
                              <th>Bus Model Name</th>
                              <th>Seating Capacity</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>AP37CA6699</td>
                              <td>TATA school Bus</td>
                              <th>40</th>
                              
                              
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Getfrom DB(Bus Registered Number)</td>
                              <td>Get from DB(Model Name)</td>
                              <td>Get from DB(Seating Capacity)</td>
                              
                              
                            </tr>
                            <td>3</td>
                            <td>Getfrom DB(Bus Registered Number)</td>
                              <td>Get from DB(Model Name)</td>
                              <td>Get from DB(Seating Capacity)</td>
                              
                            
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
                                Bus Registered Number : 
                                Bus Modle Name : 
                                Licence Number :
                                Mobile Number : 
                                Address :                                  
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
                                Bus Registered Number : 
                                Bus Modle Name : 
                                Licence Number :
                                Mobile Number : 
                                Address :                               
                              </Figure.Caption>
                            </Figure>
                                
                            </Tab>
                            
                            </Tabs>
                            


            </Form>



</div>
		)
	}
}