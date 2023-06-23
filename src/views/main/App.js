import './App.scss';
import Company from '../../routes/Company/Company';
import Working from "../../routes/Working/Working";
import StUser from "../../routes/User/Students/St-User.js";
import ComUser from '../../routes/User/Company/Com-User';
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
import Posts from '../../components/Posts/Posts';
import PostLists from '../../components/Modals/ModalCompany/Company-Post-Lists';
function App() {
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
  return (

    <Router>
      <div className="App">
        <header className="App-header">

          <Routes>
            <Route path={path.HOME} element={<Working />} />
            <Route path={path.COMPANY} element={<Company />} />
            <Route path={path.USER} element={<StUser />} />
            <Route path={path.COMUSER} element={<ComUser />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.WORKING} element={<Working />} />
            <Route path={path.SignUp} element={<SignUp />} />
            <Route path={path.RESETPASS} element={<ResetPassword />} />
            <Route path={path.STAFFREC} element={<RecruitPost />} />
            <Route path={path.POSTS} element={<Posts />} />
            <Route path={path.POSTLISTS} element={<PostLists />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
