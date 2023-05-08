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
import SignUp from '../../components/SignUp/SignUp';
import ResetPassword from '../../components/ResetPassword/ResetPassword';
import RecruitPost from '../../components/RecruitmentPost/RecruitmentPost';

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
            <Route path={path.USER} element={<User />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.WORKING} element={<Working />} />
            <Route path={path.SignUp} element={<SignUp />} />
            <Route path={path.RESETPASS} element={<ResetPassword />} />
            <Route path={path.STAFFREC} element={<RecruitPost />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
