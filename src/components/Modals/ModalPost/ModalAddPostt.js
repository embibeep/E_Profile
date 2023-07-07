import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './ModalAddPost.scss'
import lachongImg from "../../../assets/images/lachongImg.jpg"

function ModalAddPostt(props) {

    const [res, setResponse] = useState(({}))
    const [tencongviec, settencongviec] = useState("")
    const [mucluong, setmucluong] = useState("")
    const [kinhnghiem, setkinhnghiem] = useState("")
    const [email, setemail] = useState("")
    const [diachi, setdiachi] = useState("")
    const [hantuyen, sethantuyen] = useState("")
    const [yeucau, setyeucau] = useState("")

    const handlechangetencongviec = (event) => {
        settencongviec(event.target.value)
    }
    const handlechangeml = (event) => {
        setmucluong(event.target.value)
    }
    const handlechangekn = (event) => {
        setkinhnghiem(event.target.value)
    }
    const handlechangee = (event) => {
        setemail(event.target.value)
    }
    const handlechangedc = (event) => {
        setdiachi(event.target.value)
    }
    const handlechangeht = (event) => {
        sethantuyen(event.target.value)
    }
    const handlechangeyc = (event) => {
        setyeucau(event.target.value)
    }




    const editor = useRef(null);

    useEffect(() => {
        setResponse({ ...props.res })
    }, [props.res])

    const handleThem = (event) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Job",
            "document": {
                "title": tencongviec,
                "company": res.credential._id,
                "quantity": 1,
                "exp": kinhnghiem,
                "description": yeucau,
                "expireDate": hantuyen,
                "salary": mucluong,
                "candidates": [],
                "address": diachi,
                "email": email,
            }
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1", requestOptions)
            .then(res => res.text())
            .then(function (result) {
                props.loadJob()
                return console.log(result);
            })
            .catch(error => console.log('error', error));
        alert("Đăng bài thành công")
    }


    return (


        <Modal isOpen={props.isOpen}
            toggle={props.toggleFromParent}
            className={'modal-ModalAddPost'}
            size='lg'
            centered='true'
            scrollable='true'
        >

            <ModalHeader className='titleee' toggle={props.toggleFromParent}>Tạo bài tuyển</ModalHeader>
            <ModalBody className='mod-body'>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                    crossorigin="anonymous">
                </link>
                <div className="container-recruit">
                    <div className="list-recruit justify-content-center">

                        <div className="recruit-item">

                            <div className="rec-title">
                                <div className="rec-avt">
                                    <img style={{ flexShrink: "0", minWidth: "90px", minHeight: "90px", objectFit: "cover" }} src={res?.credential?.avatar} />

                                </div>
                                <div className="rec-name">
                                    <input
                                        value={res?.credential?.name}
                                        type="text" className="rec-textbox tencongty"
                                        placeholder="Nhập tên công ty" />
                                    <br />
                                </div>
                            </div>

                            <div className="rec-resname">
                                <input
                                    onChange={handlechangetencongviec}
                                    style={{ width: "98%", height: "50px", border: "none", marginLeft: "10px" }}
                                    type="text" className="rec-textbox"
                                    placeholder="Nhập tên công việc" />
                                <br />
                            </div>

                            <div className="left-recinfo">
                                <div className="rec-category">
                                    Mức lương
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handlechangeml}
                                        type="text" className="rec-textbox"
                                        placeholder="Nhập mức lương" />
                                    <br />
                                </div>
                                <div className="rec-category">
                                    Kinh nghiệm
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handlechangekn}
                                        type="text" className="rec-textbox"
                                        placeholder="Nhập yêu cầu số năm kinh nghiệm" />
                                    <label></label>
                                </div>
                                <div className="rec-category">
                                    Email
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handlechangee}
                                        type="text" className="rec-textbox"
                                        placeholder="Nhập email" />
                                    <br />
                                </div>
                                <div className="rec-category">
                                    Địa chỉ
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handlechangedc}
                                        type="text" className="rec-textbox diachi"
                                        placeholder="Nhập địa chỉ" />
                                    <br />
                                </div>

                                <div className="rec-category">
                                    Hạn tuyển
                                </div>
                                <div className="rec-decoration">
                                    <input onChange={handlechangeht}
                                        type="text" className="rec-textbox"
                                        placeholder="Nhập hạn tuyển" />
                                    <br />
                                </div>

                            </div>

                            <div className="right-recinfo">
                                <div className="rec-category">
                                    Yêu cầu
                                </div>
                                <div className="rec-decoration">

                                    <JoditEditor className='mota' ref={editor}
                                        onChange={(yc) => setyeucau(yc)}
                                        placeholder="Nhập mô tả hoặc yêu cầu công việc"
                                    />
                                </div>
                            </div>
                            <div className="footer-recinfo">
                                <Button type="submit" onClick={handleThem} className="btn-submit">Đăng bài tuyển</Button>
                            </div>
                        </div>

                    </div>

                </div>
            </ModalBody>
        </Modal>
    )

}
export default ModalAddPostt;
