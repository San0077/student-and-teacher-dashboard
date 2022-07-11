import {useNavigate, useParams,Navigate} from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

 export function Sabout(){
    document.title="student profile"
    const {id} = useParams();
    let [teab,setteab]=useState(null)
 useEffect(()=>{
   fetch('https://624a7f87852fe6ebf887cb38.mockapi.io/user/'+id)
  .then(data=>data.json()).then(datas=>setteab(datas))
 },[])
     return(
        <div className='teach-h'> 
     { teab ?
     <div className='teacher'>
       
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
 export function SLeave(){
    const {id} = useParams();

   
    document.title="get leave form"
     let [reason,setreason]=useState();
     let [dater,setdater]=useState();
   
     let leavesumit=()=>{
         let leavedata={
           reason,
           dater
      }
        
         fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/user/"+id, {
            method: "PUT",
            body: JSON.stringify(leavedata),
            headers: {
              "Content-Type": "application/json"
            }
          })
         
     }
    return(
        <div className='row'>
              <div className='col-lg-5'>
            <form>
              <TextField id="outlined-basic"
                  label="leave-reason" variant="outlined"
                  style={{ width: 300 }}
                 onChange={(e)=>setreason(e.target.value)}
             />  
               <TextField id="outlined-basic"
                  label="leave-date" variant="outlined" type ="date"
                  style={{ width: 300 }}
                  onChange={(e)=>setdater(e.target.value)}

             />  
             <Button variant="contained" type="button" onClick={leavesumit} >submit</Button>

             </form>
              </div>
              <Accept idd={id}/>
           
            
        </div>
    )
}


function Accept({idd}){
    var [teab,setteab]=useState(null)
        fetch('https://624a7f87852fe6ebf887cb38.mockapi.io/user/'+idd)
        .then(data=>data.json()).then(datas=>setteab(datas))

    return(
        <div>
           {teab ? <h1>Leave is accepted</h1> : "Loading"}

        </div>
    )
}
export function Courses(){
    document.title="student courses"
    return(
        <div>
            <h1>student course</h1>
        </div>
    )
}
export function Tclass(){
    document.title="student class"
    var [Tclass,setTclass]=useState(null)
  useEffect(()=>{
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/users")
    .then(data=>data.json()).then(tclass =>setTclass(tclass))
  },[])
         

    return(
        <div>
             <div className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>subject</th>
            <th>Prework</th>
            <th>date</th>
            <th>description</th>
            <th>Link</th>
            
          </tr>

        </thead>
        <tbody>
        {Tclass ? Tclass.map(e=> <TodayClass Tclass={e}/>) : "Loading"}
        </tbody>
      </div>
        </div>
    )
}
function TodayClass ({Tclass}){
  
    return(
        <tr>
          <th>{Tclass.cname}</th>
          <th>{Tclass.sub}</th>
          <th>{Tclass.prework}</th>
          <th>{Tclass.date}</th>
          <th>{Tclass.des}</th>
        
          <th> <Button variant="contained" type="button"
           onClick={()=>alert(Tclass.link)} >Click to join</Button></th>
         
        </tr>
       
    )
}