import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RecruitPost from '../../RecruitmentPost/RecruitmentPost';
import './ModalAddPost.scss'
import lachongImg from "../../../assets/images/lachongImg.jpg"

class ModalAddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // jobname: ``,
            // companyname: ``,
            // salary: ``,
            // exp: ``,
            // address: ``,
            // date: ``,
            // note: ``,
            // require: ``,
            // postType: ``,
            job: { ...this.props.job }
        }
    }


    componentDidMount() {
        this.setState({
            job: { ...this.props.job }
        })
        // console.log(this.job)
    }

    toggle = () => {
        this.props.toggleFromParent()
    }
    handleChangeJobname = (event) => {
        this.setState({
            job: {
                ...this.state.job,
                title: event.currentTarget.value
            }
        })
    }
    handleChangeCompanyname = (event) => {

        this.setState({
            companyname: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleChangeExp = (event) => {
        this.setState({
            exp: event.target.value
        })
    }

    handleChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleChangeDate = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    handleChangeNote = (event) => {
        this.setState({
            note: event.target.value
        })
    }

    handleChangeRequire = (event) => {
        this.setState({
            require: event.target.value
        })
    }
    handleChangePostType = (e) => {
        this.setState({
            postType: e.target.value
        })
    }

    handeleTaoMoi = () => {

    }
    render() {
        // console.log('check child props', this.props)
        // console.log('check child props', this.props.isOpen)
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-ModalAddPost'}
                size='lg'
                centered='true'
                scrollable='true'
            >

                <ModalHeader className='titlee' toggle={() => { this.toggle() }}>Tạo bài tuyển</ModalHeader>
                <ModalBody>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                        crossorigin="anonymous">

                    </link>
                    <div className="container-recruit">
                        <div className="list-recruit justify-content-center">

                            <div className="recruit-item">

                                <div className="rec-title">
                                    <div className="rec-avt">
                                        <img src={lachongImg} />
                                    </div>
                                    <div className="rec-name">
                                        <input onChange={(event) => this.handleChangeCompanyname(event)}
                                            type="text" className="rec-textbox"
                                            placeholder="Nhập tên công ty"
                                            value={this.state.job?.company?.name ?? ""} />
                                        <br />

                                    </div>
                                </div>
                                <div className="rec-jobname">
                                    <input onChange={(event) => this.handleChangeJobname(event)}
                                        type="text" className="rec-textbox"
                                        placeholder="Nhập tên công việc"
                                        value={this.state.job.title} />
                                    <br />
                                </div>

                                <div className="left-recinfo">
                                    <div className="rec-category">
                                        Mức lương
                                    </div>
                                    <div className="rec-decoration">
                                        <input onChange={(event) => this.handleChangeSalary(event)}
                                            type="text" className="rec-textbox"
                                            placeholder="Nhập mức lương"
                                            value={this.props.job.salary} />
                                        <br />
                                    </div>
                                    <div className="rec-category">
                                        Kinh nghiệm
                                    </div>
                                    <div className="rec-decoration">
                                        <input onChange={(event) => this.handleChangeExp(event)}
                                            type="text" className="rec-textbox"
                                            placeholder="Nhập yêu cầu số năm kinh nghiệm"
                                            value={this.props.job.exp} />
                                        <label></label>
                                    </div>
                                    <div className="rec-category">
                                        Email
                                    </div>
                                    <div className="rec-decoration">
                                        <input onChange={(event) => this.handleChangeAddress(event)}
                                            type="text" className="rec-textbox"
                                            placeholder="Nhập email"
                                            value={this.props.job.email} />
                                        <br />
                                    </div>
                                    <div className="rec-category">
                                        Địa chỉ
                                    </div>
                                    <div className="rec-decoration">
                                        <input onChange={(event) => this.handleChangeAddress(event)}
                                            type="text" className="rec-textbox"
                                            placeholder="Nhập địa chỉ"
                                            value={this.props.job.address} />
                                        <br />
                                    </div>

                                    <div className="rec-category">
                                        Hạn tuyển
                                    </div>
                                    <div className="rec-decoration">
                                        <input onChange={(event) => this.handleChangeDate(event)}
                                            type="text" className="rec-textbox"
                                            value={this.props.job.expireDate} />
                                        <br />
                                    </div>


                                </div>

                                <div className="right-recinfo">
                                    <div className="rec-category">
                                        Yêu cầu
                                    </div>
                                    <div className="rec-decoration">
                                        <textarea className="form-control"
                                            onChange={(event) => this.handleChangeNote(event)}
                                            placeholder="Nhập mô tả hoặc yêu cầu công việc"
                                            value={this.props.job.description}>
                                        </textarea>

                                    </div>
                                </div>

                                <div className="footer-recinfo">

                                    <Button onClick={() => this.handleTaoMoi()} className="btn-submit">Tạo mới</Button>
                                    <Button onClick={() => this.handleThem()} className="btn-submit">Đăng bài tuyển</Button>
                                    <Button onClick={() => this.handleSua()} className="btn-submit">Cập nhật</Button>
                                    <Button onClick={() => this.handleXoa()} className="btn-submit">Xóa bài tuyển</Button>
                                </div>
                            </div>

                        </div>

                    </div>
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={() => { this.toggle() }}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter> */}
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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalAddPost);
export default ModalAddPost;