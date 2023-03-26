import React from "react";
import LHU_logo from "../../assets/images/Logo_LHU_Vi.png";
import "./Nav.scss"
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeclassname="active" exact="true">
                    <img className="LHU_Logo" src={LHU_logo} />
                </NavLink>

                <NavLink to="/news" activeclassname="active">
                    Bản Tin
                </NavLink>

                <NavLink to="/company" activeclassname="active">
                    Công Ty
                </NavLink>

                <NavLink to="/user" activeclassname="active">
                    Hồ Sơ
                </NavLink>
                <NavLink to="/working" activeclassname="active">
                    Việc Làm
                </NavLink>
            </div>
        )
    }
}

export default Nav;