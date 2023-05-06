import React from "react";
import "./StaffRecruitment.scss"
import { withRouter } from "react-router-dom"
import axios from "axios";
import { getStaffPost } from "../../services/userService";
class StaffRecruitment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            staffrp: []
        }
    }

    async componentDidMount() {
        let res = await getStaffPost('');
        // console.log(`Check res: `, res)
        if (res) {
            this.setState({
                staffrp: res.data
            })
            // console.log('check nhan data chua: ', this.state)
        }

        // handleBackButton = () => {
        //     this.props.history.push(`/user`)
        // }

    }
    render() {
        console.log('check render: ', this.state)
        let arrStaff = this.state.staffrp;
        // console.log("CHeck arrStaff: ", arrStaff)
        return (
            <>
                {/* <h1>A Fancy Table</h1> */}

                {arrStaff && arrStaff.map((item, index) => {
                    console.log("check map: ", item, index)
                    return (
                        <>
                            <div className="staff-recruit-table">
                                {/*các class được viết tắt theo tên class cha */}
                                <div className="srt-top-content">
                                    <div className="srttc-content-info">
                                        <h2 className="srttcci-job-name">{item.job_name}</h2>
                                        <p className="srttcci-company-name">{item.company_code}</p>
                                    </div>
                                </div>

                                <div className="srt-main-content">
                                    <div className="srtmc-content-date">
                                        <p className="srtmccd-date-posted">{item.date_posted}</p>
                                        <p className="srtmccd-expired-date">{item.date_Expired}</p>
                                    </div>

                                    <div className="srtmc-content-info">
                                        <p className="srtmcci-job-salary">
                                            <span>{item.min_salary} - {item.max_salary}</span>
                                        </p>
                                        <p className="srtmcci-job-exp">{item.job_exp}</p>
                                        <p className="srtmcci-job-location">{item.position}</p>
                                    </div>
                                </div>
                                <div className="srt-sub-content">
                                    <button className="srtsc-staff-recruit-save">
                                        lưu
                                    </button>
                                </div>
                            </div>
                        </>
                    )

                }


                )}



            </>
        )
    }
}

export default StaffRecruitment;