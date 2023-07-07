import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Posts from '../../Posts/Posts'
import lachongImg from "../../../assets/images/lachongImg.jpg"
import './ModalViewPost.scss'
import HTMLReactParser from "html-react-parser";
import XemCVhtml from "../ModalStudent/XemCVhtml"
import SaveIdStudent from "./SaveIdStudent"
import path from "../../../utils/constant";
class ModalViewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: {},
            sinhvien: {},
            verify: {}

        }
    }

    componentDidMount() {
        this.loadStudent();
        this.getInforToken()
    }

    getInforToken = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ verify: { ...result[0] } })
            })
            .catch(error => console.log('error', error));
    }



    loadStudent = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODc5MzkyNzEsInN1YiI6IjY0OTY2YmQ3ZjQ0YjViOTYwMTFjM2Q3OSJ9.s7fH2XgnM_gN8kV0X4VvSYb6O_MbAZQP_0nQo9rYYT0");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
            .then(sinhvien => sinhvien.json())
            .then(result => {
                this.setState({ sinhvien: { ...result[0] } })
            })
            .catch(error => console.log('error', error)).finally(() => {
                console.log(this.state.sinhvien)
            });
    }

    handleUngtuyen = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Job",
            "_id": this.props.job?._id,
            "modify": {
                
            }


        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    toggle = () => {
        this.props.toggleFromParent()
    }

    render() {
        // console.log('check child props', this.props)
        // console.log('check child props', this.props.isOpen)
        return (
            <>
                <Modal isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className={'modal-ModalViewPost'}
                    size='lg'
                    centered='true'
                    scrollable='true'
                >

                    <ModalHeader className='titlee' toggle={() => { this.toggle() }}>Thông tin bài tuyển</ModalHeader>
                    <ModalBody>
                        <div className="jobinfo">
                            <div className="avt-name">
                                <div className="avt">
                                    <img src={lachongImg} />
                                </div>
                                <div className="name">{this.props.job?.company?.name ?? ""}</div>
                                <div className="name"></div>
                                {this.state.verify.role == 1 ? <button type="submit" onClick={this.handleUngtuyen()} className="btnUngTuyen">Ứng tuyển</button> :
                                <div></div>}
                                
                            </div>
                            <div className="info">
                                <div className="jobname fl">
                                    <div className="title">Tên công việc:</div>
                                    <div className="content">{this.props.job.title}</div>
                                </div>
                                <div className="salary fl">
                                    <div className="title">Mức lương:</div>
                                    <div className="content">{this.props.job.salary}</div>
                                </div>
                                <div className="kinhnghiem fl">
                                    <div className="title">Kinh nghiệm:</div>
                                    <div className="content">{this.props.job.exp}</div>
                                </div>
                                <div className="hantuyen fl">
                                    <div className="title">Hạn tuyển:</div>
                                    <div className="content">{this.props.job.expireDate}</div>
                                </div>
                                <div className="email fl">
                                    <div className="title">Email:</div>
                                    <div className="content">{this.props.job.email}</div>
                                </div>
                                <div className="address fl">
                                    <div className="title">Địa chỉ:</div>
                                    <div className="content">{this.props.job.address}</div>
                                </div>
                                <div className="gioithieu">
                                    <div className="title text-break">Mô tả công việc:</div>
                                    <div className="content">{HTMLReactParser(`${this.props.job.description}`)}</div>
                                </div>
                            </div>
                        </div>

                    </ModalBody>
                </Modal>
                
            </>
        )
    }
}


// export default connect(mapStateToProps, mapDispatchToProps)(ModalViewPost);
export default ModalViewPost;