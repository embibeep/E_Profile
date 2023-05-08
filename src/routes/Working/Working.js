import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import StaffRecruitment from "../../components/StaffRecruitment/StaffRecruitment.js";
import "./working.scss"
import profileIcon from "../../assets/images/profileIcon.png"
import iconFollow from "../../assets/images/iconFollow.png"
import Footer from "../../components/Footer/footer.js";
import bootstrap from "bootstrap";
import { Link } from "react-router-dom";
import path from "../../utils/constant.js";

class Working extends React.Component {
    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
                <SearchBar />
                <StaffRecruitment />
                <div className="working">

                    <div className="filter">
                        <select className="select" aria-label="Default select example">
                            <option selected>Khu vực</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="select" aria-label="Default select example">
                            <option selected>Mức lương</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="select" aria-label="Default select example">
                            <option selected>Kinh nghiệm</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="select" aria-label="Default select example">
                            <option selected>Chuyên Ngành</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <Link to={path.STAFFREC} className="select">Đăng bài tuyển</Link>
                    </div>
                    {/* /////////////////////////////////////////////////////////// */}
                    <div className="title-tuyenNV">
                        <p className="left">Tuyển nhân viên</p>
                        <p className="right">&gt;&gt;</p>
                    </div>
                    <div className="tuyenNV row justify-content-center">

                        {/* danh sách tuyển dụng */}
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="line">

                    </div>

                    <div className="title-tuyenNV">
                        <p className="left">Tuyển thực tập sinh</p>
                        <p className="right">>></p>
                    </div>
                    <div className="tuyenNV row justify-content-center">

                        {/* danh sách tuyển dụng */}
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
                                </div>
                            </div>
                        </div>
                        <div className="jobItem col-4">

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        SoftWare Engineer
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
                                    <img className="icon" src={iconFollow} alt="icon follow" />
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

export default Working;