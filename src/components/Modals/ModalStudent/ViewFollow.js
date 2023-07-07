import React, { useEffect, useState, useRef, useMemo } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import path from "../../../utils/constant";
import { Link, NavLink } from "react-router-dom";
import "./ViewFollow.scss";
import HTMLReactParser from "html-react-parser"
import profileIcon from '../../../assets/images/profileIcon.png';
import viewProfileStudent from "../../../components/Modals/ModalStudent/ViewProfileStudent";
import iconbithday from "../../../assets/images/icons-birthday.png"
import phone from "../../../assets/images/phone.png"
import gender from "../../../assets/images/gender.png"
import address from "../../../assets/images/address.png"
import email from "../../../assets/images/email.png"
import lachongImg from "../../../assets/images/lachongImg.jpg"


function ModalViewFollow(props) {


    // const [viewStudent, setViewStudent] = useState({})
    const [userFollow, setuserFollow] = useState({})
    const [isViewStudent, setisViewStudent] = useState(false)

    useEffect(() => {
        setuserFollow({ ...props.userFollow })
    }, [props.userFollow])

    const handleChangeView = () => {
        setisViewStudent({
            isViewStudent: !isViewStudent
        })
    }


    return (

        <>
            <Modal isOpen={props.isOpen}
                toggle={props.toggleFromParent}
                className={'modal-ModalViewCV'}
                size='xl'
                centered='true'
                scrollable='true'
            >
                <ModalBody className='avtinputboxviewcv' style={{ width: "100%", height: "900px" }}>

                    {!isViewStudent ?
                        <button className='btn-xemcv' onClick={handleChangeView}>Xem CV</button> :
                        <button className='btn-xemcv' onClick={handleChangeView}>Quay Lại</button>

                    }
                    {!isViewStudent ?
                        <div className='alll'>
                            <div className='top'>
                                <div className="avt-name">
                                    <div className="avt">
                                        <img style={{ flexShrink: "0", minWidth: "90px", minHeight: "90px", objectFit: "cover" }} src={userFollow?.avatar} />

                                    </div>
                                    <div className="name">{userFollow?.name}</div>
                                    <div className='bot'>
                                        {HTMLReactParser(`${userFollow?.introduce}`)}
                                    </div>
                                </div>

                                <div className='about'>
                                    <div className='inforall'>

                                        <div className="infoo">
                                            <div className="iconn"><img src={iconbithday} /></div>
                                            <div className="contentt">&nbsp; &nbsp;{userFollow?.name}</div>
                                        </div>
                                        <div className="infoo">
                                            <div className="iconn"><img src={phone} /></div>
                                            <div className="contentt">&nbsp; &nbsp;{userFollow?.phone}</div>
                                        </div>
                                        <div className="infoo">
                                            <div className="iconn"><img src={gender} /></div>
                                            {userFollow?.gender == "true" ? <div className="contentt">&nbsp; &nbsp;Nam</div> : <div className="contentt">&nbsp; &nbsp;Nữ</div>}

                                        </div>
                                        <div className="infoo">
                                            <div className="iconn"><img src={email} /></div>
                                            <div className="contentt">&nbsp; &nbsp;{userFollow?.email}
                                            </div>
                                        </div>
                                        <div className="infoo">
                                            <div className="iconn"><img src={address} /></div>
                                            <div className="contentt">&nbsp; &nbsp;{userFollow?.address}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className='allcontainer'>
                            <div className="container">
                                <div className="left">
                                    <div className="l-left">
                                        <div className="avatar">
                                        <img style={{ flexShrink: "0", minWidth: "90px", minHeight: "90px", objectFit: "cover" }} src={userFollow?.avatar} />
                                        </div>
                                        <div className="name">
                                            {userFollow?.name}
                                        </div>
                                        <div className="line-border">
                                        </div>

                                        <div className="chuyennganh">
                                            {userFollow?.cv?.chuyennganh}
                                        </div>
                                        <div className="vebanthan text-left">
                                            <div className="titleCV">BẢN ThÂN</div>
                                            <div className="content-CV">
                                                {HTMLReactParser(`${userFollow?.cv?.banthan}`)}

                                            </div>

                                        </div>
                                        <div className="kynang text-left">
                                            <div className="titleCV">KỸ NĂNG</div>
                                            <div className="content-CV">
                                                {HTMLReactParser(`${userFollow?.cv?.kynang}`)}

                                            </div>

                                        </div>

                                    </div>
                                    <div className="r-left">
                                        <div className="kinhnghiem text-left">
                                            <div className="titleCV-right">KINH NGHIỆM</div>
                                            <div className="content-CV">
                                                {HTMLReactParser(`${userFollow?.cv?.kinhnghiem}`)}

                                            </div>

                                        </div>
                                        <div className="giaoduc text-left">
                                            <div className="titleCV-right">TRƯỜNG ĐẠI HỌC</div>
                                            <div className="content-CV">
                                                {HTMLReactParser(`${userFollow?.cv?.truongdaihoc}`)}

                                            </div>
                                        </div>
                                        <div className="duan text-left">
                                            <div className="titleCV-right">DỰ ÁN</div>
                                            <div className="content-CV">
                                                {HTMLReactParser(`${userFollow?.cv?.duan}`)}

                                            </div>

                                        </div>
                                        <div className="khac text-left">
                                            <div className="titleCV-right">KHÁC</div>
                                            <div className="content-CV">
                                                {HTMLReactParser(`${userFollow?.cv?.khac}`)}

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }


                </ModalBody>
            </Modal>



        </>

    )

}


// export default connect(mapStateToProps, mapDispatchToProps)(ModalViewCV);
export default ModalViewFollow;