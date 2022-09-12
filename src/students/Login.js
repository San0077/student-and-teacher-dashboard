import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MyContext } from "../common.js";

export function Login() {
  const navigate = useNavigate();
  let [email, setemail] = useState();
  let [password, setpassword] = useState();
  let [show, setshow] = useState(false);
  const {login,setlogin} = useContext(MyContext)
  const submit =()=> {
      let values ={
        email,
        password
      }
       if(login){
        localStorage.removeItem("token")
        navigate("/")
        setlogin(false)
       }else{
      fetch("https://studentandteacher.herokuapp.com/", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json()).then(res => {
        if (res.msg == "invalid") {
            setshow(true)
        } else {
             if(res.role=="teacher"){
              navigate("/msg/"+102)
              setlogin(true)
             }else if(res.role=="student"){
              navigate("/Student-profile/"+110)
               setlogin(true)
             }else{
                setshow(true)
             }
        }
      });
    }
    }
 
  

  return(
    <div className="document">
      <div >
        <div className='container'>
          <div className='heading'>
            <i className="fa fa-book fa-4x" aria-hidden="true"></i>
            <span className='heading-name'>The think and Learn</span>
          </div>
          <div className='form'>
            <div>
              <form className='form-details'>
                <p>{!show?"":"invalid Credentials"}</p>
                <TextField id="outlined-basic"
                  label="username" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e) => setemail(e.target.value)} />

                <TextField id="outlined-basic"
                  label="password" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e) => setpassword(e.target.value)} />

                <div className='button'>
                  <Button variant="contained" type="button"
                    style={{ marginRight: 20 }}
                    onClick={()=>submit()}>Login</Button>
                  <Button variant="contained" type="button" onClick={() => navigate("/stu-form")}>Sign in</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}