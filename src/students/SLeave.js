import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function SLeave() {
  const { id } = useParams();

  document.title = "get leave form";
  let [reason, setreason] = useState("Important work");
  let [start, setstart] = useState();
  let [End, setEnd] = useState();
  let [status, setstatus] = useState();
  let [leave ,setleave]= useState([]);
  
  
  
  let leavesumit = () => {
    let leavedata = [{
            
       reason,
       start,
       End,
       status:"pending"
       
      }];
      setleave(leavedata)
      console.log(leavedata)
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/user/"+id, {
      method: "POST",
      body: JSON.stringify(leavedata),
      headers: {
        "Content-Type": "application/json",
      },
      
    });
  };
  return (
    <div>
      <h3 class="font-weight-bold text-center"  style={{ marginRight: 110 }}>Leave Application</h3>
      <div className="Student_leave">
        <div className="leave_design">
          <TextField
            id="outlined-basic"
            label="leave-reason"
            variant="outlined"
            style={{ width: 300, marginBottom: 20 }}
            onChange={(e) => setreason(e.target.value)}
          />
          <br />
          <label>Start</label>
          <br />
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            type="date"
            style={{ width: 300, marginBottom: 20 }}
            onChange={(e) => setstart(e.target.value)}
          />
          <br />
          <label>End</label>
          <br />
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            type="date"
            style={{ width: 300, marginBottom: 20 }}
            onChange={(e) => setEnd(e.target.value)}
          />
          <br />
          <Button variant="contained" type="button" onClick={leavesumit}>
            submit
          </Button>
        </div>
        <div className="hrline"></div>
        <div >
          <h3 class="font-weight-bold ">Leave Status</h3>
          <div style={{ marginTop:30  }}>
          <div className="table table-bordered" style={{ width: "maxWidth" }} >
            <thead class="thead-dark">
              <tr>
                <th class="text-center">S.No</th>
                <th class="text-center">Reason</th>
                <th class="text-center">Start Date</th>
                <th class="text-center">End Date</th>
                <th class="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
                   {leave?leave.map((e,i)=><tr>
                   <th>{i + 1}</th>
                   <th>{e.reason}</th>
                   <th>{e.start}</th>
                   <th>{e.End}</th>
                   <th>{e.status}</th>
                   </tr>
                   ):""}
            </tbody>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
