
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


// const UserContext = React.createContext();

// const BoldUser = () => {
//     const user = React.useContext(UserContext);
//     return (<b>{user.name} {user.age}</b>);
// };

// const ItalicUser = () => {
//     const user = React.useContext(UserContext);
//     return (<i>{user.name} {user.age}</i>);
// };

// const BoldUserWrapper = () => {
// 	return (<BoldUser />);
// };

// const ItalicUserWrapper = () => {
// 	return (<ItalicUser />);
// };

// const App = () => {
//   const user = {
//      	name: 'John',
//     	age: 25
//   };
//   return (
//     <UserContext.Provider value={user}>
//       <BoldUserWrapper />
//       <br/>
//       <ItalicUserWrapper />
//     </UserContext.Provider>
//   );
// };
export default Toolsbar;