import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';



export function Tclass() {
  document.title = "student class";
  var [Tclass, setTclass] = useState(null);
  useEffect(() => {
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/users")
      .then(data => data.json()).then(tclass => setTclass(tclass));
  }, []);


  return (
    <div className="TodayClass">
      <div>
        <h3 style={{ marginTop: "10px" }}><p class="font-weight-bold text-center"><u>Today Class And preparation</u></p></h3>
        <div className='table table-bordered'>
          <thead class="thead-dark">
            <tr>
              <th class="text-center">S.No</th>
              <th class="text-center">Name</th>
              <th class="text-center">subject</th>
              <th class="text-center">Prework</th>
              <th class="text-center">date</th>
              <th class="text-center">description</th>
              <th class="text-center">Link</th>
            </tr>

          </thead>
          <tbody>
            {Tclass ? Tclass.map((e, i) => <tr>
              <th>{i + 1}</th>
              <th>{e.cname}</th>
              <th>{e.sub}</th>
              <th>{e.prework}</th>
              <th>{e.date}</th>
              <th>{e.des}</th>

              <th> <Button variant="contained" type="button"
                onClick={() => alert(e.link)}>Click to join</Button></th>

            </tr>) : "Loading"}
          </tbody>
        </div>
      </div>
    </div>
  );
}
