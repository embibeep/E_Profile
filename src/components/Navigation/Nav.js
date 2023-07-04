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


    constructor(props) {
        super(props);

        this.state = {
            pathUser: "",
            verify: {},
            isLogin: localStorage.getItem("accessToken") != null,

        }
    }
    componentDidMount() {
        this.getInforToken();
    }

    getInforToken = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ verify: { ...result[0] } })
            })
            .catch(error => console.log('error', error));
    }

    verifyProfile = () => {

        if (this.state.verify?.role == 1) {
            this.state.pathUser = path.USER
        } else if (this.state.verify?.role == 2) {
            this.state.pathUser = path.COMUSER
        }
    }

    LogoutAccount = () => {


        localStorage.removeItem("accessToken");
    }


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

                        {this.state.isLogin ? <NavLink to={path.LOGIN} onClick={this.LogoutAccount} activeclassname="active">
                            Đăng xuất
                        </NavLink> : <NavLink to={path.LOGIN} activeclassname="active">
                            Đăng Nhập
                        </NavLink>
                        }

                    </div>

                    <div className="right-nav">
                        {this.state.isLogin ? <Link onClick={this.verifyProfile()} to={this.state.pathUser} className="profile_logo_1">
                        </Link> : <div />}


                    </div>

                </div>
            </>
        )
    }
}

export default Nav;