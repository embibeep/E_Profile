import React from "react";
import './RecruitmentPost.scss';
import Footer from "../Footer/footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
class RecruitPost extends React.Component {
    render() {
        return (
            <>



                <div className="container-recruit">
                    <div className="list-recruit row justify-content-center">

                        {/* danh sách tuyển thực tập sinh */}
                        <div className="recruit-item col-6">

                            <div className="rec-banner">
                            </div>

                            <div className="rec-title">
                                <div className="rec-avt">
                                </div>
                                <div className="rec-name">
                                    CÔNG TY TNHH ABCXYZ
                                </div>
                            </div>
                            <div className="rec-jobname">
                                NHẬP TÊN CÔNG VIỆC
                            </div>
                            <div className="left-recinfo col-6">
                                <div className="rec-category">
                                    Mức lương
                                </div>
                                <div className="rec-decoration">
                                    Từ ... - ... triệu VND
                                </div>
                                <div className="rec-category">
                                    Kinh nghiệm
                                </div>
                                <div className="rec-decoration">
                                    ... năm
                                </div>

                                <div className="rec-category">
                                    Địa chi
                                </div>
                                <div className="rec-decoration">
                                    ...
                                </div>

                                <div className="rec-category">
                                    Hạn tuyển
                                </div>
                                <div className="rec-decoration">
                                    Nhập ngày kết thúc
                                </div>

                                <div className="rec-category">
                                    GIỚI THIỆU VIỆC LÀM
                                </div>
                                <div className="rec-decoration">
                                    Giới thiệu nội dung công việc, moi trường công ty, các ưu đãi...
                                </div>
                            </div>

                            <div className="right-recinfo col-6">
                                <div className="rec-category">
                                    Yêu cầu
                                </div>
                                <div className="rec-decoration">
                                    Nhập các yêu cầu đối với người ứng tuyển...
                                </div>
                            </div>

                            <div className="footer-recinfo col-6">
                                <Form.Select className="list-Box">
                                    <option disabled selected value>Chọn loại bài đăng</option>
                                    <option value="sv">Tuyển dụng</option>
                                    <option value="dn">Bài viết</option>
                                </Form.Select>

                                <Button className="btn-submit">Đăng bài tuyển</Button>
                            </div>
                        </div>

                    </div>

                </div>

                <Footer />
            </>
        )
    }
}

export default RecruitPost;