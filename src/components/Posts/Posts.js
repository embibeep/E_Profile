import React from "react";
import './Posts.scss'
import Footer from "../Footer/footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
class Posts extends React.Component {
    render() {
        return (
            <>
                <div className="container-post">
                    <div className="list-post row justify-content-center">

                        <div className="post-item col-6">

                            <div className="post-banner">
                            </div>

                            <div className="post-title">
                                <div className="post-avt">
                                </div>
                                <div className="post-name">
                                    CÔNG TY TNHH ABCXYZ
                                </div>
                            </div>
                            <div className="post-jobname">
                                SOFTWARE ENGINEER
                            </div>
                            <div className="left-postinfo col-6">
                                <div className="post-category">
                                    Mức lương
                                </div>
                                <div className="post-decoration">
                                    Từ 15 - 16 triệu VND
                                </div>
                                <div className="post-category">
                                    Kinh nghiệm
                                </div>
                                <div className="post-decoration">
                                    Ít nhất 2 năm
                                </div>

                                <div className="post-category">
                                    Địa chỉ
                                </div>
                                <div className="post-decoration">
                                    Quận Thủ Đức, Thành phố Hồ Chí Minh
                                </div>

                                <div className="post-category">
                                    Hạn tuyển
                                </div>
                                <div className="post-decoration">
                                    14/5/2023
                                </div>

                                <div className="post-category">
                                    GIỚI THIỆU VIỆC LÀM
                                </div>
                                <div className="post-decoration">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>

                            <div className="right-postinfo col-6">
                                <div className="post-category">
                                    Yêu cầu
                                </div>
                                <div className="post-decoration">
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