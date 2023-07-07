import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import lachongImg from "../../../assets/images/lachongImg.jpg"
import iconbithday from "../../../assets/images/icons-birthday.png"
import phone from "../../../assets/images/phone.png"
import address from "../../../assets/images/address.png"
import email from "../../../assets/images/email.png"
import facebook from "../../../assets/images/facebook.png"
import gender from "../../../assets/images/gender.png"
import profileIcon from "../../../assets/images/profileIcon.png"
import iconFollow from "../../../assets/images/iconFollow.png"
import website from "../../../assets/images/website.png"
import "./ViewProfileCompany.scss"
import { Link } from "react-router-dom";
import path from "../../../utils/constant";

function ViewProfileCompany(props) {

    const [isAvtCompanyChange, setisAvtCompanyChange] = useState(false);
    const [isEditCompany, setisEditCompany] = useState(false);
    const [isAvtStudentChange, setisAvtStudentChange] = useState(false);
    const [isAddPost, setisAddPost] = useState(false);
    const [isViewFollow, setisViewFollow] = useState(false);
    const [isViewPost, setisViewPost] = useState(false);
    const [companyInfo, setcompanyInfo] = useState([]);
    const [listjob, setlistjob] = useState({});
    const [candidates, setcandidates] = useState([]);
    const [response, setresponse] = useState([]);
    const [infor, setinfor] = useState({})

    useEffect(() => {
        setinfor({ ...props.infor })
    }, [props.infor])


    return (


        <Modal isOpen={props.isOpen}
            toggle={props.toggleFromParent}
            className={'modal-ModalAddPost'}
            size='xl'
            centered='true'
            scrollable='true'
        >

            <ModalBody className='mod-body' style={{ width: "100%", height: "1000px" }}>

                <div className='all'>

                    <div className='top'>
                        <div className="avt-name">
                            <div className="avt">
                                <img src={lachongImg} />
                            </div>
                            <div className="name">{infor.name}</div>
                        </div>

                        <div className='about'>
                            <div className='inforall'>

                                <div className="info">
                                    <div className="icon"><img src={email} /></div>
                                    <div className="content">&nbsp; &nbsp;{infor.email}</div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={phone} /></div>
                                    <div className="content">&nbsp; &nbsp;{infor.phone}</div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={website} /></div>
                                    <div className="content">&nbsp; &nbsp;{infor.website}</div>
                                </div>
                                <div className="info">
                                    <div className="icon"><img src={address} /></div>
                                    <div className="content diachi">&nbsp; &nbsp;{infor.address}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bot'>
                        {HTMLReactParser(`${infor.introduce}`)}
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )

}

export default ViewProfileCompany;
