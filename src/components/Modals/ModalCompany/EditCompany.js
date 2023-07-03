import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./EditCompany.scss";


function ModalEditCompany(props) {

    const editor = useRef(null);
    const [gioithieu, setGioithieu] = useState('');

    return (
        <Modal isOpen={props.isOpen}
            toggle={props.toggleFromParent}
            className={'modal-ModalEditCompany'}
            size='lg'
            centered='true'
            scrollable='true'
        >

            <ModalHeader className='titlee' toggle={props.toggleFromParent}>Chỉnh sửa thông tin công ty</ModalHeader>
            <ModalBody className='avtinputbox' style={{ width: "100%", height: "400px" }}>

                <>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

                    <form>
                        <div class="form-group">
                            <label>Tên công ty:</label>
                            <input class="form-control" placeholder="nhập tên công ty" ></input>
                        </div>
                        <div class="form-group">
                            <label>Địa chỉ:</label>
                            <input class="form-control" placeholder="nhập địa chỉ"></input>
                        </div>
                        <div class="form-group">
                            <label>Email:</label>
                            <input class="form-control" placeholder="nhập email"></input>
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại:</label>
                            <input class="form-control" placeholder="nhập số điện thoại"></input>
                        </div>
                        <div class="form-group">
                            <label>Website:</label>
                            <input class="form-control" placeholder="nhập link website công ty"></input>
                        </div>

                        <label>Giới thiệu:</label>
                        <div class="gioithieu">
                            <JoditEditor class="dec" ref={editor}
                                onChange={(newGioithieu) => setGioithieu(newGioithieu)}
                                value={gioithieu}
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


const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(ModalEditCompany);
export default ModalEditCompany;