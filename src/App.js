import React from "react"
import AddSubject from './Forms/AddSubject';
import AddClass from './Forms/AddClass';
import AddSection from './Forms/AddSection';
import AddTeacher from './Forms/AddTeacher';
import AssignClassTeacher from './Forms/AssignClassTeacher';
import AddStudent from './Forms/AddStudent';
import AddDriver from './Forms/AddDriver';
import AddBus from './Forms/AddBus';
import AssignDriverToBus from './Forms/AssignDriverToBus';
import AssignStudentToBus from './Forms/AssignStudentToBus';
import AddStaff from './Forms/AddStaff';
import { Route, RouteHandler, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
// --- This is the part to add
import NavBar_Ext from './Forms/NavBar_Ext'
import { Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {

  
	render() {
		return (
	
    <div>
      <Router>
      <NavBar_Ext />
        <Switch>
          <Route path="/addclass" component={AddClass} />
          <Route path="/addsubject" component={AddSubject} />
          <Route path="/addsection" component={AddSection} />
          <Route path="/addteacher" component={AddTeacher} />
          <Route path="/assignclassteacher" component={AssignClassTeacher} />
          <Route path="/addstudent" component={AddStudent} />
          <Route path="/adddriver" component={AddDriver} />
          <Route path="/addbus" component={AddBus} />
          <Route path="/assigndrivertobus" component={AssignDriverToBus} />
          <Route path="/assignstudenttobus" component={AssignStudentToBus} />
          <Route path="/addstaff" component={AddStaff} />
        </Switch>
      </Router>
      
      
</div>





		)
	}
}

export default App;