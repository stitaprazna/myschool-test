import React from "react";

import AddSubject from './Forms/AddSubject';
import EditSubject from './Forms/EditSubject';
import ListOfSubjects from './Forms/ListOfSubjects';

import AddClass from './Forms/AddClass';
import AddSection from './Forms/AddSection';
import EditClass from './Forms/EditClass';
import ListOfClasses from './Forms/ListOfClasses';

import AddTeacher from './Forms/AddTeacher';
import EditTeacher from './Forms/EditTeacher';
import AssignClassTeacher from './Forms/AssignClassTeacher';
import ListOfTeachers from './Forms/ListOfTeachers';

import AddStudent from './Forms/AddStudent';
import EditStudent from './Forms/EditStudent';
import ListOfStudents from './Forms/ListOfStudents';

import AddDriver from './Forms/AddDriver';
import EditDriver from './Forms/EditDriver';
import ListOfDrivers from './Forms/ListOfDrivers';

import AddBus from './Forms/AddBus';
import EditBus from './Forms/EditBus';
import ListOfBus from './Forms/ListOfBus';

import AssignDriverToBus from './Forms/AssignDriverToBus';
import EditAssignDriverToBus from './Forms/EditAssignDriverToBus';
import ListOfDriversToBus from './Forms/ListOfDriversToBus'; 

import AssignStudentToBus from './Forms/AssignStudentToBus';
import EditAssignStudentToBus from './Forms/EditAssignStudentToBus';
import ListOfStudentsToBus from './Forms/ListOfStudentsToBus'; 

import AddEmployee from './Forms/AddEmployee';
import EditEmployee from './Forms/EditEmployee';
import ListOfEmployees from './Forms/ListOfEmployees';

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

          <Route path="/addsubject" component={AddSubject} />
          <Route path="/editsubject" component={EditSubject} />
          <Route path="/listofsubjects" component={ListOfSubjects} />

          <Route path="/addclass" component={AddClass} />
          <Route path="/addsection" component={AddSection} />
          <Route path="/editclass" component={EditClass} />
          <Route path="/listofclasses" component={ListOfClasses} />

          <Route path="/addteacher" component={AddTeacher} />
          <Route path="/editteacher" component={EditTeacher} />
          <Route path="/assignclassteacher" component={AssignClassTeacher} />
          <Route path="/listofteachers" component={ListOfTeachers} />

          <Route path="/addstudent" component={AddStudent} />
          <Route path="/editstudent" component={EditStudent} />
          <Route path="/listofstudents" component={ListOfStudents} />

          <Route path="/adddriver" component={AddDriver} />
          <Route path="/editdriver" component={EditDriver} />
          <Route path="/listofdrivers" component={ListOfDrivers} />

          <Route path="/addbus" component={AddBus} />
          <Route path="/editbus" component={EditBus} />
          <Route path="/listofbus" component={ListOfBus} />


          <Route path="/assigndrivertobus" component={AssignDriverToBus} />
          <Route path="/editassigndrivertobus" component={EditAssignDriverToBus} />
          <Route path="/listofdriverstobus" component={ListOfDriversToBus} />

          <Route path="/assignstudenttobus" component={AssignStudentToBus} />
          <Route path="/editassignstudenttobus" component={EditAssignStudentToBus} />
          <Route path="/listofstudentstobus" component={ListOfStudentsToBus} />

          <Route path="/addemployee" component={AddEmployee} />
          <Route path="/editemployee" component={EditEmployee} />
          <Route path="/listofemployees" component={ListOfEmployees} />
        </Switch>
      </Router>
      
      
</div>





		)
	}
}

export default App;