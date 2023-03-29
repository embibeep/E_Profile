import React from "react";
import "./Login.scss"
import LHU_logo from "../../assets/images/Logo_LHU_Vi.png";
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

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.username || !this.state.password) {
            alert(`Nhập đầy đủ dữ liệu!`)
            return;
        }
        alert('Nhập thành công!')
    }

    handleShowPassword = (event) => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {

        return (
            <form className="container">
                <div className="top_form">
                    <img className="LHU_Logo" src={LHU_logo} />
                </div>
                <div className="middle_form">
                    <div className="text_login" >Lac Hong University E-Profile</div>
                    <input onChange={(event) => this.handleChangeUsername(event)} className="textBox" type="text" placeholder="Nhập Email Của Bạn" /><br />
                    <input onChange={(event) => this.handleChangePassword(event)} className="textBox" type={this.state.isShowPassword ? "text" : "password"}
                        placeholder="Nhập Mật Khẩu" />
                    <br />
                    <div className="checkBox-Password" >
                        <input type="checkbox" onClick={(event) => { this.handleShowPassword(event) }} />
                        <label htmlFor="checkBox-Password"> Hiện Thị Mật Khẩu</label><br />
                    </div>
                    <button className="btnSubmit" onClick={(event) => this.handleSubmit(event)}
                        type="submit">Đăng Nhập</button>
                </div>
                <div className="bottom_form">

                    <div className="bottom_form_bar">
                        <span className="btnSignUp">Bạn chưa có tài khoản?<a href="#">Đăng Ký Ngay</a> </span>
                        <span className="btnForgotPassword"><a href="#">Quên Mật Khẩu?</a></span>
                    </div>
                </div>
            </form>
        )
    }
}

export default Login;