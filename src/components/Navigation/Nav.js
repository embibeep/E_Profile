import React from "react";
import LHU_logo from "../../assets/images/Logo_LHU_Vi.png";
import profileIcon from "../../assets/images/profileIcon.png";
import messageIcon from "../../assets/images/messageIcon.png";
import notificationIcon from "../../assets/images/notificationIcon.png";
import "./Nav.scss"
import path from "../../utils/constant.js";
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>

                <div className="topnav">
                    <NavLink to={path.HOME} activeclassname="active" exact="true">
                        <img className="LHU_Logo" src={LHU_logo} alt="Đại học Lạc Hồng" />
                    </NavLink>

                    {/* <NavLink to={path.NEWS} activeclassname="active">
                    Bản Tin
                </NavLink> */}

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

                    <div>
                        <img className="profile_logo_1" src={profileIcon} alt="profile" />
                    </div>
                    <div>
                        <img className="profile_logo" src={messageIcon} alt="profile" />
                    </div>
                    <div>
                        <img className="profile_logo" src={notificationIcon} alt="profile" />
                    </div>
                </div>
            </>
        )
    }
}

export default Nav;