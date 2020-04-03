import React from "react"
import { Route, RouteHandler, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
// --- This is the part to add

import { Form,Button,Card,Container,Row,Col, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Cards_Ext extends React.Component {
	render() {
		return (
            <>
            <div>

        <Container>
              <Row>
                <Col>
                <Card border="secondary" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="images/Teacher" />
                    <Card.Body>
                      <Card.Title>Teacher </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Attendance And Profile</Card.Subtitle>
                      <Card.Text>
                        You can Take daily attenance of the teacher here  and Check their profiles of  
                        working days and  complaints
                      </Card.Text>
                      <LinkContainer to="/taketeacherattendance" activeClassName="active">
                      <Card.Link href="#">Take Attendance</Card.Link>
                      </LinkContainer>
                      <LinkContainer to="/editteacherattendance" activeClassName="active">
                      <Card.Link href="#">Edit</Card.Link>
                      </LinkContainer>
                      <LinkContainer to="/teacherprofile" activeClassName="active">
                      <Card.Link href="#">Profile</Card.Link>
                      </LinkContainer>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card border="secondary" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="images/Teacher" />
                    <Card.Body>
                      <Card.Title>Student Attendance</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Attendance And Profile</Card.Subtitle>
                      <Card.Text>
                        classwise attendance of students can be viewed here
                      </Card.Text>
                      <LinkContainer to="/viewstudentattendance" activeClassName="active">
                      <Card.Link href="#">View Attendance</Card.Link>
                      </LinkContainer>
                      <LinkContainer to="/studentabsenteeslist" activeClassName="active">
                      <Card.Link href="#">Absentees List</Card.Link>
                      </LinkContainer>
                    </Card.Body>
                </Card>
                </Col>
                <Col> 
                <Card border="warning" style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Fees </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Pay Fees And List</Card.Subtitle>
                      <Card.Text>
                        Pay fees here and check the fees due list
                      </Card.Text>
                      <LinkContainer to="/createfees" activeClassName="active">
                      <Card.Link href="#">CreateFees</Card.Link>
                      </LinkContainer>
                      <LinkContainer to="/payfees" activeClassName="active">
                      <Card.Link href="#">PayFees</Card.Link>
                      </LinkContainer>
                      <LinkContainer to="/attendanceduelist" activeClassName="active">
                      <Card.Link href="#">DueList</Card.Link>
                      </LinkContainer>
                    </Card.Body>
                 </Card>                 
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Circular</Card.Title>
                      <Card.Text>
                        Write Circular to students,teachers,employees,   parents.This will be sent as a push 
                        notifications to their mobiles and as well as a notification in their app
                      </Card.Text>
                      <LinkContainer to="/writecircular" activeClassName="active">
                      <Card.Link href="#">Write</Card.Link>
                      </LinkContainer>
                      <LinkContainer to="/editcircular" activeClassName="active">
                      <Card.Link href="#">Edit</Card.Link>
                      </LinkContainer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Events</Card.Title>
                        <Card.Text>
                          Add details to the calendar whether its a Occasion,Holiday,Celebrations
                        </Card.Text>
                        <LinkContainer to="/createevents" activeClassName="active">
                        <Card.Link href="#">Create</Card.Link>
                        </LinkContainer>
                        <LinkContainer to="/editevents" activeClassName="active">
                        <Card.Link href="#">Edit</Card.Link>
                        </LinkContainer>
                      </Card.Body>
                    </Card>
                </Col>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                          <Card.Title>Class TimeTable</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Class TimeTable</Card.Subtitle>
                          <Card.Text>
                            Create Daily Scheduled Class TimeTable here
                          </Card.Text>
                          <LinkContainer to="/createtimetable" activeClassName="active">
                          <Card.Link href="#">Create</Card.Link>
                          </LinkContainer>
                          <LinkContainer to="/edittimetable" activeClassName="active">
                          <Card.Link href="#">Edit</Card.Link>    
                          </LinkContainer>
                     </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Exam TimeTable</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Class TimeTable</Card.Subtitle>
                      <Card.Text>
                        Create Exam TimeTables Here
                      </Card.Text>
                      <LinkContainer to="/createexamtimetable" activeClassName="active">
                      <Card.Link href="#">Create</Card.Link>
                      </LinkContainer>
                      <LinkContainer to="/editexamtimetable" activeClassName="active">
                      <Card.Link href="#">Edit</Card.Link>    
                      </LinkContainer>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Study Materials</Card.Title>
                            <Card.Text>
                              Upload Study Materials 
                            </Card.Text>
                            <LinkContainer to="/uploadstudymaterial" activeClassName="active">
                            <Card.Link href="#">Upload</Card.Link>
                            </LinkContainer>
                            <LinkContainer to="/editstudymaterial" activeClassName="active">
                            <Card.Link href="#">Edit</Card.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                          <Card.Title>Model Question Paper</Card.Title>
                          <Card.Text>
                            Upload Model Question Papers 
                          </Card.Text>
                          <LinkContainer to="/uploadmodelquestionpaper" activeClassName="active">
                          <Card.Link href="#">Upload</Card.Link>
                          </LinkContainer>
                          <LinkContainer to="/editmodelquestionpaper" activeClassName="active">
                          <Card.Link href="#">Edit</Card.Link>
                          </LinkContainer>
                      </Card.Body>
                  </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Media</Card.Title>
                            <Card.Text>
                              Upload Photos and Videos of the latest events in the college 
                            </Card.Text>
                            <LinkContainer to="/uploadmedia" activeClassName="active">
                            <Card.Link href="#">Upload</Card.Link>
                            </LinkContainer>
                            <LinkContainer to="/editmedia" activeClassName="active">
                            <Card.Link href="#">Edit</Card.Link>
                            </LinkContainer>
                        </Card.Body>
                 </Card>
                  </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Complaints/FeedBack</Card.Title>
                            <Card.Text>
                              Know The Complaints/feedback given by Teachers/Parents/Employees 
                            </Card.Text>
                            <LinkContainer to="/feedbackteacher" activeClassName="active">
                            <Card.Link href="#">Teachers</Card.Link>
                            </LinkContainer>
                            <LinkContainer to="/feedbackparent" activeClassName="active">
                            <Card.Link href="#">Parents</Card.Link>
                            </LinkContainer>
                            <LinkContainer to="/feedbackemployee" activeClassName="active">
                            <Card.Link href="#">Employees</Card.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>  
              </Row>
             </Container> 

             </div>
        
       
        </>
        
		)
	}
}