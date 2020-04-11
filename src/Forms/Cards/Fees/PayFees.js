import React from "react"

import './payfees.css';
// --- This is the part to add

import { Form,Button,Accordion,Card,InputGroup,FormControl, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class PayFees extends React.Component {
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

            <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Next
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">

                <div>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Radio aria-label="Radio button for following text input" />
                  </InputGroup.Prepend>
                    <FormControl aria-label="DisplayDueAmount" />
                </InputGroup>
                </div>

                    <Form.Label>FeesAmount</Form.Label>
                    <Form.Control type="FeesAmount" placeholder="Display Amount here" />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="Last Name" placeholder="LastName" />

                    <Form.Group controlId="exampleForm.ControlSelect4">
                    <Form.Label>Select Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group> 
                  </Form.Group>
                  <Form.Label>D.O.B</Form.Label>
                    <Form.Control type="D.O.B" placeholder="D.O.B" />
                    <Form.Label>StudentID</Form.Label>
                    <Form.Control type="StudentID" placeholder="EX : 1210411426" />
                    <Form.Label>Parent/Gaurdian Name</Form.Label>
                    <Form.Control type="Parent/Guardian Name" placeholder="Parent/Guardain Name" />
                    <Form.Label>Parent/Gaurdian Mobile Number</Form.Label>
                    <Form.Control type="Parent/Guardian MobileNumber" placeholder="Parent/Guardian Mobile Number" />
                    <Form.Label>e-mail</Form.Label>
                    <Form.Control type="e-mail" placeholder="nam@xyz.com(optional)" />
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="Address Line1" placeholder="Address Line1" />
                    <Form.Control type="Address Line2" placeholder="Address Line2" />
                    <Form.Control type="LandMark" placeholder="LandMark" />

                  <Form.Group controlId="exampleForm.ControlSelect4">
                    <Form.Label>Select State</Form.Label>
                    <Form.Control as="select">
                      <option>Get from DB(State)</option>
                      <option>Get from DB(State)</option>
                      <option>Get from DB(State)</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  
                  <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="City" placeholder="Ex : Eluru" />
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control type="Pincode" placeholder="Ex : 534001" />
                  <div className="mb-3">
                      <Form.File id="formcheck-api-regular">
                        <Form.File.Label>Add Image</Form.File.Label>
                        <Form.File.Input />
                      </Form.File>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect5">
                    <Form.Label>Is Transport Needed?</Form.Label>
                    <Form.Control as="select">
                      <option>Yes</option>
                      <option>NO</option>
                    </Form.Control>
                  </Form.Group> 
                  <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>If selected Yes</Form.Label>
                    <Form.Label>Enter DroppingPoint Details</Form.Label>
                    <Form.Control type="DroppingPoint" placeholder="Ex : Jutemill" />
                  </Form.Group>
                  
      
      <Button variant="dark">Submit</Button>
      </Form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>


  
  
</Form>
      
</div>
		)
	}
}