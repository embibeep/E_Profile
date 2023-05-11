import React from "react";
import './St-User.scss';
import Footer from "../../../components/Footer/footer";

class StUser extends React.Component {
    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>

                <div className="container-users">
                    <div className="list-student row justify-content-center">

                        {/* danh sách tuyển thực tập sinh */}
                        <div className="left-student-item col-6">


                            <div className="st-title">
                                <div className="st-avt">
                                </div>
                                <div className="st-name">
                                    TÊN SINH VIÊN
                                </div>
                            </div>
                            <div className="st-under-border">

                            </div>
                            <div className="st-category">
                                GIỚI THIỆU
                            </div>
                            <div className="st-decoration">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>

                            <div className="st-category">
                                KINH NGHIỆM
                            </div>
                            <div className="st-decoration">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>

                        <div className="right-student-item col-6">

                            <div className="st-title">
                                {/* <div className="st-category">
                                    THÔNG TIN CÁ NHÂN
                                </div> */}

                                <div className="st-under-border">
                                </div>
                                <div className="str-decoration">
                                    <span className="str-title">Ngày sinh</span><br />
                                    01/01/2001
                                </div>
                                <div className="str-decoration">
                                    <span className="str-title">Số điện thoại</span><br />
                                    0123456789
                                </div>
                                <div className="str-decoration">
                                    <span className="str-title">Email</span><br />
                                    abc@gmail.com
                                </div>
                                <div className="str-decoration">
                                    <span className="str-title">Địa chỉ</span><br />
                                    Abc, Xyz
                                </div>
                                <div className="str-decoration">
                                    <span className="str-title">Giới tính</span><br />
                                    Nam
                                </div>
                                <div className="str-decoration">
                                    <span className="str-title">Facebook</span><br />
                                    ww.abc.com
                                </div>
                                <div className="str-decoration">
                                    <span className="str-title">Instagram</span><br />
                                    www.abc.com
                                </div>
                                <div className="str-decoration">
                                    <span className="str-title">Zalo</span><br />
                                    www.abc.com
                                </div>
                            </div>
                            <div className="st-category">
                                SKILL
                            </div>
                            <div className="st-decoration">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <div>
                                <button className="btn-Print-CV">IN</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>

        )
    }
}

export default StUser;