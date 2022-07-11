// import { Routes, Route, useNavigate } from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import {useNavigate, useParams,Navigate} from 'react-router-dom';
import UserContext from './App'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



// import Button from '@mui/material/Button';


export const Stdetails=()=>{


  var [student,setstudent]=useState(null)
  useEffect(()=>{
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/user")
    .then(data=>data.json()).then(student=>setstudent(student))
  },[])
 
  return(
    <div>
      <div className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>surname</th>
            <th>stardard</th>
            <th>fathername</th>
            <th>age</th>
            <th>gender</th>
            <th>course</th>
            <th>Email</th>
          </tr>

        </thead>
        <tbody>
        { student ? student.map((e)=> <Stdetail studet={e}/>):"Loading"}
        </tbody>
      </div>
    </div>
  )
}
export function Stdetail({studet}) {
          if(studet.role == "student")
  return (
        <tr>
          <th>{studet.name}</th>
          <th>{studet.surname}</th>
          <th>{studet.standard}</th>
          <th>{studet.fatherName}</th>
          <th>{studet.age}</th>
          <th>{studet.gender}</th>
          <th>{studet.course}</th>
          <th>{studet.email}</th>
        </tr>
 
  );
}
 export function About(){
   const {id} = useParams();
   document.title="teacher profile"

 
  let [teab,setteab]=useState(null)
 useEffect(()=>{
   fetch('https://624a7f87852fe6ebf887cb38.mockapi.io/user/'+id)
  .then(data=>data.json()).then(datas=>setteab(datas))
 },[])
   
   console.log(teab)
  return(
   <div className='teach-h'> 
     { teab ?
     <div className='teacher'>
        <div >
          <img src={teab.pic} alt="pic"/>
        </div>
        <div>
            <h3> Name :{teab.name}</h3>
        </div>
        <div>
            <h3> Studies :{teab.studies}</h3>
        </div>
        <div>
            <h3> Specilisation :{teab.specilisation}</h3>
        </div>
        <div>
            <h3> Father :{teab.father}</h3>
        </div>
        <div>
            <h3>Mother Name :{teab.mother}</h3>
        </div>
        </div>
       : <h1>Loading</h1>}
        {/* <h1> {teab ? teab.name :'loading...'} */}
  
    </div>
  )
}
export function Class(){
  document.title="assign class"
  let [cname,setcname]=useState()
  let[sub,setsub]=useState()
  let[prework,setPrework]=useState()
  let[date,setdate]=useState()
  let[des,setdes]=useState()
  let[link,setdlink]=useState()
  var asClass=()=>{
    let classes={
      cname,
      sub,
      prework,
      date,
      des,
      link
    }
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(classes),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return(
    
    <div  className="student-form">
      <div>
      <form className="student">
          <TextField id="outlined-basic"
                  label="ClassName" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e)=>setcname(e.target.value)}
             />  
              <TextField id="outlined-basic"
                  label="subject" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e)=>setsub(e.target.value)}

             />  
              <TextField id="outlined-basic"
                  label="Pre-Work" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e)=>setPrework(e.target.value)}

             />  
              <TextField id="outlined-basic" type="date"
                  label="date" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e)=>setdate(e.target.value)}

             />  
               <TextField id="outlined-basic" type="text"
                  label="describtion" variant="outlined"
                  style={{ width: 300 }}
                    onChange={(e)=>setdes(e.target.value)}

             />  
             <TextField id="outlined-basic" type="text"
                  label="link" variant="outlined"
                  style={{ width: 300 }}
                    onChange={(e)=>setdlink(e.target.value)}

             />  
     <Button variant="contained" type="button" onClick={asClass} >submit</Button>
           </form>
        </div>
    </div>
  )
}
 export function Leave(){
  document.title="leave req()"
  let [teab,setteab]=useState(null)

  useEffect(()=>{
    fetch('https://624a7f87852fe6ebf887cb38.mockapi.io/user')
  .then(data=>data.json()).then(datas=>setteab(datas))
  },[teab])
  
   return(
     <div>
     { teab ? teab.map((e)=>
       <Lea ent={e}/>
     ) : "Loading"}
     </div>
   )
}
function Lea({ent}){

  let accept=(e)=>{
    let acc={
        accept:"ok"
    }
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/user/"+e, {
      method: "PUT",
      body: JSON.stringify(acc),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  if(ent.role=="student" && ent.reason)
  return(
    <div>
      <form>
      <h1>{ent.reason}</h1>
      <h1>{ent.dater}</h1>
      <Button variant="contained" type="button" onClick={accept(ent.id)} >click to accept</Button>

      </form>
    </div>
  )
}


