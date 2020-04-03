import React from "react"

import './teacherprofile.css';
// --- This is the part to add

import { Form,FormControl,Button,Table,Card,Accordion, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class TeacherProfile extends React.Component {
	render() {
		return (
		<div id = "chai">
      
    <Form inline>
      <FormControl type="text" placeholder="TeacherName" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>{' '}
  

     <Form>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th>TeacherName</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>
       <Accordion>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            GetfromDB(TeacherName(F+L Name)) + Employee_ID
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            <Form>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Month</th>
                    <th>TeacherName</th>
                    <th>Employee-ID</th>
                    <th>No. Of Working Days</th>
                    <th>No. Of Days Present</th>
                    <th>No. Of Days Absent</th>
                    <th>Monthly Attendance Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Get from DB(Month)</td>
                    <td>GetfromDB(TeacherName(F+L Name))</td>
                    <td>Get From DB(Employee_ID)</td>
                    <td>Get from DB(Working Days in Month)</td>
                    <td>Get from DB(Presents)</td>
                    <td>Get from DB(Absents)</td>
                    <td>Calculate</td>

                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Get from DB(Month)</td>
                    <td>GetfromDB(TeacherName(F+L Name))</td>
                    <td>Get From DB(Employee_ID)</td>
                    <td>Get from DB(Working Days in Month)</td>
                    <td>Get from DB(Presents)</td>
                    <td>Get from DB(Absents)</td>
                    <td>Calculate</td>
                    </tr>
                    <td>3</td>
                    <td>Get from DB(Month)</td>
                    <td>GetfromDB(TeacherName(F+L Name))</td>
                    <td>Get From DB(Employee_ID)</td>
                    <td>Get from DB(Working Days in Month)</td>
                    <td>Get from DB(Presents)</td>
                    <td>Get from DB(Absents)</td>
                    <td>Calculate</td>
                    
                                </tbody>
                                </Table>
                            </Form>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>
                    <Button variant="link">GetfromDB(TeacherName(F+L Name))</Button>
                    </td>

                    </tr>
                    <td>3</td>
                    <td>
                    <Button variant="link">GetfromDB(TeacherName(F+L Name))</Button>
                    </td>          
                </tbody>
                </Table>
                </Form>
      
</div>
		)
	}
}