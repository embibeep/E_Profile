import './App.scss';
import Nav from '../../components/Navigation/Nav.js';
import Home from '../../routes/Home/Home';
import Company from '../../routes/Company/Company';
import Working from "../../routes/Working/Working";
import User from "../../routes/User/User";
import Login from '../../components/Auth/Login';
import path from '../../utils/constant.js';
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
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.NEWS} element={<Working />} />
            <Route path={path.COMPANY} element={<Company />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.WORKING} element={<Working />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
