import React from "react";
import LHU_logo from "../../assets/images/Logo_LHU_Vi.png";
import profileIcon from "../../assets/images/profileIcon.png";
import messageIcon from "../../assets/images/messageIcon.png";
import notificationIcon from "../../assets/images/notificationIcon.png";
import "./Nav.scss"
import path from "../../utils/constant.js";
import {
    Link,
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
                <div className="nav">
                    <div className="left-nav">
                        <NavLink to={path.HOME} activeclassname="active" exact="true" className="LHU_Logo">
                        </NavLink>
                    </div>

                    <div className="center-nav">
                        <NavLink to={path.WORKING} activeclassname="active">
                            Việc Làm
                        </NavLink>
                        <NavLink to={path.COMPANY} activeclassname="active">
                            Công Ty
                        </NavLink>

                        <NavLink to={path.USER} activeclassname="active">
                            Hồ Sơ
                        </NavLink>

                        <NavLink to={path.LOGIN} activeclassname="active">
                            Đăng Nhập
                        </NavLink>
                    </div>

                    <div className="right-nav">
                        <Link to={path.COMUSER} className="profile_logo_1">
                        </Link>
                        
                    </div>

                </div>
            </>
        )
    }
}

export default Nav;