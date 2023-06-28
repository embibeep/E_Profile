import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './ModalAddPost.scss'
import lachongImg from "../../../assets/images/lachongImg.jpg"

function ModalAddPost(props) {

    const [job, setJob] = useState({})

    useEffect(() => {
        setJob({ ...props.job })
    }, [props.job])

    // const handleChangeCompanyname = (event) => {

    // }
    const handleChangeJobname = (event) => {
        setJob({
            ...job,
            title: event.currentTarget.value
        })
    }
    const handleChangeSalary = (event) => {
        setJob({
            ...job,
            salary: event.currentTarget.value
        })
    }
    const handleChangeExp = (event) => {
        setJob({
            ...job,
            exp: event.currentTarget.value
        })
    }
    const handleChangeEmail = (event) => {
        setJob({
            ...job,
            email: event.currentTarget.value
        })
    }
    const handleChangeAddress = (event) => {
        setJob({
            ...job,
            address: event.currentTarget.value
        })
    }
    const handleChangeDate = (event) => {
        setJob({
            ...job,
            expireDate: event.currentTarget.value
        })
    }
    const handleChangeNote = (event) => {
        setJob({
            ...job,
            description: event.currentTarget.value
        })
    }
    const handleTaoMoi = (event) => {
        setJob({
            ...job,
            title: "",
            salary: "",
            exp: "",
            email: "",
            address: "",
            expireDate: "",
            description: ""





        })
    }
    const handleThem = (event) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Job",
            "document": {

                "title": job.title,
                "company": job.company._id,
                "quantity": 1,
                "exp": job.exp,
                "description": job.description,
                "expireDate": job.expireDate,
                "salary": job.salary,
                "candidates": [
                    "648fced72bfae821062fc4d7"
                ],
                "address": job.address,
                "email": job.email,
            }
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1", requestOptions)
            .then(response => response.text())
            .then(function (result) {
                props.loadJob()
                return console.log(result);
            })
            .catch(error => console.log('error', error));
        alert("Đăng bài thành công")
    }
    const handleSua = (event) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Job",
            "_id": job._id,
            "modify": {
                "title": job.title,
                "salary": job.salary,
                "exp": job.exp,
                "email": job.email,
                "address": job.address,
                "expireDate": job.expireDate,
                "description": job.description
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
            .then(function (result) {
                props.loadJob()
                return console.log(result);
            })
            .catch(error => console.log('error', error));
        alert("Cập nhật thành công ")

    }
    const handleXoa = (event) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Job",
            "_id": job._id
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1", requestOptions)
            .then(response => response.text())
            .then(function (result) {
                props.loadJob()
                return console.log(result);
            })
            .catch(error => console.log('error', error));
        alert("Xóa thành công ");
    }
    return (
        <Modal isOpen={props.isOpen}
            toggle={props.toggleFromParent}
            className={'modal-ModalAddPost'}
            size='lg'
            centered='true'
            scrollable='true'
        >

            <ModalHeader className='titleee' toggle={props.toggleFromParent}>Tạo bài tuyển</ModalHeader>
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
                                    <input
                                        value={job?.company?.name}
                                        type="text" className="rec-textbox"
                                        placeholder="Nhập tên công ty" />
                                    <br />

                                </div>
                            </div>
                            <div className="rec-jobname">
                                <input onChange={handleChangeJobname}
                                    value={job?.title}
                                    type="text" className="rec-textbox"
                                    placeholder="Nhập tên công việc" />
                                <br />
                            </div>

                            <div className="left-recinfo">
                                <div className="rec-category">
                                    Mức lương
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handleChangeSalary}
                                        value={job?.salary}
                                        type="text" className="rec-textbox"
                                        placeholder="Nhập mức lương" />
                                    <br />
                                </div>
                                <div className="rec-category">
                                    Kinh nghiệm
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handleChangeExp}
                                        type="text" className="rec-textbox"
                                        value={job?.exp}
                                        placeholder="Nhập yêu cầu số năm kinh nghiệm" />
                                    <label></label>
                                </div>
                                <div className="rec-category">
                                    Email
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handleChangeEmail}
                                        type="text" className="rec-textbox"
                                        value={job?.email}
                                        placeholder="Nhập email" />
                                    <br />
                                </div>
                                <div className="rec-category">
                                    Địa chỉ
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handleChangeAddress}
                                        type="text" className="rec-textbox diachi"
                                        value={job?.address}
                                        placeholder="Nhập địa chỉ" />
                                    <br />
                                </div>

                                <div className="rec-category">
                                    Hạn tuyển
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handleChangeDate}
                                        type="text" className="rec-textbox"
                                        value={job?.expireDate} />
                                    <br />
                                </div>


                            </div>

                            <div className="right-recinfo">
                                <div className="rec-category">
                                    Yêu cầu
                                </div>
                                <div className="rec-decoration">
                                    <textarea className=" mota form-control"
                                        onChange={handleChangeNote}
                                        value={job?.description}
                                        placeholder="Nhập mô tả hoặc yêu cầu công việc">
                                    </textarea>

                                </div>
                            </div>

                            <div className="footer-recinfo">

                                <Button type="submit" onClick={handleThem} className="btn-submit">Đăng bài tuyển</Button>
                                <Button type="submit" onClick={handleSua} className="btn-submit">Cập nhật</Button>
                                <Button type="submit" onClick={handleXoa} className="btn-submit">Xóa bài tuyển</Button>
                                <Button type="submit" onClick={handleTaoMoi} className="btn-submit">Tạo mới</Button>
                            </div>
                        </div>

                    </div>

                </div>
            </ModalBody>
        </Modal>
    )

}
export default ModalAddPost;

// class ModalAddPost extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             // jobname: ``,
//             // companyname: ``,
//             // salary: ``,
//             // exp: ``,
//             // address: ``,
//             // date: ``,
//             // note: ``,
//             // require: ``,
//             // postType: ``,
//             job: { ...this.props.job }
//         }
//     }


//     componentDidMount() {
//         this.setState({
//             job: { ...this.props.job }
//         })
//         // console.log(this.job)
//     }

//     toggle = () => {
//         this.props.toggleFromParent()
//     }
//     handleChangeJobname = (event) => {
//         this.setState({
//             job: {
//                 ...this.state.job,
//                 title: event.currentTarget.value
//             }
//         })
//     }
//     handleChangeCompanyname = (event) => {

//         this.setState({
//             companyname: event.target.value
//         })
//     }

//     handleChangeSalary = (event) => {
//         this.setState({
//             salary: event.target.value
//         })
//     }

//     handleChangeExp = (event) => {
//         this.setState({
//             exp: event.target.value
//         })
//     }

//     handleChangeAddress = (event) => {
//         this.setState({
//             address: event.target.value
//         })
//     }

//     handleChangeDate = (event) => {
//         this.setState({
//             date: event.target.value
//         })
//     }

//     handleChangeNote = (event) => {
//         this.setState({
//             note: event.target.value
//         })
//     }

//     handleChangeRequire = (event) => {
//         this.setState({
//             require: event.target.value
//         })
//     }
//     handleChangePostType = (e) => {
//         this.setState({
//             postType: e.target.value
//         })
//     }

//     handeleTaoMoi = () => {

//     }
//     render() {
//         // console.log('check child props', this.props)
//         // console.log('check child props', this.props.isOpen)
//         return (
//             <Modal isOpen={this.props.isOpen}
//                 toggle={() => { this.toggle() }}
//                 className={'modal-ModalAddPost'}
//                 size='lg'
//                 centered='true'
//                 scrollable='true'
//             >

//                 <ModalHeader className='titlee' toggle={() => { this.toggle() }}>Tạo bài tuyển</ModalHeader>
//                 <ModalBody>
//                     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
//                         rel="stylesheet"
//                         integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
//                         crossorigin="anonymous">

//                     </link>
//                     <div className="container-recruit">
//                         <div className="list-recruit justify-content-center">

//                             <div className="recruit-item">

//                                 <div className="rec-title">
//                                     <div className="rec-avt">
//                                         <img src={lachongImg} />
//                                     </div>
//                                     <div className="rec-name">
//                                         <input onChange={(event) => this.handleChangeCompanyname(event)}
//                                             type="text" className="rec-textbox"
//                                             placeholder="Nhập tên công ty"
//                                             value={this.state.job?.company?.name ?? ""} />
//                                         <br />

//                                     </div>
//                                 </div>
//                                 <div className="rec-jobname">
//                                     <input onChange={(event) => this.handleChangeJobname(event)}
//                                         type="text" className="rec-textbox"
//                                         placeholder="Nhập tên công việc"
//                                         value={this.state.job.title} />
//                                     <br />
//                                 </div>

//                                 <div className="left-recinfo">
//                                     <div className="rec-category">
//                                         Mức lương
//                                     </div>
//                                     <div className="rec-decoration">
//                                         <input onChange={(event) => this.handleChangeSalary(event)}
//                                             type="text" className="rec-textbox"
//                                             placeholder="Nhập mức lương"
//                                             value={this.props.job.salary} />
//                                         <br />
//                                     </div>
//                                     <div className="rec-category">
//                                         Kinh nghiệm
//                                     </div>
//                                     <div className="rec-decoration">
//                                         <input onChange={(event) => this.handleChangeExp(event)}
//                                             type="text" className="rec-textbox"
//                                             placeholder="Nhập yêu cầu số năm kinh nghiệm"
//                                             value={this.props.job.exp} />
//                                         <label></label>
//                                     </div>
//                                     <div className="rec-category">
//                                         Email
//                                     </div>
//                                     <div className="rec-decoration">
//                                         <input onChange={(event) => this.handleChangeAddress(event)}
//                                             type="text" className="rec-textbox"
//                                             placeholder="Nhập email"
//                                             value={this.props.job.email} />
//                                         <br />
//                                     </div>
//                                     <div className="rec-category">
//                                         Địa chỉ
//                                     </div>
//                                     <div className="rec-decoration">
//                                         <input onChange={(event) => this.handleChangeAddress(event)}
//                                             type="text" className="rec-textbox"
//                                             placeholder="Nhập địa chỉ"
//                                             value={this.props.job.address} />
//                                         <br />
//                                     </div>

//                                     <div className="rec-category">
//                                         Hạn tuyển
//                                     </div>
//                                     <div className="rec-decoration">
//                                         <input onChange={(event) => this.handleChangeDate(event)}
//                                             type="text" className="rec-textbox"
//                                             value={this.props.job.expireDate} />
//                                         <br />
//                                     </div>


//                                 </div>

//                                 <div className="right-recinfo">
//                                     <div className="rec-category">
//                                         Yêu cầu
//                                     </div>
//                                     <div className="rec-decoration">
//                                         <textarea className="form-control"
//                                             onChange={(event) => this.handleChangeNote(event)}
//                                             placeholder="Nhập mô tả hoặc yêu cầu công việc"
//                                             value={this.props.job.description}>
//                                         </textarea>

//                                     </div>
//                                 </div>

//                                 <div className="footer-recinfo">

//                                     <Button onClick={() => this.handleTaoMoi()} className="btn-submit">Tạo mới</Button>
//                                     <Button onClick={() => this.handleThem()} className="btn-submit">Đăng bài tuyển</Button>
//                                     <Button onClick={() => this.handleSua()} className="btn-submit">Cập nhật</Button>
//                                     <Button onClick={() => this.handleXoa()} className="btn-submit">Xóa bài tuyển</Button>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                 </ModalBody>
//                 {/* <ModalFooter>
//                     <Button color="primary" onClick={() => { this.toggle() }}>
//                         Do Something
//                     </Button>{' '}
//                     <Button color="secondary" onClick={() => { this.toggle() }}>
//                         Cancel
//                     </Button>
//                 </ModalFooter> */}
//             </Modal>
//         )
//     }

// }

// const mapStateToProps = state => {
//     return {
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ModalAddPost);
