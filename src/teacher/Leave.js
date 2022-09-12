import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { isDisabled } from '@testing-library/user-event/dist/utils';


export function Leave() {
  document.title = "leave req()";
  let [teab, setteab] = useState(null);
  let [dia, setdia] = useState(false);
  
  useEffect(() => {
    fetch('https://624a7f87852fe6ebf887cb38.mockapi.io/attend')
      .then(data => data.json()).then(datas => setteab(datas));
  }, [teab]);

  return (
    <div className="TodayClass">
        <div>
         <h3 style={{ marginTop: "10px" }}><p class="font-weight-bold text-center"><u>Leave submission</u></p></h3>
         <div className='table table-bordered'>
        <thead class="thead-dark">
          <tr>
            <th class="text-center">S.No</th>
            <th class="text-center">Name</th>
            <th class="text-center">Reason</th>
            <th class="text-center">Start Date</th>
            <th class="text-center">End Date</th>
            
          
          </tr>

        </thead>
        <tbody>
         <tr>

        <th>1</th>
        <th>Santhosh</th>
        <th>Important work</th>
        <th>2022-05-05</th>
        <th>2022-05-06</th>
        <th><Button variant="contained" disabled={dia} type="button"  
              onClick={() =>setdia(true)} >Accept</Button></th>
        <th><Button variant="contained" type="button" id="Rejected" disabled={dia}
                >Reject</Button></th>
       
       
     

           

          </tr>
        </tbody>
      </div>
      </div>
    </div>
  );
}

