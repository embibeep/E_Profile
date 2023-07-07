import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import path from '../../../utils/constant';
import Footer from "../../Footer/footer"
import "./ListPosts.scss"
import { ModalAvtCompanyChange, ModalBGCompanyChange, ModalEditCompany, ModalViewCV, ModalViewPost } from "../../../components/Modals";
import ModalAddPost from "../../../components/Modals/ModalPost/ModalAddPost";
import ModalAddPostt from "../../../components/Modals/ModalPost/ModalAddPostt";
import ModalAddPostNew from "../../../components/Modals/ModalPost/ModalAddPostNew";

import HTMLReactParser from "html-react-parser";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class PostLists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAvtCompanyChange: false,
            isBGCompanyChange: false,
            isEditCompany: false,
            isAddPost: false,
            isViewPost: false,
            isViewCV: false,
            job: {},
            response: {},
            listjob: [],
            isPost: false
        }
    }

    componentDidMount() {
        this.loadProfileCompany()
    }

    loadProfileCompany = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ response: { ...result[0] } })
                console.log(result[0])
                this.loadListJobs();
            })
            .catch(error => console.log('error', error)).finally(() => {
                console.log(this.state.response)
            });
    }


    loadListJobs = async () => {
        console.log(this.state.response?.credential?._id)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Job",
            "pipeline": [
                {
                    "$match": {
                        ":company": this.state.response?.credential?._id
                    }
                },
                {
                    "$lookup": {
                        "from": "Company",
                        "localField": "company",
                        "foreignField": "_id",
                        "as": "company"
                    }
                },
                {
                    "$unwind": "$company"
                },
                {
                    "$lookup": {
                        "from": "Student",
                        "localField": "candidates",
                        "foreignField": "_id",
                        "as": "candidates"
                    }
                },
            ]
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1", requestOptions)
            .then(listjob => listjob.json())
            .then(result => {
                this.setState({ listjob: result })
            })
            .catch(error => console.log('error', error));
    }



    handlePopUp = (job) => {
        this.setState({
            job: { ...job },
            isAddPost: true
        })
    }


    togglePopUp = () => {
        this.setState({
            isAddPost: !this.state.isAddPost,
            job: {}
        })
    }

    handlePopUpp = () => {
        this.setState({
            isPost: true
        })
    }


    togglePopUpp = () => {
        this.setState({
            isPost: !this.state.isPost,
        })
    }
    handlePopUp2 = (job) => {
        this.setState({
            job: { ...job },
            isAddPost: true
        })
    }


    togglePopUp2 = () => {
        this.setState({
            isAddPost: !this.state.isAddPost,
            job: {}
        })
    }


    render() {


        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>

                <div className='btnExit'>
                    <Link to={path.COMUSER} >
                        <button className='btnn'>Quay Lại Hồ Sơ</button>
                    </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btnn' onClick={() => this.handlePopUpp()}>Đăng bài tuyển</button>

                    <ModalAddPostt
                        isOpen={this.state.isPost}
                        toggleFromParent={this.togglePopUpp}
                        loadJob={this.loadListJobs}
                        res={this.state.response}
                    />

                </div>

                <div className='listPosts'>
                    <div className='top'>
                        <table class="table">
                            <thead >
                                <tr>
                                    <th scope="col">Tên công việc</th>
                                    <th scope="col">Mức lương</th>
                                    <th scope="col">Kinh nghiệm</th>
                                    <th scope="col">Hạn tuyển</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Địa chỉ</th>
                                    <th scope="col">Mô tả</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listjob.map(item => {
                                    return <tr className='rowdata' onClick={() => this.handlePopUp(item)}>

                                        <td><p>{item.title}</p></td>
                                        <td><p>{item.salary}</p></td>
                                        <td><p>{item.exp}</p></td>
                                        <td><p>{item.expireDate}</p></td>
                                        <td><p>{item.email}</p></td>
                                        <td><p>{item.address}</p></td>
                                        <td><p>{HTMLReactParser(`${item.description}`)}</p></td>
                                    </tr>

                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className='bot'>

                    </div>
                    <ModalAddPost
                        isOpen={this.state.isAddPost}
                        toggleFromParent={this.togglePopUp}
                        loadJob={this.loadListJobs}
                        job={this.state.job}

                    />


                </div>
                <Footer />

            </>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};



// export default connect(mapStateToProps, mapDispatchToProps)(PostList);
export default PostLists;