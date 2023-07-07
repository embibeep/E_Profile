import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import "./Company.scss"
import ModalViewCompany from "../../components/Modals/ModalPost/ModalViewCompany.js";
import Footer from "../../components/Footer/footer.js"
import Nav from "../../components/Navigation/Nav.js";
import HTMLReactParser from "html-react-parser";
import ViewProfileCompany from "../../components/Modals/ModalCompany/ViewProfileCompany"
import path from '../../utils/constant';
class Company extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isViewPost: false,
            res: [],
            infor: {}
        }
    }


    componentDidMount() {
        this.loadListCompany();
    }

    loadListCompany = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Company",
            "pipeline": [
                {
                    "$match": {}
                }
            ]
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ res: result })
            })
            .catch(error => console.log('error', error));
    }

    handlePopUp = (infor) => {
        this.setState({
            infor: { ...infor },
            isViewPost: true
        })
    }

    togglePopUp = () => {
        this.setState({
            isViewPost: !this.state.isViewPost,
            infor: {}
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
                        {this.state.res.map(item => {
                            return <div className="company-item col-6" onClick={() => this.handlePopUp(item)}>

                                <div className="banner">
                                </div>

                                <div className="title">
                                    <div className="avt">
                                    </div>
                                    <div className="name">
                                        {item.name}
                                    </div>
                                </div>
                                <div className="under-border">

                                </div>
                                {/* <div className="decoration">
                                    {HTMLReactParser(`${item.introduce}`)}
                                </div> */}
                            </div>
                        })}
                        <ViewProfileCompany
                            isOpen={this.state.isViewPost}
                            toggleFromParent={this.togglePopUp}
                            infor={this.state.infor}
                        />


                    </div>

                </div>
                <Footer />

            </>
        )
    }
}

export default Company;