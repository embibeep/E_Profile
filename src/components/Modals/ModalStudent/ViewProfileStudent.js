import React, { useEffect, useState, useRef, useMemo } from 'react';
import '../../../routes/User/Students/St-User.scss';
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
import { Link, NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




function ViewProfileStudent(props) {

    const [isXemCV, setisXemCV] = useState(false);
    const [isUploadCV, setisUploadCV] = useState(false);
    const [isAvtStudentChange, setisAvtStudentChange] = useState(false);
    const [isBGStudentChange, setisBGStudentChange] = useState(false);
    const [isEditStudent, setisEditStudent] = useState(false);
    const [isViewPost, setisViewPost] = useState(false);
    const [sinhvien, setsinhvien] = useState([]);
    const [job, setjob] = useState({});
    const [response, setresponse] = useState([]);


    useEffect(() => {

    }, [])



    return (
        <>
            <Modal isOpen={props.isOpen}
                toggle={props.toggleFromParent}
                className={'modal-ModalViewPost'}
                size='lg'
                centered='true'
                scrollable='true'
            >
                <ModalBody style={{ width: "100%", height: "450px" }}>
                    <div className="all">
                        <div className="profileNV">

                            <div className="pro-left">
                                <div className="avt-name">
                                    <div className="avt">
                                    <img style={{ flexShrink: "0", minWidth: "510px", minHeight: "210px", objectFit: "cover" }} src={this.state.response?.credential?.banner ?? ""} />
                                    </div>
                                    <div className="name">name</div>
                                </div>
                                <div className="gioithieu">
                                    <div className="titleGT">Giới Thiệu</div>
                                    <div className="contentGT text-break">
                                        introduce
                                    </div>
                                </div>

                                <div className="info">
                                    <div className="icon"><img src={iconbithday} /></div>
                                    <div className="content">dateOfBirth</div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={phone} /></div>
                                    <div className="content">phone</div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={gender} /></div>
                                    {/* {sinhvien?.credential?.gender === true ? <div className="content">Nam</div> : <div className="content">Nữ</div>} */}
                                    gender
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={address} /></div>
                                    <div className="content">address</div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={email} /></div>
                                    <div className="content">email</div>
                                </div>

                            </div>
                            <div className="pro-right">
                                <div className="banner">
                                    <img src={lachongImg} />
                                </div>
                                <div className="listbutton">
                                    <Link to={path.XemCV}><button className="xemcv btn"> xem cv</button></Link>

                                </div>

                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            <Footer />
        </>
    )
}

export default ViewProfileStudent;