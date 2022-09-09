import './App.css';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import React, { useEffect, useState, useContext, createContext } from 'react';
import { Link, useNavigate, useParams, Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stdetails, About, Class,Leave } from './App.1.js'
import { Toolsbar,Studenttoolbar } from './Toolsbar';
import {Sabout,SLeave,Courses,Tclass} from './student.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Paper elevation={5} color="blue" >
    <div>
      <Routes>

        <Route path="/" element={<Login />}></Route>
        <Route path="/stu-form" element={<Addstudent />}></Route>
        <Route path="/msg/:id" element={<Toolsbar />}>
         <Route path="about" element={<About />}></Route>
          <Route path="leave" element={<Leave />}></Route>
          <Route path="student-details" element={<Stdetails />}></Route>
          <Route path="assign-class" element={<Class />}></Route>

        </Route>
           
           <Route path="/Student-profile/:id" element={<Studenttoolbar/>}>
           <Route path="Sabout" element={<Sabout />}></Route>
           <Route path="Apply-leave" element={< SLeave/>}></Route>
           <Route path="course" element={<Courses />}></Route>
           <Route path="T-class" element={<Tclass />}></Route>

         </Route>
      </Routes>

         </div>
      </Paper>
    </ThemeProvider>

  )
}

function Addstudent() {

  const navigate = useNavigate();
  var [name, setname] = useState()
  var [surname, setsurname] = useState("")
  var [email, setemail] = useState("")
  var [pass, setpassword] = useState("")
  var [gender, setgender] = useState("")
  var [fatherName, setfather] = useState("")
  var [age, setage] = useState("")
  var [course, setcourse] = useState("")
  var [standard, setstandard] = useState("")
  var [role, setrole] = useState("")

  var studentData = () => {
    var stdata = {
      name,
      surname,
      email,
      pass,
      gender,
      standard,
      fatherName,
      age,
      course,
      role
    }
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(stdata),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => navigate("/"))
  }
  return (
    
      <div className="student-form">
        <div>
          <form className="student">

            <TextField id="outlined-basic" onChange={(e) => setname(e.target.value)} label="name" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setsurname(e.target.value)} label="surname" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setemail(e.target.value)} label="email" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setpassword(e.target.value)} label="password" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setgender(e.target.value)} label="gender" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setfather(e.target.value)} label="father Name" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setage(e.target.value)} label="Age" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setcourse(e.target.value)} label="course" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setstandard(e.target.value)} label="standard" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setrole(e.target.value)} label="Role" variant="outlined" style={{ width: 300 }} />
            <Button variant="contained" type="button" onClick={studentData} >submit</Button>
          </form>
        </div>
      </div>
             
   
  )
}
function Login() {
  const navigate = useNavigate()
  let [email, setemail] = useState()
  let [password, setpassword] = useState()

function submit() {
  let result = fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/user")
    result.then(data => data.json()).then((datas) => {
      datas.map((e) => {
        if (e.email == email && e.password == password ) {
             if(e.role == "teacher"){
              navigate("/msg/" + e.id)
             }else if(e.role=="student"){
               navigate("/Student-profile/"+e.id)
             }
        }

      })
    })
  }

  return (
    <div>
      <div className="document">
        <div className='container'>
          <div className='heading'>
            <i className="fa fa-book fa-4x" aria-hidden="true"></i>
            <span className='heading-name'>The think and Learn</span>
          </div>
          <div className='form'>
            <div>
              <form className='form-details'>
                <TextField id="outlined-basic"
                  label="username" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e) => setemail(e.target.value)}
                />

                <TextField id="outlined-basic"
                  label="password" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e) => setpassword(e.target.value)}
                />

                <div className='button'>
                  <Button variant="contained" type="button"
                    style={{ marginRight: 20 }}
                    onClick={submit}>Log In</Button>
                  <Button variant="contained" type="button" onClick={() => navigate("/stu-form")} >Sign in</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}
export default App;
