import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      {/* <SignUp/>   <br/><br/>
      <Login/>    <br/><br/> */}
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
