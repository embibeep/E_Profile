import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import "./Company.scss"
import Footer from "../../components/Footer/footer.js"
class Company extends React.Component {
    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>

                <SearchBar />
                {/* <Posts /> */}
                <div className="company">
                    <div className="filter">
                        <select className="select" aria-label="Default select example">
                            <option selected>Khu vực</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="list-company row justify-content-center">

                        {/* danh sách tuyển thực tập sinh */}
                        <div className="company-item col-6">

                            <div className="banner">
                            </div>

                            <div className="title">
                                <div className="avt">
                                </div>
                                <div className="name">
                                    CÔNG TY TNHH ABCXYZ
                                </div>
                            </div>
                            <div className="under-border">

                            </div>
                            <div className="decoration">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="company-item col-6">

                            <div className="banner">
                            </div>

                            <div className="title">
                                <div className="avt">
                                </div>
                                <div className="name">
                                    CÔNG TY TNHH ABCXYZ
                                </div>
                            </div>
                            <div className="under-border">

                            </div>
                            <div className="decoration">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="company-item col-6">

                            <div className="banner">
                            </div>

                            <div className="title">
                                <div className="avt">
                                </div>
                                <div className="name">
                                    CÔNG TY TNHH ABCXYZ
                                </div>
                            </div>
                            <div className="under-border">

                            </div>
                            <div className="decoration">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="company-item col-6">

                            <div className="banner">
                            </div>

                            <div className="title">
                                <div className="avt">
                                </div>
                                <div className="name">
                                    CÔNG TY TNHH ABCXYZ
                                </div>
                            </div>
                            <div className="under-border">

                            </div>
                            <div className="decoration">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="company-item col-6">

                            <div className="banner">
                            </div>

                            <div className="title">
                                <div className="avt">
                                </div>
                                <div className="name">
                                    CÔNG TY TNHH ABCXYZ
                                </div>
                            </div>
                            <div className="under-border">

                            </div>
                            <div className="decoration">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="company-item col-6">

                            <div className="banner">
                            </div>

                            <div className="title">
                                <div className="avt">
                                </div>
                                <div className="name">
                                    CÔNG TY TNHH ABCXYZ
                                </div>
                            </div>
                            <div className="under-border">

                            </div>
                            <div className="decoration">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>

                    </div>

                </div>

            </>
        )
    }
}

export default Company;