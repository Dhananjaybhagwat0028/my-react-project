import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <>
           <div className="App"> 
            <RegistrationPage />
            <LoginPage /> 
          </div> 
     
    </>
  );
}

export default App;
