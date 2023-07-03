import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./EditStudent.scss"
function ModalEditStudent(props) {


    const editor = useRef(null);
    const [gt, setGT] = useState('');

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
                            <input class="form-control" placeholder="nhập họ tên"></input>
                        </div>
                        <div class="form-group">
                            <label>Ngày sinh:</label>
                            <input class="form-control" placeholder="nhập ngày sinh"></input>
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại:</label>
                            <input class="form-control" placeholder="nhập số điện thoại"></input>
                        </div>
                        <div class="form-group">
                            <label>Giới tính:</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>chọn giới tính</option>
                                <option value="1">nam</option>
                                <option value="2">nữ</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Địa chỉ:</label>
                            <input class="form-control" placeholder="nhập địa chỉ"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                            <label>Facebook:</label>
                            <input class="form-control" placeholder="nhập địa chỉ facebook"></input>
                        </div>
                        <label>Giới thiệu:</label>
                        <div class="gioithieu">
                            <JoditEditor class="dec" ref={editor}
                                onChange={(newGT) => setGT(newGT)}
                                value={gt}
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