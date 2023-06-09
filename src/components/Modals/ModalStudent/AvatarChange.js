
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./AvatarChange.scss";
import React, { useEffect, useState, useRef, useMemo } from 'react';


function ModalAvtStudentChange(props) {

    const [avtsinhvien, setavtsinhvien] = useState({}); //để up lên
    const [avtchange, setavtchange] = useState(""); //bắt event

    useEffect(() => {
        setavtsinhvien({ ...props.avtsinhvien })
    }, [props.avtsinhvien])

    const luuanh = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setavtchange(base64)
    }

    const convertBase64 = (file) => {

        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    const updateavatar = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Student",
            "_id": avtsinhvien._id,
            "modify": {
                "avatar": avtchange
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
            className={'modal-ModalAvtStudentChange'}
            size='lg'
            centered='true'
            scrollable='true'
        >

            <ModalHeader className='titlee' toggle={props.toggleFromParent}>Thay đổi Avatar</ModalHeader>
            <ModalBody className='avtinputbox' style={{ width: "500px", height: "400px" }}>
                <label for="img" >Chọn ảnh:</label>
                <input className='inputavt' type="file" onChange={(event) => luuanh(event)}></input>
                <button className='btnaddimg' type='submit' onClick={updateavatar}>Đăng ảnh</button>
                <br></br>
                <br></br>
                <img style={{ width: "auto", height: "350px" }} src={avtchange}></img>
            </ModalBody>

        </Modal >
    )


}

export default ModalAvtStudentChange;