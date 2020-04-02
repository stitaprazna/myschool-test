import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './addsection.css';
// --- This is the part to add

import { Form,Button,Card, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AddSection extends React.Component {
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
  
  </Form>

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
      <Form.Label>Enter Section Names In This Class</Form.Label>
      <Form.Control type="Name" placeholder="Example : A" />
      </Form.Group>
      <Button variant="link">Add Another Section Name</Button>
      <Button variant="dark">Submit</Button>
      </Form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>

</div>
		)
	}
}
  

