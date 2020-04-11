import React from "react"

import './editmediadelete.css';
// --- This is the part to add
import { LinkContainer } from 'react-router-bootstrap';
import { Form,FormControl,Button,Table,Alert,Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class EditMediaDelete extends React.Component {
	render() {
		return (
		<div id = "chai">
            

                <Alert variant="">
                <Alert.Heading>Delete Warning</Alert.Heading>
                <p>
                The Process Cannot Be Undone
                </p>
                <hr />
                <p className="mb-0">
                Are you Sure You Want To Delete It?  
                </p>
                <Button variant="outline-danger">Yes</Button>{' '} <Button variant="outline-primary">No</Button>{' '}
            
                </Alert>


</div>
		)
	}
}