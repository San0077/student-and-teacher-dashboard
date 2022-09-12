import React, { useEffect, useState } from 'react';

// import Button from '@mui/material/Button';



export const Stdetails = () => {


  var [student, setstudent] = useState(null);
  useEffect(() => {
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/user")
      .then(data => data.json()).then(student => setstudent(student));
  }, []);        

  return (
    <div className="TodayClass">
    <div>
      <h3 style={{ marginTop: "10px" }}><p class="font-weight-bold text-center"><u>Student Details</u></p></h3>
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
  </div>
  );
};

