import React from "react";
import './RecruitmentPost.scss';
import Footer from "../Footer/footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
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
            require: ``
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

    handleSubmit = (event) => {
        alert('Nhập thành công!')
        console.log(`Jobname: `, this.state.jobname,
            `Salary: `, this.state.salary,
            `Exp: `, this.state.exp,
            `Address: `, this.state.address,
            `Date: `, this.state.date,
            `Note: `, this.state.note,
            `Require: `, this.state.require)
    }

    render() {
        return (
            <>
                <div className="container-recruit">
                    <div className="list-recruit row justify-content-center">

                        <div className="recruit-item col-6">

                            <div className="rec-banner">
                            </div>

                            <div className="rec-title">
                                <div className="rec-avt">
                                </div>
                                <div className="rec-name">
                                    CÔNG TY TNHH ABCXYZ
                                </div>
                            </div>
                            <div className="rec-jobname">
                                <input onChange={(event) => this.handleChangeJobname(event)} type="text" className="rec-textbox" placeholder="NHẬP TÊN CÔNG VIỆC" /><br />
                            </div>

                            <div className="left-recinfo col-6">
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

                                <div className="rec-category">
                                    GIỚI THIỆU VIỆC LÀM
                                </div>
                                <div className="rec-decoration">
                                    <textarea onChange={(event) => this.handleChangeNote(event)} cols="80" rows="5" placeholder="Nhập nội dung" style={{ border: "0", resize: "none" }}></textarea>
                                </div>
                            </div>

                            <div className="right-recinfo col-6">
                                <div className="rec-category">
                                    Yêu cầu
                                </div>
                                <div className="rec-decoration">
                                    <textarea onChange={(event) => this.handleChangeRequire(event)} cols="75" rows="25" placeholder="Nhập yêu cầu" style={{ border: "0", resize: "none" }}></textarea>
                                </div>
                            </div>

                            <div className="footer-recinfo col-6">
                                <Form.Select className="list-Box">
                                    <option disabled selected value>Chọn loại bài đăng</option>
                                    <option value="sv">Tuyển nhân viên</option>
                                    <option value="dn">Tuyển thực tập sinh</option>
                                </Form.Select>

                                <Button onClick={(event) => this.handleSubmit(event)} className="btn-submit">Đăng bài tuyển</Button>
                            </div>
                        </div>

                    </div>

                </div>

                <Footer />
            </>
        )
    }
}

export default RecruitPost;