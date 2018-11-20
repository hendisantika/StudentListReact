<<<<<<< HEAD
=======
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SkyLight from 'react-skylight';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
class App extends React.Component {
  constructor(props) {
      super(props);
      this.deleteStudent = this.deleteStudent.bind(this);
      this.createStudent = this.createStudent.bind(this);
<<<<<<< HEAD
=======

>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
      this.state = {
          students: [],
      };
   }
 
  componentDidMount() {
    this.loadStudentsFromServer();
  }
  
  // Load students from database
  loadStudentsFromServer() {
<<<<<<< HEAD
      fetch('http://localhost:8080/api/students') 
=======
      fetch('http://localhost:8080/api/students', 
      {credentials: 'same-origin'}) 
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
      .then((response) => response.json()) 
      .then((responseData) => { 
          this.setState({ 
              students: responseData._embedded.students, 
          }); 
<<<<<<< HEAD
      });     
  } 
  
  // Delete student
  deleteStudent(student) {
      fetch (student._links.self.href,
      { method: 'DELETE',})
      .then( 
          res => this.loadStudentsFromServer()
      )
      .catch( err => cosole.error(err))                
=======
      });
  } 

  // Delete student
  deleteStudent(student) {
      fetch (student._links.self.href,
      { method: 'DELETE', 
        credentials: 'same-origin'})
      .then( 
          res => this.loadStudentsFromServer()
      )
      .then(() => { 
          Alert.success('Student deleted', {
            position: 'bottom-left',
            effect: 'slide'
          });
      })
      .catch( err => console.error(err))                
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
  }  
  
  // Create new student
  createStudent(student) {
<<<<<<< HEAD
      fetch('http://localhost:8080/api/students', {
          method: 'POST',
=======
      fetch('http://localhost:8080/api/students', 
      {   method: 'POST', 
          credentials: 'same-origin',
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(student)
      })
      .then( 
          res => this.loadStudentsFromServer()
      )
      .catch( err => cosole.error(err))
  }
  
  render() {
    return (
       <div>
<<<<<<< HEAD
          <StudentForm createStudent={this.createStudent}/>
          <StudentTable deleteStudent={this.deleteStudent} students={this.state.students}/> 
=======
          <StudentTable deleteStudent={this.deleteStudent} students={this.state.students}/> 
          <StudentForm createStudent={this.createStudent}/>
          <Alert stack={true} timeout={2000} />
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
       </div>
    );
  }
}
    	
class StudentTable extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
    var students = this.props.students.map(student =>
<<<<<<< HEAD
        <Student key={student._links.self.href} student={student} deleteStudent={this.props.deleteStudent}/>
=======
        <Student key={student._links.self.href} student={student}  deleteStudent={this.props.deleteStudent}/>
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
    );

    return (
      <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Firstname</th><th>Lastname</th><th>Email</th><th> </th>
          </tr>
        </thead>
        <tbody>{students}</tbody>
      </table>
      </div>);
  }
}
        
class Student extends React.Component {
    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        this.props.deleteStudent(this.props.student);
    } 
<<<<<<< HEAD
 
    render() {
=======

     render() {
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
        return (
          <tr>
            <td>{this.props.student.firstname}</td>
            <td>{this.props.student.lastname}</td>
            <td>{this.props.student.email}</td>
<<<<<<< HEAD
            <td>
                <button className="btn btn-danger" onClick={this.deleteStudent}>Delete</button>
=======
            <td>               
                <button className="btn btn-danger btn-xs" onClick={this.deleteStudent}>Delete</button>
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
            </td>
          </tr>
        );
    } 
}

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstname: '', lastname: '', email: ''};
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleChange = this.handleChange.bind(this);     
    }

    handleChange(event) {
<<<<<<< HEAD
        console.log("NAME: " + event.target.name + " VALUE: " + event.target.value);
=======
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }    
    
    handleSubmit(event) {
        event.preventDefault();
        console.log("Firstname: " + this.state.firstname);
        var newStudent = {firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email};
<<<<<<< HEAD
        this.props.createStudent(newStudent);        
=======
        this.props.createStudent(newStudent);    
        this.refs.simpleDialog.hide();    
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
    }
    
    render() {
        return (
<<<<<<< HEAD
            <div className="panel panel-default">
                <div className="panel-heading">Create student</div>
                <div className="panel-body">
                <form className="form-inline">
                    <div className="col-md-2">
                        <input type="text" placeholder="Firstname" className="form-control"  name="firstname" onChange={this.handleChange}/>    
                    </div>
                    <div className="col-md-2">
                        <input type="text" placeholder="Lastname" className="form-control" name="lastname" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder="Email" className="form-control" name="email" size={50}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>   
                    </div>        
                </form>
                </div>      
            </div>
         
=======
          <div>
            <SkyLight hideOnOverlayClicked ref="simpleDialog">
                <div className="panel panel-default">
                <div className="panel-heading">Create student</div>
                <div className="panel-body">
                <form className="form">
                    <div className="col-md-4">
                        <input type="text" placeholder="Firstname" className="form-control"  name="firstname" onChange={this.handleChange}/>    
                    </div>
                    <div className="col-md-4">       
                        <input type="text" placeholder="Lastname" className="form-control" name="lastname" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder="Email" className="form-control" name="email" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>   
                    </div>       
                </form>
                </div>      
                </div>
            </SkyLight>
            <div className="col-md-2">
                <button className="btn btn-primary" onClick={() => this.refs.simpleDialog.show()}>New student</button>
            </div>
          </div>   
>>>>>>> 7ad1ffbb9f2eb0eecfffeb277412272738642769
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root') );