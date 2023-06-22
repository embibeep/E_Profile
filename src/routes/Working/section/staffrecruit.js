import React, { useState } from "react";
import Slider from "react-slick";
import "../working.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './staffrecruit.scss';
import profileIcon from "../../../assets/images/profileIcon.png"
import iconFollow from "../../../assets/images/iconFollow.png"
import { Link } from "react-router-dom";
import path from "../../../utils/constant";
import ModalViewPost from "../../../components/Modals/ModalPost/ModalViewPost";

import { database } from '../../../firebase'

export const JobCard = (props) => {
    const [isViewPost, setIsViewPost] = useState(false);

    function handlePopUp() {
        setIsViewPost(true);
    }

    function togglePopUp() {
        setIsViewPost(!isViewPost);
    }

    return (
        <>
            <div className="tuyenNV row justify-content-center">
                <div className="jobItem col-4" onClick={() => handlePopUp()}>
                    <ModalViewPost
                        isOpen={isViewPost}
                        toggleFromParent={togglePopUp}
                    />

                    <div className="Top-Job">
                        <div className="icon">
                            <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                        </div>
                        <div className="Top-Left">
                            <div className="nameJob">
                                {props.job.title}
                            </div>
                            <div className="nameCompany">
                                {`${props.job.company.name}`}
                            </div>
                        </div>
                    </div>

                    <div className="Bot-job">
                        <div className="item">
                            {props.job.salary}
                        </div>
                        <div className="item">
                            {props.job.exp}
                        </div>
                        <div className="item">
                            {props.job.company.address}
                        </div>

                        <div className="iconFollow">

                            {/* <img className="icon" src={iconFollow} alt="icon follow" /> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export class SimpleSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }



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
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
            <>


                <div className="tuyenNV row justify-content-center">
                    <div className="jobItem col-4" onClick={() => this.handlePopUp()}>
                        <ModalViewPost
                            isOpen={this.state.isViewPost}
                            toggleFromParent={this.togglePopUp}

                        />

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

                        <div className="Bot-job">
                            <div className="item">
                                từ 15 - 16 triệu VNĐ
                            </div>
                            <div className="item">
                                Kinh nghiệm từ 2 năm
                            </div>
                            <div className="item">
                                Quận Thủ Đức, thành phố Hồ Chí Minh
                            </div>

                            <div className="iconFollow">

                                {/* <img className="icon" src={iconFollow} alt="icon follow" /> */}

                            </div>
                        </div>
                    </div>

                    <div className="btn">
                        <button className="btnXemThem" type="button">Xem thêm</button>
                    </div>
                </div>




            </>
        )
    }

}