import { Container } from "reactstrap";
import { AuthProvider } from "./components/context/AuthContext";
import Signup from "./components/signup/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Listings from "./components/listings/Listings";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />.
          <Route path="/listings" element={<Listings />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
