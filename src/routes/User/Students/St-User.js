import React from "react";
import './St-User.scss';
import iconbithday from "../../../assets/images/icons-birthday.png"
import phone from "../../../assets/images/phone.png"
import address from "../../../assets/images/address.png"
import email from "../../../assets/images/email.png"
import facebook from "../../../assets/images/facebook.png"
import gender from "../../../assets/images/gender.png"
import profileIcon from "../../../assets/images/profileIcon.png"
import lachongImg from "../../../assets/images/lachongImg.jpg"
import iconFollow from "../../../assets/images/iconFollow.png"
import Footer from "../../../components/Footer/footer";



class StUser extends React.Component {
    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>

                <div className="all">
                    <div className="profileNV">

                        <div className="pro-left">
                            <div className="avt-name">
                                <div className="avt">
                                </div>
                                <div className="name">Đoàn Nguyên Huy</div>
                            </div>
                            <div className="gioithieu">
                                <div className="titleGT">Giới Thiệu</div>
                                <div className="contentGT text-break">aaaaaaaaaaaa...</div>
                            </div>

                            <div className="info">
                                <div className="icon"><img src={iconbithday} /></div>
                                <div className="content">03/04/2001</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={phone} /></div>
                                <div className="content">0708181583</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={gender} /></div>
                                <div className="content">Nam</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={address} /></div>
                                <div className="content">Địa chỉ</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={email} /></div>
                                <div className="content">Email</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={facebook} /></div>
                                <div className="content">facebook</div>
                            </div>



                        </div>
                        <div className="pro-right">
                            <div className="banner">
                                <img src={lachongImg} />
                            </div>
                            <div className="listbutton">
                                <button className="xemcv btn"> xem cv</button>
                                <button className="upcv btn">tải lên cv</button>
                                <button className="editavt btn"> đổi avatar</button>
                                <button className="editbanner btn"> đổi ảnh bìa</button>
                                <button className="edit btn">sửa thông tin cá nhân</button>
                                <button className="save btn">Lưu thông tin</button>
                            </div>

                            <div className="follow">
                                <div className="titlefollow">Công việc đã ứng tuyển</div>
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

                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default StUser;