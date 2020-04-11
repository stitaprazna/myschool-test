import React from "react";

import NavBar_Ext from './Forms/NavBar_Ext';

import AddSubject from './Forms/NavBar/Subject/AddSubject';
import EditSubject from './Forms/NavBar/Subject/EditSubject';
import ListOfSubjects from './Forms/NavBar/Subject/ListOfSubjects';

import AddClass from './Forms/NavBar/Class/AddClass';
import AddSection from './Forms/NavBar/Class/AddSection';
import EditClass from './Forms/NavBar/Class/EditClass';
import ListOfClasses from './Forms/NavBar/Class/ListOfClasses';

import AddTeacher from './Forms/NavBar/Teacher/AddTeacher';
import EditTeacher from './Forms/NavBar/Teacher/EditTeacher';
import AssignClassTeacher from './Forms/NavBar/Teacher/AssignClassTeacher';
import ListOfTeachers from './Forms/NavBar/Teacher/ListOfTeachers';

import AddStudent from './Forms/NavBar/Student/AddStudent';
import EditStudent from './Forms/NavBar/Student/EditStudent';
import ListOfStudents from './Forms/NavBar/Student/ListOfStudents';

import AddDriver from './Forms/NavBar/Driver/AddDriver';
import EditDriver from './Forms/NavBar/Driver/EditDriver';
import ListOfDrivers from './Forms/NavBar/Driver/ListOfDrivers';

import AddBus from './Forms/NavBar/Bus/AddBus';
import EditBus from './Forms/NavBar/Bus/EditBus';
import ListOfBus from './Forms/NavBar/Bus/ListOfBus';

import AssignDriverToBus from './Forms/NavBar/DriverToBus/AssignDriverToBus';
import EditAssignDriverToBus from './Forms/NavBar/DriverToBus/EditAssignDriverToBus';
import ListOfDriversToBus from './Forms/NavBar/DriverToBus/ListOfDriversToBus'; 

import AssignStudentToBus from './Forms/NavBar/StudentToBus/AssignStudentToBus';
import EditAssignStudentToBus from './Forms/NavBar/StudentToBus/EditAssignStudentToBus';
import ListOfStudentsToBus from './Forms/NavBar/StudentToBus/ListOfStudentsToBus'; 

import AddEmployee from './Forms/NavBar/Employee/AddEmployee';
import EditEmployee from './Forms/NavBar/Employee/EditEmployee';
import ListOfEmployees from './Forms/NavBar/Employee/ListOfEmployees';


// --- Cards
import Cards_Ext from './Forms/Cards_Ext';
 
import TakeTeacherAttendance from './Forms/Cards/Teacher/TakeTeacherAttendance';
import EditTeacherAttendance from './Forms/Cards/Teacher/EditTeacherAttendance';
import TeacherProfile from './Forms/Cards/Teacher/TeacherProfile';

import WriteCircular from './Forms/Cards/Circular/WriteCircular';
import EditCircular from './Forms/Cards/Circular/EditCircular';

import ViewStudentAttendance from './Forms/Cards/StudentAttendance/ViewStudentAttendance';
import StudentAbsenteesList from './Forms/Cards/StudentAttendance/StudentAbsenteesList';

import UploadStudyMaterial from './Forms/Cards/StudyMaterial/UploadStudyMaterial';
import EditStudyMaterial from './Forms/Cards/StudyMaterial/EditStudyMaterial';

import UploadModelQuestionPapers from './Forms/Cards/ModelQuestionPapers/UploadModelQuestionPapers';


import UploadMedia from './Forms/Cards/Media/UploadMedia';
import EditMedia from './Forms/Cards/Media/EditMedia';
import EditMediaEdit from './Forms/Cards/Media/EditMediaEdit';
import EditMediaDelete from './Forms/Cards/Media/EditMediaDelete';

import PayFees from './Forms/Cards/Fees/PayFees';

import CreateEvents from './Forms/Cards/Events/CreateEvents';

import { Route, RouteHandler, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
// --- This is the part to add


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

      <Router>     
      <Cards_Ext />
        <Switch>
          <Route path="/taketeacherattendance" component={TakeTeacherAttendance} />
          <Route path="/editteacherattendance" component={EditTeacherAttendance} />
          <Route path="/teacherprofile" component={TeacherProfile} />

          <Route path="/writecircular" component={WriteCircular} />
          <Route path="/editcircular" component={EditCircular} />

          <Route path="/viewstudentattendance" component={ViewStudentAttendance} />
          <Route path="/studentabsenteeslist" component={StudentAbsenteesList} />

          <Route path="/uploadstudymaterial" component={UploadStudyMaterial} />
          <Route path="/editstudymaterial" component={EditStudyMaterial} />

          <Route path="/uploadmodelquestionpapers" component={UploadModelQuestionPapers} />

          <Route path="/uploadmedia" component={UploadMedia} />
          <Route path="/editmedia" component={EditMedia} />
          <Route path="/editmediaedit" component={EditMediaEdit} />
          <Route path="/editmediadelete" component={EditMediaDelete} />

          <Route path="/createevents" component={CreateEvents} />


          <Route path="/payfees" component={PayFees} />
        </Switch>
       </Router> 



      
      
</div>

     
        


		)
	}
}

export default App;