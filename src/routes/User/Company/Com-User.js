import React from "react";
import './Com-User.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import iconbithday from "../../../assets/images/icons-birthday.png"
import phone from "../../../assets/images/phone.png"
import address from "../../../assets/images/address.png"
import email from "../../../assets/images/email.png"
import facebook from "../../../assets/images/facebook.png"
import gender from "../../../assets/images/gender.png"
import profileIcon from "../../../assets/images/profileIcon.png"
import iconFollow from "../../../assets/images/iconFollow.png"
import lachongImg from "../../../assets/images/lachongImg.jpg"
class ComUser extends React.Component {
    handlePopUp = () => {
        this.setState({
            isViewPost: true
        })
    }

    togglePopUp = () => {
        this.setState({
            isViewPost: !this.state.isViewPost
        })
    }
    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>

                <div className="all">
                    <div className="profileCT">

                        <div className="pro-left">
                            <div className="avt-name">
                                <div className="avt">
                                </div>
                                <div className="name">Công Ty TNHH ABCXYZ...</div>
                            </div>
                            <div className="gioithieu">
                                <div className="titleGT">Chúng tôi là ai?</div>
                                <div className="contentGT text-break">aaaaaaaaaaaa...</div>
                            </div>
                            <div className="gioithieu">
                                <div className="titleGT">Thành tựu của chúng tôi</div>
                                <div className="contentGT text-break">aaaaaaaaaaaa...</div>
                            </div>
                            <div className="gioithieu">
                                <div className="titleGT">Bạn có đang mong muốn</div>
                                <div className="contentGT text-break">aaaaaaaaaaaa...</div>
                            </div>
                            <div className="gioithieu">
                                <div className="titleGT">Vì sao cơ hội này rất tốt với bạn ?</div>
                                <div className="contentGT text-break">aaaaaaaaaaaa...</div>
                            </div>





                        </div>
                        <div className="pro-right">
                            <div className="banner">
                                <img src={lachongImg} />
                            </div>

                            <div className="listbutton">
                                <button className="editavt btn"> đổi avatar</button>
                                <button className="editbanner btn"> đổi ảnh bìa</button>
                                <button className="editGT btn">sửa thông tin giới thiệu</button>
                                <button className="upload btn">Đăng bài tuyển</button>
                                <button className="save btn">Lưu thông tin</button>
                            </div>
                            <div className="infoall">
                                <div className="info">
                                    <div className="icon"><img src={address} /></div>
                                    <div className="content">Quận 10, Thành phố Hồ Chí Minh
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={email} /></div>
                                    <div className="content">huydoannguyen9@gmail.com</div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={phone} /></div>
                                    <div className="content">0708181583</div>
                                </div>
                            </div>
                            <div className="follow">
                                <div className="titlefollow">Đang tuyển</div>
                                <div className="listfollow overflow-auto">
                                    <div className="jobItem">
                                        <div className="Top-Job">
                                            <div className="icon">
                                                <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                            </div>
                                            <div className="Top-Left">
                                                <div className="nameJob">
                                                    SoftWare Engineer 1
                                                </div>
                                                <div className="nameCompany">
                                                    công ty TNHH ...
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="userfollowtitle">Danh sách ứng tuyển</div>
                            <div className="userfollow overflow-auto">
                                <div className="useritem">
                                    <div className="icon object-fit: fill"><img src={address} /></div>
                                    <div className="content">Đoàn Nguyên Huy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ComUser;