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
import website from "../../../assets/images/website.png"
import lachongImg from "../../../assets/images/lachongImg.jpg"
import { ModalAvtCompanyChange, ModalBGCompanyChange, ModalEditCompany, ModalAddPost, ModalViewCV, ModalViewPost } from "../../../components/Modals";
import Nav from "../../../components/Navigation/Nav";
import Footer from "../../../components/Footer/footer";
import { Link } from "react-router-dom";
import path from "../../../utils/constant";
class ComUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAvtCompanyChange: false,
            isBGCompanyChange: false,
            isEditCompany: false,
            isAddPost: false,
            isViewPost: false,
            isViewCV: false
        }
    }

    handlePopUp1 = () => {
        this.setState({
            isAvtCompanyChange: true
        })
    }

    togglePopUp1 = () => {
        this.setState({
            isAvtCompanyChange: !this.state.isAvtCompanyChange
        })
    }

    handlePopUp2 = () => {

    }

    // togglePopUp2 = () => {
    //     this.setState({
    //         isBGCompanyChange: !this.state.isBGCompanyChange
    //     })
    // }

    handlePopUp3 = () => {
        this.setState({
            isEditCompany: true
        })
    }

    togglePopUp3 = () => {
        this.setState({
            isEditCompany: !this.state.isEditCompany
        })
    }

    handlePopUp4 = () => {
        this.setState({
            isAddPost: true
        })
    }

    togglePopUp4 = () => {
        this.setState({
            isAddPost: !this.state.isAddPost
        })
    }

    handlePopUp5 = () => {
        this.setState({
            isViewPost: true
        })
    }

    togglePopUp5 = () => {
        this.setState({
            isViewPost: !this.state.isViewPost
        })
    }

    handlePopUp6 = () => {
        this.setState({
            isViewCV: true
        })
    }

    togglePopUp6 = () => {
        this.setState({
            isViewCV: !this.state.isViewCV
        })
    }
    render() {
        return (
            <>
                <Nav />

                <div className="all">
                    <div className="profileCT">

                        <div className="pro-left">
                            <div className="avt-name">
                                <div className="avt">
                                </div>
                                <div className="name">Công Ty TNHH ABCXYZ...</div>
                            </div>
                            <div className="gioithieu">
                                <div className="titleGT">Giới thiệu</div>
                                <div className="contentGT text-break">aaaaaaaaaaaa...</div>
                            </div>





                        </div>
                        <div className="pro-right">
                            <div className="banner">
                                {/* <img src={lachongImg} /> */}
                            </div>

                            <div className="listbutton">
                                <button className="editavt btn" onClick={() => this.handlePopUp1()}> đổi avatar</button>

                                <ModalAvtCompanyChange
                                    isOpen={this.state.isAvtCompanyChange}
                                    toggleFromParent={this.togglePopUp1}
                                    test={'abc'} />

                                <Link to={path.POSTLISTS} className="editbanner btn" >
                                    Quản lý bài đăng </Link>

                                <button className="editGT btn" onClick={() => this.handlePopUp3()}>sửa thông tin giới thiệu</button>

                                <ModalEditCompany
                                    isOpen={this.state.isEditCompany}
                                    toggleFromParent={this.togglePopUp3}
                                    test={'abc'} />


                                <ModalAddPost
                                    isOpen={this.state.isAddPost}
                                    toggleFromParent={this.togglePopUp4}
                                    test={'abc'} />
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
                                <div className="info">
                                    <div className="icon"><img src={website} /></div>
                                    <div className="content">https://github.com/embibeep/E_Profile</div>
                                </div>
                            </div>
                            <div className="follow">
                                <div className="titlefollow">Đang tuyển</div>
                                <div className="listfollow overflow-auto">
                                    <div className="jobItem" onClick={() => this.handlePopUp5()}>

                                        <ModalViewPost
                                            isOpen={this.state.isViewPost}
                                            toggleFromParent={this.togglePopUp5} />

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
                                <div className="useritem" onClick={() => this.handlePopUp6()}>

                                    <ModalViewCV
                                        isOpen={this.state.isViewCV}
                                        toggleFromParent={this.togglePopUp6} />
                                    <div className="icon object-fit: fill"><img src={profileIcon} /></div>
                                    <div className="content">Đoàn Nguyên Huy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default ComUser;