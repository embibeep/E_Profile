import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import "./Company.scss"
import ModalViewCompany from "../../components/Modals/ModalPost/ModalViewCompany.js";
import Footer from "../../components/Footer/footer.js"
import Nav from "../../components/Navigation/Nav.js";

import path from '../../utils/constant';
class Company extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isViewPost: false
        }
    }

    handlePopUp = () => {
        this.setState({
            isViewPost: true
        })
    }

    togglePopUp = () => {
        this.setState({
            isViewPost: !this.state.isViewPost
        })
    }

    render() {
        return (
            <>
                <Nav />
                <SearchBar />
                {/* <Posts /> */}
                <div className="company">
                    <div className="filter">
                        <select className="select2 form-control" aria-label="Default select example">
                            <option selected>Khu vực</option>
                            <option value="1">Hồ Chí Minh</option>
                        </select>
                    </div>

                    <div className="list-company row justify-content-center">

                        <div className="company-item col-6" onClick={() => this.handlePopUp()}>

                            <ModalViewCompany
                                isOpen={this.state.isViewPost}
                                toggleFromParent={this.togglePopUp}

                            />

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
                <Footer />

            </>
        )
    }
}

export default Company;