import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./EditCompany.scss";


function ModalEditCompany(props) {

    const editor = useRef(null);
    const [gioithieu, setGioithieu] = useState('');
    const [response, setResponse] = useState({});

    useEffect(() => {
        loadProfileCompany();
    }, [])


    const loadProfileCompany = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("http://localhost:8080/api/auth/credential-state", requestOptions)
            .then(response => response.json())
            .then(result => {
                setResponse(result[0])
            })
            .catch(error => console.log('error', error)).finally(() => {
                console.log(response)
            });
    }

    let uploadCompany = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Company",
            "_id": response?._id,
            "modify": {
                "name": response?.credential?.name,
                "introduce": response?.credential?.introduce,
                "address": response?.credential?.address,
                "email": response?.credential?.email,
                "phone": response?.credential?.phone,
                "website": response?.credential?.website
            }
        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1", requestOptions)
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

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
                            <input class="form-control" placeholder="nhập tên công ty"
                                onChange={(newname) => setResponse({ ...response?.credential, name: newname })}
                                value={response?.credential?.name}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Địa chỉ:</label>
                            <input class="form-control" placeholder="nhập địa chỉ"
                                onChange={(event) => setResponse({ ...response?.credential, address: event })}
                                value={response?.credential?.address}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Email:</label>
                            <input class="form-control" placeholder="nhập email"
                                onChange={(event) => setResponse({ ...response?.credential, email: event })}
                                value={response?.credential?.email}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại:</label>
                            <input class="form-control" placeholder="nhập số điện thoại"
                                onChange={(event) => setResponse({ ...response?.credential, phone: event })}
                                value={response?.credential?.phone}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Website:</label>
                            <input class="form-control" placeholder="nhập link website công ty"
                                onChange={(event) => setResponse({ ...response?.credential, website: event })}
                                value={response?.credential?.website}
                            ></input>
                        </div>

                        <label>Giới thiệu:</label>
                        <div class="gioithieu">
                            <JoditEditor class="dec" ref={editor}
                                onChange={(event) => setResponse({ ...response?.credential, introduce: event })}
                                value={response?.credential?.introduce}
                                placeholder="Nhập thông tin bản thân"
                            />
                        </div>

                        <br></br>
                        <button type="button" onClick={uploadCompany} class="btn-right btn btn-primary">Cập nhật thông tin</button>
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