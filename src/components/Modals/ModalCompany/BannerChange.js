import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../ModalStudent/AvatarChange.scss";
import React, { useEffect, useState, useRef, useMemo } from 'react';

function ModalbannerCompanyChange(props) {

    const [bannercompany, setbannercompany] = useState({}); //để up lên
    const [bannerchange, setbannerchange] = useState(""); //bắt event

    useEffect(() => {
        setbannercompany({ ...props.bannercompany })
    }, [props.bannercompany])

    const luuanh = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setbannerchange(base64)
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

    const updatebanner = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Company",
            "_id": bannercompany._id,
            "modify": {
                "banner": bannerchange
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

            <ModalHeader className='titlee' toggle={props.toggleFromParent}>Thay đổi banner</ModalHeader>
            <ModalBody className='avtinputbox' style={{ width: "800px", height: "400px" }}>
                <label for="img" >Chọn ảnh:</label>
                <input className='inputavt' type="file" onChange={(event) => luuanh(event)}></input>
                <button className='btnaddimg' type='submit' onClick={updatebanner}>Đăng ảnh</button>
                <br></br>
                <br></br>
                <img style={{ width: "auto", height: "350px" }} src={bannerchange}></img>
            </ModalBody>

        </Modal >
    )


}
export default ModalbannerCompanyChange;