import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




export function Class() {
  document.title = "assign class";
  let [cname, setcname] = useState();
  let [sub, setsub] = useState();
  let [prework, setPrework] = useState();
  let [date, setdate] = useState();
  let [des, setdes] = useState();
  let [link, setdlink] = useState();
  var asClass = () => {
    let classes = {
      cname,
      sub,
      prework,
      date,
      des,
      link
    };
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(classes),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  return (

    <div className="TodayClass">
      <div>
      <h3 style={{ marginTop: "10px" }}><p class="font-weight-bold text-center"><u>Today Class And preparation</u></p></h3>

        <form className="student">
          <TextField id="outlined-basic"
            label="ClassName" variant="outlined"
            style={{ width: 300 }}
            onChange={(e) => setcname(e.target.value)} />
          
          <TextField id="outlined-basic"
            label="subject" variant="outlined"
            style={{ width: 300 }}
            onChange={(e) => setsub(e.target.value)} />
          <TextField id="outlined-basic"
            label="Pre-Work" variant="outlined"
            style={{ width: 300 }}
            onChange={(e) => setPrework(e.target.value)} />
          <TextField id="outlined-basic" type="date"
            label="" variant="outlined"
            style={{ width: 300 }}
            onChange={(e) => setdate(e.target.value)} />
          <TextField id="outlined-basic" type="text"
            label="describtion" variant="outlined"
            style={{ width: 300 }}
            onChange={(e) => setdes(e.target.value)} />
          <TextField id="outlined-basic" type="text"
            label="link" variant="outlined"
            style={{ width: 300 }}
            onChange={(e) => setdlink(e.target.value)} />
          <Button variant="contained" type="button" 
          style={{ width: 300 }}
          onClick={asClass}>submit</Button>
        </form>
      </div>
    </div>
  );
}
{/* <div className="TodayClass">
<div>
  <h3 style={{ marginTop: "10px" }}><p class="font-weight-bold text-center"><u>Today Class And preparation</u></p></h3>
  <div className='table table-bordered'>
    <thead class="thead-dark">
      <tr>
        <th class="text-center">S.No</th>
        <th class="text-center">Name</th>
        <th class="text-center">Surname</th>
        <th class="text-center">FatherName</th>
        <th class="text-center">Year</th>
        
        <th class="text-center">Gender</th>
        <th class="text-center">Age</th>
        <th class="text-center">Email</th>
      </tr>

    </thead>
    <tbody>
      {student ? student.map((studet, i) => <tr>
        
    <th>{i}</th>
    <th>{studet.name}</th>
    <th>{studet.surname}</th>
    <th>{studet.fatherName}</th>
    <th>{studet.standard}</th>
    <th>{studet.gender}</th>
    <th>{studet.age}</th>
   <th>{studet.email}</th>
 

       

      </tr>) : "Loading"}
    </tbody>
  </div>
</div>
</div> */}