import React from "react";
import './Posts.scss'
import Footer from "../Footer/footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import lachongImg from "../../assets/images/lachongImg.jpg"
class Posts extends React.Component {
    render() {
        return (
            <>

                <div className="jobinfo">
                    <div className="avt-name">
                        <div className="avt">
                            <img src={lachongImg} />
                        </div>
                        <div className="name">Công ty TNHH PGcom Group</div>
                        <button className="btnUngTuyen">Ứng tuyển</button>
                    </div>
                    <div className="info">
                        <div className="jobname fl">
                            <div className="title">Tên công việc:</div>
                            <div className="content">NODEJS TEAM LEADER</div>
                        </div>
                        <div className="salary fl">
                            <div className="title">Mức lương:</div>
                            <div className="content">15tr - 16tr</div>
                        </div>
                        <div className="kinhnghiem fl">
                            <div className="title">Kinh nghiệm:</div>
                            <div className="content">2 năm</div>
                        </div>
                        <div className="hantuyen fl">
                            <div className="title">Hạn tuyển:</div>
                            <div className="content">15/02/2024</div>
                        </div>
                        <div className="email fl">
                            <div className="title">Email:</div>
                            <div className="content">huydoannguyen9@gmail.com</div>
                        </div>
                        <div className="address fl">
                            <div className="title">Địa chỉ:</div>
                            <div className="content">Tầng 9, Tháp C, Toà nhà Hồ Gươm Plaza, 102 Trần Phú, Phường Mộ Lao, Quận Hà Đông, Thành phố Hà Nội</div>
                        </div>
                        <div className="gioithieu">
                            <div className="title text-break">Mô tả công việc:</div>
                            <div className="content">- Ít nhất 03 năm kinh nghiệm phát triển các sản phẩm/dự án xây dựng bằng ngôn ngữ NodeJS và React (hoặc công nghệ Frontend tương đương như Vue, Angular, và có sẵn sàng sử dụng React), trong đó có ít nhất 01 đến 02 năm kinh nghiệm quản lý team;<br></br>
                                - Có kinh nghiệm làm việc với mô hình Agile, làm việc với Database NoSQL, Mongo hoặc Firestore;<br></br>
                                - Có kinh nghiệm với điện toán đám mây, một trong: Google Cloud, FireBase, AWS, Kiến trúc hệ thống Microservice là một lợi thế;<br></br>
                                - Khả năng đọc hiểu Tiếng Anh tốt, ham tìm tòi kiến thức mới là một điểm cộng;<br></br>
                                - Có khả năng làm việc đội nhóm, Khả năng quản lý đội nhóm;<br></br>
                                - Ứng viên có đức tính tỉ mỉ trong công việc làm Product, đặt chất lượng sản phẩm và trải nghiệm người dùng là ưu tiên hàng đầu.</div>
                        </div>
                    </div>



                </div>
            </>
        )
    }
}

export default Posts;