import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./EditStudent.scss"
function ModalEditStudent(props) {


    const editor = useRef(null);
    const [gt, setGT] = useState("");
    const [responce, setResponce] = useState({});

    useEffect(() => {
        getCredential();
    }, [])

    const getCredential = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODc5MzkyNzEsInN1YiI6IjY0OTY2YmQ3ZjQ0YjViOTYwMTFjM2Q3OSJ9.s7fH2XgnM_gN8kV0X4VvSYb6O_MbAZQP_0nQo9rYYT0");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
            .then(responce => responce.json())
            .then(result => {
                setResponce(result[0])
            })
            .catch(error => console.log('error', error));


        if (responce?.credential?.gender === true) {
            setGT({ gt: "Nam" })
        } else {
            setGT({ gt: "Nữ" })
        }
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
                                onChange={(newname) => setResponce({ ...responce?.credential, name: newname })}
                                value={responce?.credential?.name}></input>
                        </div>
                        <div class="form-group">
                            <label>Ngày sinh:</label>
                            <input class="form-control" placeholder="nhập ngày sinh"
                                onChange={(newbirth) => setResponce({ ...responce?.credential, dateOfBirth: newbirth })}
                                value={responce?.credential?.dateOfBirth}></input>
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại:</label>
                            <input class="form-control" placeholder="nhập số điện thoại"
                                onChange={(newphone) => setResponce({ ...responce?.credential, phone: newphone })}
                                value={responce?.credential?.phone}></input>
                        </div>
                        <div class="form-group">
                            <label>Giới tính:</label>
                            <select class="form-select" aria-label="Default select example"
                                onChange={(newgender) => setResponce({ ...responce?.credential, phone: newgender })}>
                                <option selected></option>
                                <option value={true}>
                                    nam
                                </option>
                                <option value={false}>
                                    nữ
                                </option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Địa chỉ:</label>
                            <input class="form-control" placeholder="nhập địa chỉ"
                                onChange={(newaddress) => setResponce({ ...responce?.credential, address: newaddress })}
                                value={responce?.credential?.address}></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={responce?.credential?.email}
                                onChange={(newemail) => setResponce({ ...responce?.credential, email: newemail })}></input>
                        </div>
                        <div class="form-group">
                            <label>Facebook:</label>
                            <input class="form-control"
                                placeholder="nhập địa chỉ facebook"
                                onChange={(newfb) => setResponce({ ...responce?.credential?.externalLink?.[0], link: newfb }
                                )}
                                value={responce?.credential?.externalLink?.[0]?.link}>

                            </input>
                        </div>
                        <label>Giới thiệu:</label>
                        <div class="gioithieu">
                            <JoditEditor class="dec" ref={editor}
                                onChange={(newgt) => setResponce({ ...responce?.credential, introduce: newgt }
                                )}
                                value={responce?.credential?.introduce}
                                placeholder="Nhập thông tin bản thân"
                            />
                        </div>

                        <br></br>
                        <button type="submit" class="btn-right btn btn-primary">Cập nhật thông tin</button>
                    </form>
                </>
            </ModalBody>
        </Modal>
    )
}
export default ModalEditStudent;