
import { useNavigate, Outlet,useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



 export const  Toolsbar=()=> {
  const navigate = useNavigate();
  
  return (
    <div className='outlet'>
      <div className='tool'>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("about")}>About</Button>
          <Button color="inherit" onClick={() => navigate("student-details")}>Students -D</Button>
          <Button color="inherit" onClick={() => navigate("assign-class")}>Class</Button>
          <Button color="inherit" onClick={() => navigate("leave")}>Leave</Button>
          <Button color="inherit" onClick={() => navigate("/")}>log out</Button>
          
        </Toolbar>
      </AppBar>
      </div>
      <div >
          <Outlet/>
      </div>
    </div>

  );
}
export function Studenttoolbar(){
  const navigate=useNavigate()
  return(
    <div className='outlet'>
    <div className='tool'>
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => navigate("Sabout")}>About</Button>
        <Button color="inherit" onClick={() => navigate("course")}>Courses</Button>
        <Button color="inherit" onClick={() => navigate("T-class")}>T-Class</Button>
        <Button color="inherit" onClick={() => navigate("Apply-leave")}>Leave</Button>
        <Button color="inherit" onClick={() => navigate("/")}>log out</Button>
        
      </Toolbar>
    </AppBar>
    </div>
<div >
    <Outlet/>
    </div>
  </div>
  )
}



export default Toolsbar;