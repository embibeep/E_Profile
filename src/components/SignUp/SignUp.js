import React from "react";
import './SignUp.scss';
import LHU_logo from "../../assets/images/Logo_LHU_Vi.png";
import path from "../../utils/constant";
import Form from 'react-bootstrap/Form';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userType: ``,
            peoplename: ``,
            email: ``,
            password: ``,
            checkpassword: ``,
            isShowPassword: false,



        }
    }

    handleCreateAccount = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": this.state.peoplename,
            "email": this.state.email,
            "password": this.state.password,
            "role": this.state.userType,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/register", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            alert("Đăng kí thành công")

    }

    handleChangeUserType = (event) => {
        this.setState({
            userType: event.target.value
        }, () => {
            console.log(`check user type: `, this.state.userType)
        })

    }

    handleChangePeoplename = (event) => {
        this.setState({
            peoplename: event.target.value
        })
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

    handleCheckPassword = (event) => {
        this.setState({
            checkpassword: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (!this.state.userType || !this.state.peoplename || !this.state.email || !this.state.password || !this.state.checkpassword) {
            alert(`Nhập đầy đủ dữ liệu!`)
            return;
        } else if (this.state.password !== this.state.checkpassword) {

            alert(`Mật khẩu và Xác nhận mật khẩu không giống nhau!`)

        } else if (this.state.password.length < 8) {
            alert("Mật khẩu phải dài hơn 8 kí tự");
        } else {
            this.handleCreateAccount();
        }

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

                <form className="container-Signup">
                    <div className="left-img">

                    </div>

                    <div className="right-signup">
                        <div className="top-form">
                            <img className="LHU-Logo" src={LHU_logo} alt="" />
                        </div>
                        <div className="middle-form">
                            {/* <div className="text-login" >Lac Hong University E-Profile</div> */}
                            <Form.Select onChange={(event) => this.handleChangeUserType(event)} className="list-Box">
                                <option disabled selected value>Chọn loại tài khoản</option>
                                <option value="1">Sinh Viên</option>
                                <option value="2">Doanh Nghiệp</option>
                            </Form.Select>
                            <input onChange={(event) => this.handleChangePeoplename(event)} className="text-Box" type="text" placeholder="Nhập Họ Tên hoặc tên công ty của bạn" /><br />
                            <input onChange={(event) => this.handleChangeEmail(event)} className="text-Box" type="text" placeholder="Nhập Email Của Bạn" /><br />
                            <input onChange={(event) => this.handleChangePassword(event)} className="text-Box" type={this.state.isShowPassword ? "text" : "password"}
                                placeholder="Nhập Mật Khẩu" />
                            <br />
                            <input onChange={(event) => this.handleCheckPassword(event)} className="text-Box" type={this.state.isShowPassword ? "text" : "password"}
                                placeholder="Nhập Lại Mật Khẩu" />
                            <br />

                            <div className="checkBox-Password-Signup" >
                                <input type="checkbox" onClick={(event) => { this.handleShowPassword(event) }} />
                                <label htmlFor="checkBox-Password" className="text-label-Signup"> Hiện Thị Mật Khẩu</label><br />
                            </div>

                            <div className="text-Signup-notice">
                                <span>Bạn đã có tài khoản?<a href={path.LOGIN}>Đăng Nhập Ngay</a> </span>
                                {/* <p>Bằng việc đăng ký tài khoản, bạn đã đồng ý với <a href="#">Điều khoản dịch vụ</a> và  <a href="#">chính sách bảo mật</a> của chúng tôi</p> */}
                            </div>
                            <button className="btn-Submit" onClick={(event) => this.handleSubmit(event)} type="">
                                Đăng Ký
                            </button>
                        </div>
                        <div className="bottom-form">

                            <div className="bottom-form-bar">
                                {/* <span>Bạn đã có tài khoản?<a href={path.LOGIN}>Đăng Nhập Ngay</a> </span> */}
                            </div>
                        </div>
                    </div>

                </form>
            </>
        )
    }
}

export default SignUp;