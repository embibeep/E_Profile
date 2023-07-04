import React, { useEffect, useState, useRef, useMemo } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function ModalAvtCompanyChange(props) {


    // const [avatar, setProfile] = useState({});


    // useEffect(() => {
    //     setProfile({ ...props.profile })
    // }, [props.profile])

    // let updateAvt = () => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify({
    //         "collection": "Company",
    //         "_id": profile._id,
    //         "modify": {
    //             "avatar": profile.avatar,
    //         }
    //     });

    //     var requestOptions = {
    //         method: 'PATCH',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch("http://localhost:8080/api/v1", requestOptions)
    //         .then(response => response.text())
    //         .then(function (result) {
    //             props.loadProfileCompany()
    //             return console.log(result);
    //         })
    //         .catch(error => console.log('error', error));
    //     // alert("Cập nhật thành công")
    // }

    return (
        <Modal isOpen={props.isOpen}
            toggle={props.toggleFromParent}
            className={'modal-ModalAvtCompanyChange'}
            size='lg'
            centered='true'
            scrollable='true'
        >

            <ModalHeader className='titlee' toggle={props.toggleFromParent}>Thay đổi avatar Công ty</ModalHeader>
            <ModalBody className='avtinputbox' style={{ width: "500px", height: "400px" }}>
                <label for="img" >Chọn ảnh:</label>
                <input className='inputavt' type="file" id="img" name="img" accept="image/*"
                ></input>
                <button className='btnaddimg' type='submit'>Đăng ảnh</button>
            </ModalBody>
        </Modal>
    )

}

export default ModalAvtCompanyChange;