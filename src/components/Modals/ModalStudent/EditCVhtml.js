import "./EditCVhtml.scss";
import profileIcon from "../../../assets/images/profileIcon.png";
import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { Link, NavLink } from "react-router-dom";

import path from "../../../utils/constant";

function EditCVhtml(props) {

 
    const editor = useRef(null);
    const [banthan, setBanthan] = useState('');
    const [kynang, setKynang] = useState('');
    const [kinhnghiem, setKinhnghiem] = useState('');
    const [giaoduc, setGiaoduc] = useState('');
    const [duan, setDuan] = useState('');
    const [khac, setKhac] = useState('');
    const [name, setName] = useState('');
    const [chuyennganh, setChuyennganh] = useState('');

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
    }

    const uploadCV = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Student",
            "_id": "648fced72bfae821062fc4d7",
            "modify": {
                "cv": {
                    "chuyennganh": responce?.credential?.cv?.chuyennganh,
                    "banthan": responce?.credential?.cv?.banthan,
                    "kynang": responce?.credential?.cv?.kynang,
                    "kinhnghiem": responce?.credential?.cv?.kinhnghiem,
                    "truongdaihoc": responce?.credential?.cv?.truongdaihoc,
                    "duan": responce?.credential?.cv?.duan,
                    "khac": responce?.credential?.cv?.khac,
                }
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
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        alert("Lưu thành công")
    }


    return (

        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                crossorigin="anonymous"></link>
            <div className="containerCV">
                <div className="leftt">
                    <div className="l-left">
                        <div className="avatar">
                            <img src={profileIcon}></img>
                        </div>
                        <div className="name">
                            {responce?.credential?.name}
                        </div>
                        <div className="line-border">
                        </div>

                        <div className="chuyennganh">
                            {responce?.credential?.cv?.chuyennganh}
                        </div>
                        <div className="vebanthan text-left">
                            <div className="titleCV">BẢN ThÂN</div>
                            <div className="content-CV">
                                {/* {responce?.credential?.cv?.banthan ?? ""} */}
                                {HTMLReactParser(`${responce?.credential?.cv?.banthan}`)}
                            </div>

                        </div>
                        <div className="kynang">
                            <div className="titleCV">KỸ NĂNG</div>
                            <div className="content-CV">
                                {HTMLReactParser(`${responce?.credential?.cv?.kynang}`)}

                            </div>

                        </div>

                    </div>
                    <div className="r-left">
                        <div className="kinhnghiem text-left">
                            <div className="titleCV-right">KINH NGHIỆM</div>
                            <div className="content-CV">
                                {HTMLReactParser(`${responce?.credential?.cv?.kinhnghiem}`)}

                            </div>

                        </div>
                        <div className="giaoduc text-left">
                            <div className="titleCV-right">TRƯỜNG ĐẠI HỌC</div>
                            <div className="content-CV">
                                {HTMLReactParser(`${responce?.credential?.cv?.truongdaihoc}`)}

                            </div>
                        </div>
                        <div className="duan text-left">
                            <div className="titleCV-right">DỰ ÁN</div>
                            <div className="content-CV">
                                {HTMLReactParser(`${responce?.credential?.cv?.duan}`)}

                            </div>

                        </div>
                        <div className="khac text-left">
                            <div className="titleCV-right">KHÁC</div>
                            <div className="content-CV">
                                {HTMLReactParser(`${responce?.credential?.cv?.khac}`)}

                            </div>

                        </div>
                    </div>

                </div>


                <div className="right overflow-auto">



                    <div className="headerbutton">
                        <button className="btn" onClick={uploadCV}>Lưu CV</button>
                        <button className="btn">In CV</button>
                        <Link to={path.USER}>
                            <button className="btn">Quay lại</button>
                        </Link>
                    </div>

                    <div className="changeavatar">
                    </div>
                    <div className="name">
                    </div>

                    <div className="changechuyennganh">
                        <input placeholder="nhập tên công việc ứng tuyển"
                            onChange={(event) => setResponce({
                                ...responce, credential: {
                                    ...responce?.credential,
                                    cv: { ...responce?.credential?.cv, chuyennganh: event.currentTarget.value }
                                },
                            })}
                            value={responce?.credential?.cv?.chuyennganh} className="form-control"></input>
                    </div>
                    <div className="changevebanthan text-left">
                        Nhập thông tin bản thân
                        <JoditEditor className="joditeditor" ref={editor}
                            onChange={(newBanthan) => setResponce({
                                ...responce, credential: {
                                    ...responce?.credential,
                                    cv: { ...responce?.credential?.cv, banthan: newBanthan }
                                },
                            })}
                            value={responce?.credential?.cv?.banthan}
                            placeholder="Nhập thông tin bản thân"
                        />
                    </div>
                    <div className="changekynang text-left">
                        Nhập kỹ năng
                        <JoditEditor className="joditeditor" ref={editor}
                            onChange={(newKynang) => setResponce({
                                ...responce, credential: {
                                    ...responce?.credential,
                                    cv: { ...responce?.credential?.cv, kynang: newKynang }
                                },
                            })}
                            value={responce?.credential?.cv?.kynang}
                        />
                    </div>


                    <div className="changekinhnghiem text-left">
                        Nhập kinh nghiệm
                        <JoditEditor className="joditeditor" ref={editor}
                            onChange={(newKinhnghiem) => setResponce({
                                ...responce, credential: {
                                    ...responce?.credential,
                                    cv: { ...responce?.credential?.cv, kinhnghiem: newKinhnghiem }
                                },
                            })}
                            value={responce?.credential?.cv?.kinhnghiem}
                        />
                    </div>
                    <div className="changegiaoduc text-left">
                        Nhập trường đại học
                        <JoditEditor className="joditeditor" ref={editor}
                            onChange={(newTruongdaihoc) => setResponce({
                                ...responce, credential: {
                                    ...responce?.credential,
                                    cv: { ...responce?.credential?.cv, truongdaihoc: newTruongdaihoc }
                                },
                            })}
                            value={responce?.credential?.cv?.truongdaihoc}
                        />
                    </div>
                    <div className="changeduan text-left">
                        Nhập dự án
                        <JoditEditor className="joditeditor" ref={editor}
                            onChange={(newDuan) => setResponce({
                                ...responce, credential: {
                                    ...responce?.credential,
                                    cv: { ...responce?.credential?.cv, duan: newDuan }
                                },
                            })}
                            value={responce?.credential?.cv?.duan}
                        />
                    </div>
                    <div className="changekhac text-left">
                        Nhập các thông tin khác
                        <JoditEditor className="joditeditor" ref={editor}
                            onChange={(newKhac) => setResponce({
                                ...responce, credential: {
                                    ...responce?.credential,
                                    cv: { ...responce?.credential?.cv, khac: newKhac }
                                },
                            })}
                            value={responce?.credential?.cv?.khac}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}




export default EditCVhtml;