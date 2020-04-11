import React from "react"

import './editmedia.css';
// --- This is the part to add
import { LinkContainer } from 'react-router-bootstrap';
import { Form,FormControl,Button,Table, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class EditMedia extends React.Component {
	render() {
		return (
		<div id = "chai">
      
    <Form inline>
      <FormControl type="text" placeholder="Title Name" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>{' '}
  

     <Form>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th>Date</th>
      <th>Title</th>
      <th>MediaFile</th>
      <th>EditDetails</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>GetfromDB(UploadedDate)</td>
      <td>Title</td>
      <td>MediaFile</td>
      <td>   
      <LinkContainer to="/editmediaedit" activeClassName="active">
      <Button variant="link">Edit</Button>
      </LinkContainer>
      </td>
      <td>   
      <LinkContainer to="/editmediadelete" activeClassName="active">
      <Button variant="link">Edit</Button>
      </LinkContainer>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>GetfromDB(UploadedDate)</td>
      <td>Title</td>
      <td>MediaFile</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
      <LinkContainer to="/editmediadelete" activeClassName="active">
      <Button variant="link">Delete</Button>
      </LinkContainer>
    </tr>
      <td>3</td>
      <td>GetfromDB(UploadedDate)</td>
      <td>Title</td>
      <td>MediaFile</td>
      <td>
      <Button variant="link">Edit</Button>
      </td>
      <LinkContainer to="/editmediadelete" activeClassName="active">
      <Button variant="link">Delete</Button>
      </LinkContainer>
  </tbody>
</Table>
</Form>
      
</div>
		)
	}
}