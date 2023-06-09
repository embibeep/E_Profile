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
import { SimpleSlider, JobCard } from "./section/staffrecruit.js";
import ModalAddPost from "../../components/Modals/ModalPost/ModalAddPost.js";
import { firestore } from "../../firebase";
import { collection, doc, getDocs, getDoc, onSnapshot, query, where } from "firebase/firestore";
class Working extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAddPost: false,
            // jobs: []

        }
    }

    // async componentDidMount() {
    //     // let response = await getStaffPost('')
    //     // console.log("get user from nodejs: ", response)

    //     let ref = collection(firestore, "Job");
    //     let snapshot = await getDocs(ref);
    //     let docs = await Promise.all(snapshot.docs.map(async function (docParam) {
    //         let data = docParam.data();
    //         let companySnapshot = await getDoc(doc(firestore, ...data.company.path.split("/ ")));
    //         let company = companySnapshot.data();
    //         let result = { ...data, company: company }
    //         return result;
    //     }));

    //     console.log(docs);
    //     this.setState({
    //         jobs: docs
    //     })
    // }



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
                            <select className="select form-control" aria-label="Default select example">
                                <option selected>Địa chỉ</option>
                                <option value="1">Đồng Nai</option>
                                <option value="2">Thủ đức</option>
                                <option value="3">Hồ Chí Minh</option>
                                <option value="4">Bình Dương</option>
                            </select>
                            <select className="select2 form-control" aria-label="Default select example">
                                <option selected value="0">Chưa có kinh nghiệm</option>
                                <option value="1">1 năm</option>
                                <option value="2">2 năm</option>
                                <option value="4">4 năm</option>
                                <option value="5">5 năm</option>
                                <option value="6">6 năm</option>

                            </select>

                        </div>
                        {/* /////////////////////////////////////////////////////////// */}
                        <div className="title-tuyenNV">
                            <p className="left">Tuyển nhân viên</p>

                        </div>

                        {/* {this.state.jobs.map((job) => {
                            return (<JobCard job={job} />)
                        })} */}

                        <SimpleSlider />

                    </div >
                </div>
                <Footer />
            </>
        )
    }
}

export default Working;