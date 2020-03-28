import React from "react"
import AddSubject from './Forms/AddSubject';
import AddClass from './Forms/AddClass';
import { Route, RouteHandler, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
// --- This is the part to add
import NavBar_Ext from './Forms/NavBar_Ext'
import { Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Amplify from "aws-amplify"
import config from "./aws-exports"
import { withAuthenticator } from "aws-amplify-react"

Amplify.configure(config)


class App extends React.Component {

  
	render() {
		return (
	
    <div>
      <Router>
      <NavBar_Ext />
        <Switch>
          <Route path="/addclass" component={AddClass} />
          <Route path="/addsubject" component={AddSubject} />
        </Switch>
      </Router>
      
      
</div>





		)
	}
}

export default withAuthenticator(App, true)