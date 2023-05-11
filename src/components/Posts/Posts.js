import React from "react";
import './Posts.scss'
import Footer from "../Footer/footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
class Posts extends React.Component {
    render() {
        return (
            <>
                <div className="container-recruit">
                    <div className="list-recruit row justify-content-center">

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
                                SOFTWARE ENGINEER
                            </div>
                            <div className="left-recinfo col-6">
                                <div className="rec-category">
                                    Mức lương
                                </div>
                                <div className="rec-decoration">
                                    Từ 15 - 16 triệu VND
                                </div>
                                <div className="rec-category">
                                    Kinh nghiệm
                                </div>
                                <div className="rec-decoration">
                                    Ít nhất 2 năm
                                </div>

                                <div className="rec-category">
                                    Địa chỉ
                                </div>
                                <div className="rec-decoration">
                                    Quận Thủ Đức, Thành phố Hồ Chí Minh
                                </div>

                                <div className="rec-category">
                                    Hạn tuyển
                                </div>
                                <div className="rec-decoration">
                                    14/5/2023
                                </div>

                                <div className="rec-category">
                                    GIỚI THIỆU VIỆC LÀM
                                </div>
                                <div className="rec-decoration">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>

                            <div className="right-recinfo col-6">
                                <div className="rec-category">
                                    Yêu cầu
                                </div>
                                <div className="rec-decoration">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>

                            {/* <div className="footer-recinfo col-6">
                                <Form.Select className="list-Box">
                                    <option disabled selected value>Chọn loại bài đăng</option>
                                    <option value="sv">Tuyển dụng</option>
                                    <option value="dn">Bài viết</option>
                                </Form.Select>

                                <Button className="btn-submit">Đăng bài tuyển</Button>
                            </div> */}
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default Posts;