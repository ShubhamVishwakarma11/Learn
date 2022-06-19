import './App.css';
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import HomePage from './components/HomePage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      
      <UserAuthContextProvider>
      <NavBar/>
      <div className="Filler"></div>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<ProtectedRoutes><HomePage/></ProtectedRoutes>} /> 
        </Routes>
      </UserAuthContextProvider>
      {/* <SignUp/>   <br/><br/>
      <Login/>    <br/><br/> */}
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
