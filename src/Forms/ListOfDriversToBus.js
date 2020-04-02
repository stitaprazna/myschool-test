import React from "react"

import './listofdriverstobus.css';
// --- This is the part to add

import { Form,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class listofdriverstobus extends React.Component {
	render() {
		return (
		<div id = "chai">

      
<Form>
<Button variant="link">Download The List Of Drivers To Bus</Button>
			<Table striped bordered hover size="sm">
      <thead>
                            <tr>
                              <th>No.</th>
                              <th>Bus Registered Number</th>
                              <th>Bus Model Name</th>
                              <th>Driver Name</th>
                              <th>EmployeeID</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>AP37CA6699</td>
                              <td>TATA school Bus</td>
                              <th>Rajnikanth</th>
                              <th>Raj129</th>
                              
                              
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Getfrom DB(Bus Registered Number)</td>
                              <td>Get from DB(Model Name)</td>
                              <td>Get from DB(Driver Name)</td>
                              <td>Get from DB(EmployeeID)</td>

                            </tr>
                            <td>3</td>
                            <td>Getfrom DB(Bus Registered Number)</td>
                              <td>Get from DB(Model Name)</td>
                              <td>Get from DB(Driver Name)</td>
                              <td>Get from DB(EmployeeID)</td>
                              
                            
                          </tbody>
</Table>
</Form>

</div>
		)
	}
}