import React from "react";
import "./Login.scss"
import LHU_logo from "../../assets/images/Logo_LHU_Vi.png";

class Login extends React.Component {

    state = {
        account: ``,
        password: ``
    }

    handleChangeAccount = (event) => {
        this.setState({
            account: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.account || !this.state.password) {
            alert(`Nhập đầy đủ dữ liệu!`)
            return;
        }
        alert('Nhập thành công!')
    }

    render() {
        return (
            <form className="container">
                <div className="top_form">
                    <img className="LHU_Logo" src={LHU_logo} />
                </div>
                <div className="middle_form">
                    <h2><b>Lac Hong University E-Profile</b></h2>
                    <input onChange={(event) => this.handleChangeAccount(event)} className="textBox" type="text" placeholder="Nhập Email Của Bạn" /><br />
                    <input onChange={(event) => this.handleChangePassword(event)} className="textBox" type="text" placeholder="Nhập Mật Khẩu" /><br />
                    <button className="btnSubmit" onClick={(event) => this.handleSubmit(event)}
                        type="submit">Đăng Nhập</button>
                </div>
                <div className="bottom_form">

                    <ul className="bottom_form_bar">
                        <li className="btnSignUp">Bạn chưa có tài khoản?<a href="#">Đăng Ký Ngay</a></li>
                        <li className="btnForgotPassword"><a href="#">Quên Mật Khẩu?</a></li>
                    </ul>
                </div>
            </form>
        )
    }
}

export default Login;