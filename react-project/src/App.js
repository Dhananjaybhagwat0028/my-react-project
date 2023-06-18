import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MyRegistration from "./pages/MyRegistration";
import MyNavigationLinks from "./pages/MyNavigationLinks";
import AppHome from "./pages/AppHome";
import AppLogin from "./pages/AppLogin";
import Aboutus from "./pages/Aboutus";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavigationLinks />

        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/login" element={<AppLogin />} />

          {/** Private Needs Protection */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <AppHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Aboutus"
            element={
              <ProtectedRoute>
                <Aboutus />
              </ProtectedRoute>
            }
          />

          <Route path="/registration" element={<MyRegistration />} />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

// lets protect the pages
function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default App;
