import React from "react";
import "./Login.scss"
import LHU_logo from "../../assets/images/Logo_LHU_Vi.png";
import { Navigate } from "react-router-dom";
import lachongImg from "../../assets/images/lachongImg.jpg"
import path from "../../utils/constant";
import { handleLoginApi } from "../../services/userService";
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ``,
            password: ``,
            isShowPassword: false

        }
    }

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async (event) => {
        event.preventDefault()
        if (!this.state.username || !this.state.password) {
            alert(`Nhập đầy đủ dữ liệu!`)
            return;
        } else {
            alert('Nhập thành công!')
            { <Navigate to="/news" /> }
        }

        console.log(`username: `, this.state.username, `, password: `, this.state.password)
    }

    handleShowPassword = (event) => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }


    render() {

        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
                <form className="container-login">
                    <div className="left-img">

                    </div>
                    <div className="right-login">
                        <div className="top_form">
                            <img className="LHU_Logo" src={LHU_logo} alt="" />
                        </div>
                        <div className="middle_form">
                            <div className="text_login" >Lac Hong University E-Profile</div>
                            <input onChange={(event) => this.handleChangeUsername(event)} className="textBox" type="text" placeholder="Nhập Email Của Bạn" /><br />
                            <input onChange={(event) => this.handleChangePassword(event)} className="textBox" type={this.state.isShowPassword ? "text" : "password"}
                                placeholder="Nhập Mật Khẩu" />
                            <br />
                            <div className="checkBox-Password" >
                                <input type="checkbox" onClick={(event) => { this.handleShowPassword(event) }} />
                                <label htmlFor="checkBox-Password" className="text-label"> Hiện Thị Mật Khẩu</label><br />
                            </div>
                            <button className="btnSubmit" onClick={(event) => this.handleLogin(event)}
                                type="submit">Đăng Nhập</button>
                        </div>
                        <div className="bottom_form">

                            <div className="bottom_form_bar">
                                <span className="btnSignUp">Bạn chưa có tài khoản?&nbsp; <a href={path.SignUp}>Đăng Ký Ngay</a> </span>
                                <span className="btnForgotPassword"><a href={path.RESETPASS}>Quên Mật Khẩu?</a></span>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default Login;