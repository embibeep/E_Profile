import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./AvatarChange.scss";
import React, { useEffect, useState, useRef, useMemo } from 'react';

function ModalbannerStudentChange(props) {

    const [bannersinhvien, setbannersinhvien] = useState({});
    const [bannerchange, setbannerchange] = useState('');

    useEffect(() => {
        setbannersinhvien({ ...props.bannersinhvien })
    }, [props.bannersinhvien])

    const luuanh = (event) => {
        console.log(event.target.file);
        setbannerchange(event.target.file)

    }


    return (
        <Modal isOpen={props.isOpen}
            toggle={props.toggleFromParent}
            className={'modal-ModalAvtStudentChange'}
            size='lg'
            centered='true'
            scrollable='true'
        >

            <ModalHeader className='titlee' toggle={props.toggleFromParent}>Thay đổi banner</ModalHeader>
            <ModalBody className='avtinputbox' style={{ width: "500px", height: "400px" }}>
                <label for="img" >Chọn ảnh:</label>
                <input className='inputavt' type="file" name="file" onChange={(event)=>luuanh(event)}></input>
                <button className='btnaddimg' type='submit'>Đăng ảnh</button>
            </ModalBody>

        </Modal >
    )


}
export default ModalbannerStudentChange;