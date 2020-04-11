import React from "react"

import './addclass.css';
// --- This is the part to add

import { Form,Button,Accordion,Card, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddClass extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Class Name</Form.Label>
    <Form.Control type="Name" placeholder="Example : Nursery, Class 2" />

			<Accordion>
				<Card>
					<Card.Header>
					<Accordion.Toggle as={Button} variant="link" eventKey="0">
						Add Section 
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

	<Button variant="link">Add Another Class Name</Button>{' '}
	<Button variant="dark">Save</Button>
  </Form.Group>
  
</Form>

</div>
		)
	}
}