import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import "./working.scss"
import Nav from "../../components/Navigation/Nav.js";
import Footer from "../../components/Footer/footer.js";
import { Link } from "react-router-dom";
import path from "../../utils/constant.js";
import { getStaffPost } from '../../services/userService.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./section/staffrecruit.js";
import ModalAddPost from "../../components/Modals/ModalPost/ModalAddPost.js";
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
                <Nav />
                <SearchBar />
                <div className="all">
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

                        </div>
                        <SimpleSlider />

                    </div >
                </div>
                <Footer />
            </>
        )
    }
}

export default Working;