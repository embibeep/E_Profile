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
import { ModalAvtStudentChange, ModalBGStudentChange, ModalEditStudent, ModalUploadCV, ModalViewPost } from "../../../components/Modals";
import ModalXemCV from "../../../components/Modals/ModalStudent/XacNhanDangNhap"
import iconFollow from "../../../assets/images/iconFollow.png"
import Footer from "../../../components/Footer/footer";
import Nav from "../../../components/Navigation/Nav";
import path from "../../../utils/constant";
import HTMLReactParser from "html-react-parser";
import {
    Link,
    NavLink
} from "react-router-dom";




class StUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isXemCV: false,
            isUploadCV: false,
            isAvtStudentChange: false,
            isBGStudentChange: false,
            isEditStudent: false,
            isViewPost: false,
            sinhvien: [],
            job: {},
            response: []
        }
    }


    componentDidMount() {
        this.loadStudent();
        this.loadListJobs();

    }



    loadListJobs = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Job",
            "pipeline": [
                {
                    "$match": {}
                },
                {
                    "$lookup": {
                        "from": "Company",
                        "localField": "company",
                        "foreignField": "_id",
                        "as": "company"
                    }
                },
                {
                    "$unwind": "$company"
                },
                {
                    "$lookup": {
                        "from": "Student",
                        "localField": "candidates",
                        "foreignField": "_id",
                        "as": "candidates"
                    }
                },
            ]
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ response: result })
            })
            .catch(error => console.log('error', error));
    }

    ////////////
    loadStudent = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODc5MzkyNzEsInN1YiI6IjY0OTY2YmQ3ZjQ0YjViOTYwMTFjM2Q3OSJ9.s7fH2XgnM_gN8kV0X4VvSYb6O_MbAZQP_0nQo9rYYT0");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
            .then(sinhvien => sinhvien.json())
            .then(result => {
                this.setState({ sinhvien: { ...result[0] } })
            })
            .catch(error => console.log('error', error)).finally(() => {
                console.log(this.state.sinhvien)
            });
    }



    handlePopUp1 = () => {
        this.setState({
            isXemCV: true
        })
    }

    togglePopUp1 = () => {
        this.setState({
            isXemCV: !this.state.isXemCV
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

    handlePopUp6 = (job) => {
        this.setState({
            job: job,
            isViewPost: true
        })
    }

    togglePopUp6 = () => {
        this.setState({
            isViewPost: !this.state.isViewPost,
            job: {}
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
                                <div className="name">{this.state.sinhvien?.credential?.name ?? ""}</div>
                            </div>
                            <div className="gioithieu">
                                <div className="titleGT">Giới Thiệu</div>
                                <div className="contentGT text-break">
                                    {HTMLReactParser(`${this.state.sinhvien?.credential?.introduce ?? ""}`)}
                                </div>
                            </div>

                            <div className="info">
                                <div className="icon"><img src={iconbithday} /></div>
                                <div className="content">{this.state.sinhvien?.credential?.dateOfBirth ?? ""}</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={phone} /></div>
                                <div className="content">{this.state.sinhvien?.credential?.phone ?? ""}</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={gender} /></div>
                                {this.state.sinhvien?.credential?.gender === true ? <div className="content">Nam</div> : <div className="content">Nữ</div>
                                }

                            </div>
                            <div className="info">
                                <div className="icon"><img src={address} /></div>
                                <div className="content">{this.state.sinhvien?.credential?.address ?? ""}</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={email} /></div>
                                <div className="content">{this.state.sinhvien?.credential?.email ?? ""}</div>
                            </div>
                            <div className="info">
                                <div className="icon"><img src={facebook} /></div>
                                <div className="content">{this.state.sinhvien?.credential?.externalLink?.[0]?.link ?? ""}</div>
                            </div>



                        </div>
                        <div className="pro-right">
                            <div className="banner">
                                <img src={lachongImg} />
                            </div>
                            <div className="listbutton">
                                <Link to={path.XemCV}><button className="xemcv btn"> xem cv</button></Link>
                                <Link to={path.EditCV}><button className="upcv btn">Sửa CV</button></Link>



                                <button className="editavt btn" onClick={() => this.handlePopUp3()}> đổi avatar</button>

                                <ModalAvtStudentChange
                                    isOpen={this.state.isAvtStudentChange}
                                    toggleFromParent={this.togglePopUp3} />

                                <button className="editavt btn" onClick={() => this.handlePopUp3()}> đổi banner</button>

                                <ModalAvtStudentChange
                                    isOpen={this.state.isAvtStudentChange}
                                    toggleFromParent={this.togglePopUp3} />


                                <ModalBGStudentChange
                                    isOpen={this.state.isBGStudentChange}
                                    toggleFromParent={this.togglePopUp4} />

                                <button className="edit btn" onClick={() => this.handlePopUp5()}>sửa thông tin cá nhân</button>

                                <ModalEditStudent
                                    isOpen={this.state.isEditStudent}
                                    toggleFromParent={this.togglePopUp5}
                                    loadStudent={this.loadStudent}
                                    student={this.state.sinhvien.credential} />

                            </div>

                            <div className="follow">
                                <div className="titlefollow">Công việc đã ứng tuyển</div>
                                <div className="listfollow overflow-auto">
                                    {this.state.response.map(item => {
                                        return <div className="jobItem" onClick={() => this.handlePopUp6(item)}>
                                            <div className="Top-Job">
                                                <div className="icon">
                                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                                </div>
                                                <div className="Top-Left">
                                                    <div className="nameJob">
                                                        {item.title}
                                                    </div>
                                                    <div className="nameCompany">
                                                        {item.company.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}

                                    <ModalViewPost
                                        isOpen={this.state.isViewPost}
                                        toggleFromParent={this.togglePopUp6}
                                        job={this.state.job}
                                    />

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