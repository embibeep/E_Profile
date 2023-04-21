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
            username: ``,
            password: ``,
            checkpassword: ``,
            isShowPassword: false

        }
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

    handleCheckPassword = (event) => {
        this.setState({
            checkpassword: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (!this.state.userType || !this.state.peoplename || !this.state.username || !this.state.password || !this.state.checkpassword) {
            alert(`Nhập đầy đủ dữ liệu!`)
            return;
        }
        if (this.state.password === this.state.checkpassword) {
            alert('Nhập thành công!')
            console.log(`id: `, this.state.userType,
                `name: `, this.state.peoplename,
                `, username: `, this.state.username,
                `, password: `, this.state.password,
                `, checkpassword: `, this.state.checkpassword)
        }
        else {
            alert(`Mật khẩu và Xác nhận mật khẩu không giống nhau!`)
            return;
        }
    }

    handleShowPassword = (event) => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <form className="container-Signup">
                <div className="top-form">
                    <img className="LHU-Logo" src={LHU_logo} alt="" />
                </div>
                <div className="middle-form">
                    <div className="text-login" >Lac Hong University E-Profile</div>
                    <Form.Select onChange={(event) => this.handleChangeUserType(event)} className="text-Box">
                        <option disabled selected value>Chọn loại tài khoản</option>
                        <option value="sv">Sinh Viên</option>
                        <option value="dn">Doanh Nghiệp</option>
                    </Form.Select>
                    <input onChange={(event) => this.handleChangePeoplename(event)} className="text-Box" type="text" placeholder="Nhập Họ Tên Của Bạn" /><br />
                    <input onChange={(event) => this.handleChangeUsername(event)} className="text-Box" type="text" placeholder="Nhập Email Của Bạn" /><br />
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
                        <p>Bằng việc đăng ký tài khoản, bạn đã đồng ý với <a href="#">Điều khoản dịch vụ</a> và <a href="#">chính sách bảo mật</a> của chúng tôi</p>
                    </div>
                    <button className="btn-Submit" onClick={(event) => this.handleSubmit(event)}
                        type="submit">Đăng Ký</button>
                </div>
                <div className="bottom-form">

                    <div className="bottom-form-bar">
                        <span>Bạn đã có tài khoản?<a href={path.LOGIN}>Đăng Nhập Ngay</a> </span>
                    </div>
                </div>
            </form>
        )
    }
}

export default SignUp;