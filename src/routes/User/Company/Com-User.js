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
import { ModalAvtCompanyChange, ModalBGCompanyChange, ModalEditCompany, ModalAddPost, ModalViewPost } from "../../../components/Modals";
import Nav from "../../../components/Navigation/Nav";
import Footer from "../../../components/Footer/footer";
import { Link } from "react-router-dom";
import path from "../../../utils/constant";
import ModalViewFollow from "../../../components/Modals/ModalStudent/ViewFollow"
import HTMLReactParser from "html-react-parser";
class ComUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAvtCompanyChange: false,
            isBGCompanyChange: false,
            isEditCompany: false,
            isAddPost: false,
            isViewPost: false,
            isViewFollow: false,
            companyInfo: [],
            listjob: [],
            candidates: [],
            response: {},
            isShowUserFollow: false,
            userFollow: {},
            isUserFollow: false
        }
    }


    componentDidMount() {
        this.loadProfileCompany()

    }

    loadListJobs = async () => {
        console.log(this.state.response?.credential?._id)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Job",
            "pipeline": [
                {
                    "$match": {
                        ":company": this.state.response?.credential?._id
                    }
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
            .then(listjob => listjob.json())
            .then(result => {
                this.setState({ listjob: result })
            })
            .catch(error => console.log('error', error));
    }

    loadProfileCompany = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ response: { ...result[0] } })
                console.log(result[0])
                this.loadListJobs();
            })
            .catch(error => console.log('error', error)).finally(() => {
                console.log(this.state.response)
            });
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

    handlePopUp6 = (candidates) => {
        this.setState({
            isViewFollow: true,
            candidates: [...candidates]
        })
    }

    togglePopUp6 = () => {
        this.setState({
            isViewFollow: !this.state.isViewFollow,
            candidates: []
        })
    }
    handlePopUp7 = (userFollow) => {
        this.setState({
            isUserFollow: true,
            userFollow: { ...userFollow }
        })
    }

    togglePopUp7 = () => {
        this.setState({
            isUserFollow: !this.state.isUserFollow,
            userFollow: {}
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
                                <div className="name">{this.state.response?.credential?.name ?? ""}</div>
                            </div>
                            <div className="gioithieu">
                                <div className="titleGT">Giới thiệu</div>
                                <div className="contentGT text-break overflow-auto">
                                    {HTMLReactParser(`${this.state.response?.credential?.introduce ?? ""}`)}
                                </div>
                            </div>

                        </div>
                        <div className="pro-right">

                            <div className="listbutton">
                                <button className="editavt btn" onClick={() => this.handlePopUp1()}> đổi avatar</button>

                                <ModalAvtCompanyChange
                                    isOpen={this.state.isAvtCompanyChange}
                                    toggleFromParent={this.togglePopUp1}
                                    loadProfileCompany={this.loadProfileCompany}
                                    profile={this.state.response.credential}
                                    test={'abc'} />

                                <Link to={path.POSTLISTS} className="editbanner btn" >
                                    Quản lý bài đăng </Link>

                                <button className="editGT btn" onClick={() => this.handlePopUp3()}>sửa thông tin giới thiệu</button>

                                <ModalEditCompany
                                    isOpen={this.state.isEditCompany}
                                    toggleFromParent={this.togglePopUp3}
                                    loadProfileCompany={this.loadProfileCompany}
                                    profile={this.state.response.credential}
                                    test={'abc'} />


                            </div>
                            <div className="infoall">
                                <div className="info">
                                    <div className="icon"><img src={address} /></div>
                                    <div className="content diachi">&nbsp; &nbsp;{this.state.response?.credential?.address ?? ""}
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={email} /></div>
                                    <div className="content">&nbsp; &nbsp;{this.state.response?.credential?.email ?? ""}</div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={phone} /></div>
                                    <div className="content">&nbsp; &nbsp;{this.state.response?.credential?.phone ?? ""}</div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={website} /></div>
                                    <div className="content">&nbsp; &nbsp;{this.state.response?.credential?.website ?? ""}</div>
                                </div>
                            </div>
                            <div className="follow">
                                <div className="titlefollow">Đang tuyển</div>
                                <div className="listfollow overflow-auto">
                                    {this.state.listjob.map(item => {
                                        // onClick={() => this.handlePopUp6(item.candidates)}
                                        return <div className="jobItem" onClick={() => this.handlePopUp6(item.candidates)}>
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


                                </div>

                                <div className="titlefollow">Đang ứng tuyển</div>
                                <div className="listfollow overflow-auto">
                                    {this.state.candidates?.map(item => {
                                        // onClick={() => this.handlePopUp6(item.candidates)}
                                        return <div className="useritem" onClick={() => this.handlePopUp7(item)}>
                                            <div className="icon object-fit: fill"><img src={profileIcon} /></div>
                                            <div className="content">{item.name}</div>
                                        </div>
                                    })}

                                </div>
                            </div>
                            <ModalViewFollow
                                isOpen={this.state.isUserFollow}
                                toggleFromParent={this.togglePopUp7}
                                userFollow={this.state.userFollow}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </>

        )
    }
}

export default ComUser;