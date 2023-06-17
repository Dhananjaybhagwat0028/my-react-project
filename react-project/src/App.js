import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <>
           <div className="App"> 
           <Homepage />
            <RegistrationPage />
            <LoginPage /> 
          </div> 
     
    </>
  );
}

export default App;
