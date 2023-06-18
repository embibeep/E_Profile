import React from "react";
import './RecruitmentPost.scss';
import Footer from "../Footer/footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import lachongImg from "../../assets/images/lachongImg.jpg"

class RecruitPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            jobname: ``,
            salary: ``,
            exp: ``,
            address: ``,
            date: ``,
            note: ``,
            require: ``,
            postType: ``
        }
    }

    handleChangeJobname = (event) => {
        this.setState({
            jobname: event.target.value
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

    handleSubmit = (event) => {
        alert('Nhập thành công!')
        console.log(`Jobname: `, this.state.jobname,
            `Salary: `, this.state.salary,
            `Exp: `, this.state.exp,
            `Address: `, this.state.address,
            `Date: `, this.state.date,
            `Note: `, this.state.note,
            `Require: `, this.state.require,
            `Post Type: `, this.state.postType)
    }

    render() {
        return (
            <>
                <div className="container-recruit">
                    <div className="list-recruit justify-content-center">

                        <div className="recruit-item">

                            <div className="rec-title">
                                <div className="rec-avt">
                                    <img src={lachongImg} />
                                </div>
                                <div className="rec-name">
                                    <input onChange={(event) => this.handleChangeJobname(event)} type="text" className="rec-textbox" placeholder="Nhập tên công ty" /><br />

                                </div>
                            </div>
                            <div className="rec-jobname">
                                <input onChange={(event) => this.handleChangeJobname(event)} type="text" className="rec-textbox" placeholder="Nhập tên công việc" /><br />
                            </div>

                            <div className="left-recinfo">
                                <div className="rec-category">
                                    Mức lương
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={(event) => this.handleChangeSalary(event)} type="text" className="rec-textbox" placeholder="Nhập mức lương" /><br />
                                </div>
                                <div className="rec-category">
                                    Kinh nghiệm
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={(event) => this.handleChangeExp(event)} type="text" className="rec-textbox" placeholder="..." style={{ width: "30px" }} /><label>Năm</label>
                                </div>
                                <div className="rec-category">
                                    Email
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={(event) => this.handleChangeAddress(event)} type="text" className="rec-textbox" placeholder="Nhập email" /><br />
                                </div>
                                <div className="rec-category">
                                    Địa chỉ
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={(event) => this.handleChangeAddress(event)} type="text" className="rec-textbox" placeholder="Nhập địa chỉ" /><br />
                                </div>

                                <div className="rec-category">
                                    Hạn tuyển
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={(event) => this.handleChangeDate(event)} type="date" style={{ border: "0", color: "gray" }} /><br />
                                </div>


                            </div>

                            <div className="right-recinfo">
                                <div className="rec-category">
                                    Yêu cầu
                                </div>
                                <div className="rec-decoration">
                                    <textarea onChange={(event) => this.handleChangeNote(event)} cols="40" rows="5" placeholder="Nhập nội dung" style={{ border: "0", resize: "none" }}></textarea>

                                </div>
                            </div>

                            <div className="footer-recinfo">


                                <Button onClick={(event) => this.handleSubmit(event)} className="btn-submit">Đăng bài tuyển</Button>
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default RecruitPost;