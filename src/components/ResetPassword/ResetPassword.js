import React from "react";
import LHU_logo from "../../assets/images/Logo_LHU_Vi.png";
import "./RsPassword.scss";

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ``,
        }
    }

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.username) {
            alert(`Vui lòng nhập Email!`)
            return;
        }
        alert('Chúng tôi đã gửi tin nhắn đến Email của bạn, vui lòng kiểm tra!')
        console.log(`username: `, this.state.username)
    }

    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>


                <form className="container-rspass">
                    <div className="left-img">

                    </div>
                    <div className="right-resetpass">
                        <div className="top-form-rspass">
                            <img className="LHU-Logo-rspass" src={LHU_logo} alt="" />
                        </div>
                        <div className="middle-form-rspass">
                            <div className="text-login-rspass" >Lac Hong University E-Profile</div>
                            <input onChange={(event) => this.handleChangeUsername(event)} className="textBox-rspass" type="text" placeholder="Nhập Email Của Bạn" /><br />
                            <button className="btnReset" onClick={(event) => this.handleSubmit(event)}
                                type="submit">Reset Password</button>
                        </div>
                        <div className="bottom-form-rspass">

                            <div className="bottom-form-bar-rspass">

                            </div>
                        </div>
                    </div>
                </form>

            </>
        )
    }
}

export default ResetPassword;