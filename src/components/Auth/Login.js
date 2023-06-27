import React from "react";
import "./Login.scss"
import LHU_logo from "../../assets/images/Logo_LHU_Vi.png";
import { Navigate } from "react-router-dom";
import { useHref } from "react-router-dom";
import lachongImg from "../../assets/images/lachongImg.jpg"
import path from "../../utils/constant";
import { handleLoginApi } from "../../services/userService";
class Login extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            email: "",
            password: "",
            isShowPassword: false,
            errMessage: "",
            token: "",
            response: [],

        }
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    componentDidMount() {
        this.LoginAccount();
        // this.GetAccountWithToken();
    }

    LoginAccount = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": this.state.email,
            "password": this.state.password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/signin", requestOptions)
            .then(token => token.text())
            .then(result => {
                this.setState({ token: result })
            })
            .catch(error => console.log('error', error));
    }

    // GetAccountWithToken = () => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", `Bearer ${this.state.token}`);

    //     var requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
    //         .then(response => response.json())
    //         .then(result => {
    //             this.setState({ response: result })
    //         })
    //         .catch(error => console.log('error', error));
    // }

    handleLogin = () => {

        this.LoginAccount();
        console.log("token:" + this.state.token);
        // this.GetAccountWithToken();

    }
    // handleLogin = async (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         errMessage: ``
    //     })
    //     console.log(`email: `, this.state.email, `, password: `, this.state.password)
    //     try {
    //         let data = await handleLoginApi(this.state.email, this.state.password)
    //         if (data && data.errCode !== 0) {
    //             this.setState({
    //                 errMessage: data.message
    //             })
    //         }

    //         if (data && data.errCode === 0) {
    //             alert('Đăng nhập thành công');

    //         }
    //     } catch (e) {
    //         if (e.response) {
    //             if (e.response.data) {
    //                 this.setState({
    //                     errMessage: e.response.data.message
    //                 })
    //             }
    //         }
    //         console.log('error message', e.response)
    //     }


    // }

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
                            <input onChange={(event) => this.handleChangeEmail(event)} className="textBox" type="text" placeholder="Nhập Email Của Bạn" /><br />
                            <input onChange={(event) => this.handleChangePassword(event)} className="textBox" type={this.state.isShowPassword ? "text" : "password"}
                                placeholder="Nhập Mật Khẩu" />
                            <br />
                            <div className="checkBox-Password" >
                                <input type="checkbox" onClick={(event) => { this.handleShowPassword(event) }} />
                                <label htmlFor="checkBox-Password" className="text-label"> Hiện Thị Mật Khẩu</label><br />
                            </div>

                            <a className="btnSubmit" onClick={(e) => this.handleLogin(e)}

                                type="submit">Đăng Nhập</a>
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