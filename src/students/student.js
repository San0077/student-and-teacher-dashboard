import {useNavigate, useParams,Navigate} from 'react-router-dom';
import React,{useState } from 'react';
import Button from '@mui/material/Button';
import image from '../images/santhosh.png'
import TextField from '@mui/material/TextField';

 export function Sabout(){
    document.title="student profile"
    const {id} = useParams();
    let [teab,setteab]=useState()
    const navigate = useNavigate()
    const [show,setshow]= useState(false)

   
 
   fetch('https://624a7f87852fe6ebf887cb38.mockapi.io/user/'+id)
  .then(data=>data.json()).then(datas=>setteab(datas)  )
   

    
     return(
        <div>
          
      {teab ? 
           <div>
           <div className = "image">
                 <div className="col-lg-6">
                    <section className="img">
                        <img src={image}></img>
                    </section>
                    <div  class="font-weight-bold text-center sname">
                             {`${teab.name}  Portal`} 
                    </div>
                    
                 </div>
                 <div className="line"></div>
                 <div className="Student-detalis">
                         <h2 class="font-weight-bold text-center">Student details</h2>
                        <div className="names">
                             <div className="font-weight-bold">{`Name : ${teab.name}`}</div>
                             <div className="font-weight-bold">{`Surname : ${teab.surname}`}</div>
                             <div className="font-weight-bold">{`FatherName : ${teab.fatherName}`}</div>
                             <div className="font-weight-bold">{`Age : ${teab.age}`}</div>
                             <div className="font-weight-bold">{`Gender : ${teab.gender}`}</div>
                             <div className="font-weight-bold">{`Course : ${teab.course}`}</div>
                             <p style={{color: "red"}}>Click Here to change your personal Details</p>
                             <button type="button" class="btn btn-primary" onClick={() =>setshow(true)}>Edit</button>
                        </div>
                 </div>
           </div>
           </div> : "loading"}
             <div>
             <div className="line1"></div>
                 {show?<Edit idd={id} setshow={setshow}/>:""}
             </div>
        </div>
     )
 } 
 export function Edit({idd,setshow}){
   
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
    fetch("https://624a7f87852fe6ebf887cb38.mockapi.io/user/"+idd, {
      method: "PUT",
      body: JSON.stringify(stdata),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => setshow(false))
  }
 return(
        <> 
        
          
          <div className="edit-list">
          
            <h3><p>Edit Your Person Details</p></h3>
            <TextField id="outlined-basic"  onChange={(e) => setname(e.target.value)} label="name" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic"  onChange={(e) => setsurname(e.target.value)} label="surname" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic"  onChange={(e) => setemail(e.target.value)} label="email" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic"  onChange={(e) => setpassword(e.target.value)} label="password" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic" onChange={(e) => setgender(e.target.value)} label="gender" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic"  onChange={(e) => setfather(e.target.value)} label="father Name" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic"  onChange={(e) => setage(e.target.value)} label="Age" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic"  onChange={(e) => setcourse(e.target.value)} label="course" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic"  onChange={(e) => setstandard(e.target.value)} label="standard" variant="outlined" style={{ width: 300 }} />
            <TextField id="outlined-basic"  onChange={(e) => setrole(e.target.value)} label="Role" variant="outlined" style={{ width: 300 }} />
            <Button variant="contained" style={{width: "10px"}} onClick={studentData} >submit</Button>
           </div>
            
         
        </>
    )
 }
 


