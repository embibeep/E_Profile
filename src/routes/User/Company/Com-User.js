import React from "react";
import './Com-User.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
class ComUser extends React.Component {
    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
                <div className="container-company-user">
                    <div className="list-company-user row justify-content-center">

                        <div className="company-user-item col-6">

                            <div className="cu-banner">
                            </div>

                            <div className="cu-title">
                                <div className="cu-avt">
                                </div>
                                <div className="cu-name">
                                    Tên công ty
                                </div>
                            </div>
                            {/* <div className="rec-jobname">
                                NHẬP TÊN CÔNG TY
                            </div> */}

                            <div className="left-cuinfo col-6">
                                <div className="cu-category">
                                    Giới thiệu công ty
                                </div>
                                <div className="cu-category">
                                    Chúng tôi là ai?
                                </div>
                                <div className="cu-decoration">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                                <div className="cu-category">
                                    Thành tựu của chúng tôi
                                </div>
                                <div className="cu-decoration">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>

                                <div className="cu-category">
                                    Bạn có đang mong muốn
                                </div>
                                <div className="cu-decoration">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>

                                <div className="cu-category">
                                    Vì sao cơ hội này rất tốt với bạn
                                </div>
                                <div className="cu-decoration">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>

                            <div className="right-cuinfo col-6">
                                <div className="top-right-cuinfo col-6">
                                    <div className="cu-category">
                                        Địa chỉ công ty
                                    </div>
                                    <div className="cu-decoration">

                                    </div>
                                </div>

                                <div className="bottom-right-cuinfo col-6">
                                    <div className="cu-category">
                                        Tuyển dụng
                                    </div>
                                    <div className="cu-decoration">

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default ComUser;