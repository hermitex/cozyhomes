import { Container } from "reactstrap";
import { AuthProvider } from "./components/context/AuthContext";
import Signup from "./components/signup/Signup";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Container
          className="d-flex align-items-center just-content-center"
          style={{ height: 100 + "vh" }}
        >
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;
