import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//import MyNavigationLinksUsingButton from "./pages/navbar.js";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Navbar from "./pages/navbar";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          {/* <MyNavigationLinksUsingButton /> */}
          < Navbar /> 
          <Homepage />
          <RegistrationPage />
          <LoginPage />

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
