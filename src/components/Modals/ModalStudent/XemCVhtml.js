
import React, { useEffect, useState, useRef, useMemo } from 'react';
import HTMLReactParser from "html-react-parser";
import "./XemCVhtml.scss";
import profileIcon from "../../../assets/images/profileIcon.png";
import path from "../../../utils/constant";
import { Link, NavLink } from "react-router-dom";

function XemCVhtml(props) {

    const [responce, setResponce] = useState({});

    useEffect(() => {
        getCredential();

    }, [])

    const getCredential = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

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

    return (

        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                crossorigin="anonymous"></link>
            <div className="containerCV">
                <Link to={path.USER}>
                    <button className="btn">Quay lại</button>
                </Link>
                <div className="left">
                    <div className="l-left">
                        <div className="avatar">
                            <img src={responce?.credential?.avatar}></img>
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
                                {HTMLReactParser(`${responce?.credential?.cv?.banthan}`)}

                            </div>

                        </div>
                        <div className="kynang text-left">
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

            </div>
        </>
    )
}




export default XemCVhtml;