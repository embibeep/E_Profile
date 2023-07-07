import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./EditCompany.scss";


function ModalEditCompany(props) {

    const editor = useRef(null);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        setProfile({ ...props.profile })
    }, [props.profile])


    let updateCompany = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Company",
            "_id": profile._id,
            "modify": {
                "name": profile.name,
                "introduce": profile.introduce,
                "address": profile.address,
                "email": profile.email,
                "phone": profile.phone,
                "website": profile.website
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
                props.loadProfileCompany()
                return console.log(result);
            })
            .catch(error => console.log('error', error));
        alert("Cập nhật thành công")
    }

    return (
        <Modal isOpen={props.isOpen}
            toggle={props.toggleFromParent}
            className={'modal-ModalEditCompany'}
            profile={props.profile}
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
                                onChange={(event) => setProfile({ ...profile, name: event.currentTarget.value })}
                                value={profile?.name}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Địa chỉ:</label>
                            <input class="form-control" placeholder="nhập địa chỉ"
                                onChange={(event) => setProfile({ ...profile, address: event.currentTarget.value })}
                                value={profile?.address}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Email:</label>
                            <input class="form-control" placeholder="nhập email"
                                onChange={(event) => setProfile({ ...profile, email: event.currentTarget.value })}
                                value={profile?.email}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại:</label>
                            <input class="form-control" placeholder="nhập số điện thoại"
                                onChange={(event) => setProfile({ ...profile, phone: event.currentTarget.value })}
                                value={profile?.phone}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label>Website:</label>
                            <input class="form-control" placeholder="nhập link website công ty"
                                onChange={(event) => setProfile({ ...profile, website: event.currentTarget.value })}
                                value={profile?.website}
                            ></input>
                        </div> 

                        <label>Giới thiệu:</label>
                        <div class="gioithieu">
                            <JoditEditor class="dec" ref={editor}
                                placeholder="Nhập thông tin bản thân"
                                onChange={(event) => setProfile({ ...profile, introduce: event })}
                                value={profile?.introduce}
                            />
                        </div>
                        <br></br>
                        <button type="submit" onClick={updateCompany} class="btn-right btn btn-primary">Cập nhật thông tin</button>
                    </form>
                </>
            </ModalBody>
        </Modal>
    )
}

export default ModalEditCompany;