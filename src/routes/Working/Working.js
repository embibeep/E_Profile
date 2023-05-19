import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import "./working.scss"
import profileIcon from "../../assets/images/profileIcon.png"
import iconFollow from "../../assets/images/iconFollow.png"
import Footer from "../../components/Footer/footer.js";
import { Link } from "react-router-dom";
import path from "../../utils/constant.js";
import { getStaffPost } from '../../services/userService.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./section/staffrecruit.js";
import ModalAddPost from "../../components/Modals/ModalAddPost.js";
class Working extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAddPost: false
        }
    }

    async componentDidMount() {
        let response = await getStaffPost('')
        console.log("get user from nodejs: ", response)
    }

    handlePopUp = () => {
        this.setState({
            isAddPost: true
        })
    }

    togglePopUp = () => {
        this.setState({
            isAddPost: !this.state.isAddPost
        })
    }

    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
                <SearchBar />
                <div className="working">

                    <div className="filter">
                        <select className="select" aria-label="Default select example">
                            <option selected>Mức lương</option>
                            <option value="1">5 triệu</option>
                            <option value="2">10 triệu</option>
                            <option value="3">15 triệu</option>
                        </select>
                        <select className="select" aria-label="Default select example">
                            <option selected>Kinh nghiệm</option>
                            <option value="1">1 năm</option>
                            <option value="2">2 năm</option>
                            <option value="3">3 năm</option>
                        </select>
                        <button onClick={() => this.handlePopUp()} className="create-post">Đăng bài tuyển</button>
                        <ModalAddPost
                            isOpen={this.state.isAddPost}
                            toggleFromParent={this.togglePopUp}
                            test={'abc'}

                        />
                    </div>
                    {/* /////////////////////////////////////////////////////////// */}
                    <div className="title-tuyenNV">
                        <p className="left">Tuyển nhân viên</p>
                        <p className="right">&gt;&gt;</p>
                    </div>
                    <SimpleSlider />


                    <div className="line">

                    </div>

                    <div className="title-tuyenNV">
                        <p className="left">Tuyển thực tập sinh</p>
                        <p className="right">>></p>
                    </div>
                    <SimpleSlider />
                </div >
                <Footer />
            </>
        )
    }
}

export default Working;