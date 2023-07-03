import React, { useState } from "react";
import Slider from "react-slick";
import "../working.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './staffrecruit.scss';
import profileIcon from "../../../assets/images/profileIcon.png"
import iconFollow from "../../../assets/images/iconFollow.png"
import { Link } from "react-router-dom";
import path from "../../../utils/constant";
import ModalViewPost from "../../../components/Modals/ModalPost/ModalViewPost";



export class SimpleSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            job: {},
            response: [
            ]
        }
    }

    componentDidMount() {
        this.loadListJobs();
    }


    loadListJobs = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "collection": "Job",
            "pipeline": [
                {
                    "$match": {}
                },
                {
                    "$lookup": {
                        "from": "Company",
                        "localField": "company",
                        "foreignField": "_id",
                        "as": "company"
                    }
                },
                {
                    "$unwind": "$company"
                },
                {
                    "$lookup": {
                        "from": "Student",
                        "localField": "candidates",
                        "foreignField": "_id",
                        "as": "candidates"
                    }
                },
            ]
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ response: result })
            })
            .catch(error => console.log('error', error));
    }

    handlePopUp = (job) => {
        this.setState({
            isViewPost: true,
            job: job
        })
    }

    togglePopUp = () => {
        this.setState({
            isViewPost: !this.state.isViewPost,
            job: {}
        })
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };



        return (
            <>

                <div className="tuyenNV row justify-content-center">
                    {this.state.response.map(item => {
                        return <div className="jobItem col-4" onClick={() => this.handlePopUp(item)}>

                            <div className="Top-Job">
                                <div className="icon">
                                    <img className="avtCompany" src={profileIcon} alt="avata công ty" />
                                </div>
                                <div className="Top-Left">
                                    <div className="nameJob">
                                        {item.title}
                                    </div>
                                    <div className="nameCompany">
                                        {item.company.name}
                                    </div>
                                </div>
                            </div>

                            <div className="Bot-job">
                                <div className="item">
                                    {item.salary}
                                </div>
                                <div className="item">
                                    {item.exp}
                                </div>
                                <div className="item">
                                    {item.address}
                                </div>

                                <div className="iconFollow">

                                    {/* <img className="icon" src={iconFollow} alt="icon follow" /> */}

                                </div>
                            </div>
                        </div>

                    })}

                </div>
                <ModalViewPost
                    isOpen={this.state.isViewPost}
                    toggleFromParent={this.togglePopUp}
                    job={this.state.job}
                />






            </>
        )
    }

}