import React from "react";
import Slider from "react-slick";
import "../working.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './staffrecruit.scss';
import profileIcon from "../../../assets/images/profileIcon.png"
import iconFollow from "../../../assets/images/iconFollow.png"
import { Link } from "react-router-dom";
import path from "../../../utils/constant";

class SimpleSlider extends React.Component {
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
                <div className="section-staff">
                    <div className="special-content">
                        <Slider {...settings}>
                            <div className="img-customize">
                                <div className="tuyenNV row justify-content-center">
                                    <div className="jobItem col-4">

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
                                                <Link to={path.POSTS}>
                                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-customize">
                                <div className="tuyenNV row justify-content-center">
                                    <div className="jobItem col-4">

                                        <div className="Top-Job">
                                            <div className="icon">
                                                <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                            </div>
                                            <div className="Top-Left">
                                                <div className="nameJob">
                                                    SoftWare Engineer 2
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
                                                <Link to={path.POSTS}>
                                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="img-customize">
                                <div className="tuyenNV row justify-content-center">
                                    <div className="jobItem col-4">

                                        <div className="Top-Job">
                                            <div className="icon">
                                                <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                            </div>
                                            <div className="Top-Left">
                                                <div className="nameJob">
                                                    SoftWare Engineer 3
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
                                                <Link to={path.POSTS}>
                                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-customize">
                                <div className="tuyenNV row justify-content-center">
                                    <div className="jobItem col-4">

                                        <div className="Top-Job">
                                            <div className="icon">
                                                <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                            </div>
                                            <div className="Top-Left">
                                                <div className="nameJob">
                                                    SoftWare Engineer 4
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
                                                <Link to={path.POSTS}>
                                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-customize">
                                <div className="tuyenNV row justify-content-center">
                                    <div className="jobItem col-4">

                                        <div className="Top-Job">
                                            <div className="icon">
                                                <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                            </div>
                                            <div className="Top-Left">
                                                <div className="nameJob">
                                                    SoftWare Engineer 5
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
                                                <Link to={path.POSTS}>
                                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-customize">
                                <div className="tuyenNV row justify-content-center">
                                    <div className="jobItem col-4">

                                        <div className="Top-Job">
                                            <div className="icon">
                                                <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                            </div>
                                            <div className="Top-Left">
                                                <div className="nameJob">
                                                    SoftWare Engineer 6
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
                                                <Link to={path.POSTS}>
                                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div >
                </div >
            </>
        )
    }

}
export default SimpleSlider;