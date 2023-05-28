import './App.css';
import AddEmployee from './componenets/AddEmployee';
import AllEmployees from './componenets/AllEmployees';
import EditUser from './componenets/EditUser';
import Home from './componenets/Home';
import Navbar from './componenets/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (  
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
  
    <Route eaxct path="/" element={<Home/>}/> 
    <Route exact path="/AllEmployees" element={ <AllEmployees/>} />
    <Route exact path="/AddEmployee" element={ <AddEmployee/>} /> 
    <Route exact path="/edit/:id" element={ <EditUser/>} /> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
