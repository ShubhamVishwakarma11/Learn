import './App.css';
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import HomePage from './components/HomePage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<HomePage/>} /> 
        </Routes>
      </UserAuthContextProvider>
      {/* <SignUp/>   <br/><br/>
      <Login/>    <br/><br/> */}
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
