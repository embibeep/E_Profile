import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./EditStudent.scss"
function ModalEditStudent(props) {


    const editor = useRef(null);
    const [student, setStudent] = useState({});

    useEffect(() => {
        setStudent({ ...props.student })
    }, [props.student])


    let uploadStudent = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Student",
            "_id": student._id,
            "modify": {
                "name": student.name,
                "introduce": student.introduce,
                "dateOfBirth": student.dateOfBirth,
                "gender": student?.gender,
                "address": student.address,
                "phone": student.phone,
                "email": student.email,
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
                props.loadStudent()
                return console.log(result);
            })
            .catch(error => console.log('error', error));
        alert("Lưu thành công")
    }


    return (

        <Modal isOpen={props.isOpen}
            toggle={props.toggleFromParent}
            className={'modal-ModalEditStudent'}
            size='lg'
            centered='true'
            scrollable='true'
        >

            <ModalHeader className='titlee' toggle={props.toggleFromParent}>Chỉnh sửa thông tin cá nhân</ModalHeader>
            <ModalBody className='avtinputbox' style={{ width: "100%", height: "400px" }}>

                <>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

                    <form>
                        <div class="form-group">
                            <label>Họ và Tên:</label>
                            <input class="form-control" placeholder="nhập họ tên"
                                onChange={(event) => setStudent({ ...student, name: event.currentTarget.value })}
                                value={student?.name}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Ngày sinh:</label>
                            <input class="form-control" placeholder="nhập ngày sinh"
                                onChange={(event) => setStudent({ ...student, dateOfBirth: event.currentTarget.value })}
                                value={student?.dateOfBirth}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại:</label>
                            <input class="form-control" placeholder="nhập số điện thoại"
                                onChange={(event) => setStudent({ ...student, phone: event.currentTarget.value })}
                                value={student?.phone}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Giới tính:</label>
                            <select class="form-select" aria-label="Default select example"
                                onChange={(event) => setStudent({ ...student, gender: event.currentTarget.value })}
                            >
                                {student?.gender == "true" ? <option selected>Nam</option> : <option selected>Nữ</option>}
                                <option value={true}>
                                    Nam
                                </option>
                                <option value={false}>
                                    Nữ
                                </option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Địa chỉ:</label>
                            <input class="form-control" placeholder="nhập địa chỉ"
                                onChange={(event) => setStudent({ ...student, address: event.currentTarget.value })}
                                value={student?.address}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(event) => setStudent({ ...student, email: event.currentTarget.value })}
                                value={student?.email}
                            ></input>
                        </div>
                        {/* <div class="form-group">
                            <label>Facebook:</label>
                            <input class="form-control"
                                placeholder="nhập địa chỉ facebook"
                            >

                            </input>
                        </div> */}
                        <label>Giới thiệu:</label>
                        <div class="gioithieu">
                            <JoditEditor class="dec" ref={editor}
                                onChange={(event) => setStudent({ ...student, introduce: event })}
                                value={student?.introduce}
                                placeholder="Nhập thông tin bản thân"
                            />
                        </div>

                        <br></br>
                        <button type="button" onClick={uploadStudent} class="btn-right btn btn-primary">Cập nhật thông tin</button>
                    </form>
                </>
            </ModalBody>
        </Modal>
    )
}
export default ModalEditStudent;