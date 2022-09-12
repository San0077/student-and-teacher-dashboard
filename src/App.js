import './App.css';
import React, { useState, useContext, createContext } from 'react';
import {useNavigate, Routes, Route } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Leave } from "./teacher/Leave";
import { Class } from "./teacher/Class";
import { About } from "./teacher/About";
import { Stdetails } from "./teacher/Stdetails";
import { Toolsbar,Studenttoolbar } from './students/Toolsbar';
import {Sabout,Edit} from './students/student.js'
import {Tclass} from './students/Tclass.js'
import { Courses } from "./students/Courses";
import { SLeave } from "./students/SLeave";
import { Login } from './students/Login';




function App() {
  return (
    
    
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
           <Route index path="Sabout" element={<Sabout />}></Route>
           <Route path="Apply-leave" element={< SLeave/>}></Route>
           <Route path="course" element={<Courses />}></Route>
            <Route path="T-class" element={<Tclass />}></Route>

         </Route>
         
      </Routes>

         </div>
      
   

  )
}

function Addstudent() {

  const navigate = useNavigate();
  var [name, setname] = useState()
  var [surname, setsurname] = useState("")
  var [email, setemail] = useState("")
  var [password, setpassword] = useState("")
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
      password,
      gender,
      standard,
      fatherName,
      age,
      course,
      role
    }
    fetch("https://studentandteacher.herokuapp.com/stu-form", {
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
export default App;
