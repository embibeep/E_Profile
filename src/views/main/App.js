import logo from '../../assets/images/Logo_LHU_Vi.png';
import './App.scss';
import Nav from '../../components/Navigation/Nav.js';
import Home from '../../components/Home/Home';
import Company from '../../components/Company/Company';
import User from '../../components/User/User';
import Working from '../../components/Working/Working';
import Login from '../../components/Login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<Working />} />
            <Route path="/company" element={<Company />} />
            <Route path="/user" element={<Login />} />
            <Route path="/working" element={<Working />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
