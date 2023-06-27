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
import { ModalAvtStudentChange, ModalBGStudentChange, ModalEditStudent, ModalViewCV, ModalUploadCV, ModalViewPost } from "../../../components/Modals";
import iconFollow from "../../../assets/images/iconFollow.png"
import Footer from "../../../components/Footer/footer";
import Nav from "../../../components/Navigation/Nav";



class StUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isViewCV: false,
            isUploadCV: false,
            isAvtStudentChange: false,
            isBGStudentChange: false,
            isEditStudent: false,
            isViewPost: false,
            response: {},
        }
    }

    componentDidMount() {
        this.loadStudent();
    }

    loadStudent = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODc2ODkzOTAsInN1YiI6IjY0OTY2YmQ3ZjQ0YjViOTYwMTFjM2Q3OSJ9.PH0inGEsfxEu2iNCB1ats25WBnTObl0zA4JyNd3efdM");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ response: { ...result[0] } })
            })
            .catch(error => console.log('error', error)).finally(() => {
                console.log(this.state.response)
            });
    }

    handlePopUp1 = () => {
        this.setState({
            isViewCV: true
        })
    }

    togglePopUp1 = () => {
        this.setState({
            isViewCV: !this.state.isViewCV
        })
    }

    handlePopUp2 = () => {
        this.setState({
            isUploadCV: true
        })
    }

    togglePopUp2 = () => {
        this.setState({
            isUploadCV: !this.state.isUploadCV
        })
    }

    handlePopUp3 = () => {
        this.setState({
            isAvtStudentChange: true
        })
    }

    togglePopUp3 = () => {
        this.setState({
            isAvtStudentChange: !this.state.isAvtStudentChange
        })
    }

    handlePopUp4 = () => {
        this.setState({
            isBGStudentChange: true
        })
    }

    togglePopUp4 = () => {
        this.setState({
            isBGStudentChange: !this.state.isBGStudentChange
        })
    }

    handlePopUp5 = () => {
        this.setState({
            isEditStudent: true
        })
    }

    togglePopUp5 = () => {
        this.setState({
            isEditStudent: !this.state.isEditStudent
        })
    }

    handlePopUp6 = () => {
        this.setState({
            isViewPost: true
        })
    }

    togglePopUp6 = () => {
        this.setState({
            isViewPost: !this.state.isViewPost
        })
    }

    render() {
        return (
            <>
                <Nav />

                <div className="all">
                    <div className="profileNV">

                        <div className="pro-left">
                            <div className="avt-name">
                                <div className="avt">
                                </div>
                                <div className="name">{this.state.response.name}</div>
                            </div>
                            <div className="gioithieu">
                                <div className="titleGT">Giới Thiệu</div>
                                <div className="contentGT text-break">{this.state.response.introduce}</div>
                            </div>

                            <div className="info">
                                <div className="icon"><img src={iconbithday} /></div>
                                <div className="content">{this.state.response?.credential?.dateOfBirth ?? ""}</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={phone} /></div>
                                <div className="content">{this.state.response?.credential?.phone ?? ""}</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={gender} /></div>
                                <div className="content">{this.state.response?.credential?.gender ?? ""}</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={address} /></div>
                                <div className="content">{this.state.response?.credential?.address ?? ""}</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={email} /></div>
                                <div className="content">{this.state.response.email}</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={facebook} /></div>
                                <div className="content">{this.state.response.credential?.externalLink?.link ?? ""}</div>
                            </div>



                        </div>
                        <div className="pro-right">
                            <div className="banner">
                                {/* <img src={lachongImg} /> */}
                            </div>
                            <div className="listbutton">
                                <button className="xemcv btn" onClick={() => this.handlePopUp1()}> xem cv</button>

                                <ModalViewCV
                                    isOpen={this.state.isViewCV}
                                    toggleFromParent={this.togglePopUp1} />

                                <button className="upcv btn" onClick={() => this.handlePopUp2()}>tải lên cv</button>

                                <ModalUploadCV
                                    isOpen={this.state.isUploadCV}
                                    toggleFromParent={this.togglePopUp2} />

                                <button className="editavt btn" onClick={() => this.handlePopUp3()}> đổi avatar</button>

                                <ModalAvtStudentChange
                                    isOpen={this.state.isAvtStudentChange}
                                    toggleFromParent={this.togglePopUp3} />


                                <ModalBGStudentChange
                                    isOpen={this.state.isBGStudentChange}
                                    toggleFromParent={this.togglePopUp4} />

                                <button className="edit btn" onClick={() => this.handlePopUp5()}>sửa thông tin cá nhân</button>

                                <ModalEditStudent
                                    isOpen={this.state.isEditStudent}
                                    toggleFromParent={this.togglePopUp5} />

                            </div>

                            <div className="follow">
                                <div className="titlefollow">Công việc đã ứng tuyển</div>
                                <div className="listfollow overflow-auto">
                                    <div className="jobItem" onClick={() => this.handlePopUp6()}>


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

                <Footer />
            </>

        )
    }
}

export default StUser;