import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Posts from '../../Posts/Posts'
import lachongImg from "../../../assets/images/lachongImg.jpg"
import './ModalViewPost.scss'
class ModalViewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    render() {
        // console.log('check child props', this.props)
        // console.log('check child props', this.props.isOpen)
        return (
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
                            <button className="btnUngTuyen">Ứng tuyển</button>
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
                                <div className="content">{this.props.job.description}</div>
                            </div>
                        </div>
                    </div>
                </ModalBody>


            </Modal>
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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalViewPost);
export default ModalViewPost;