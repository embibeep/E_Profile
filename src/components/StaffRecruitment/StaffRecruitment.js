import React from "react";
import Paimon from "../../assets/images/Paimon_Boy.jpg"

class StaffRecruitment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }
    render() {
        return (
            <>
                <div className="staff-recruit-table">
                    <div className="staff-recruit-table top-content">
                        <div className="staff-recruit-table top-content avatar">
                            <img src={Paimon} alt=""></img>
                        </div>
                        <div className="staff-recruit-table top-content content-info">
                            <h2 className="staff-recruit-table top-content content-info job-name">tên công việc</h2>
                            <p className="staff-recruit-table top-content content-info company-name">tên công ty</p>
                        </div>
                    </div>

                    <div className="staff-recruit-table main-content">
                        <div className="staff-recruit-table main-content content-date">
                            <p className="staff-recruit-table main-content content-date date-posted">ngày đăng</p>
                            <p className="staff-recruit-table main-content content-date expired-date">ngày hết hạn</p>
                        </div>

                        <div className="staff-recruit-table main-content ">
                            <p className="staff-recruit-table main-content job-salary">
                                <span>lương thấp - lương cao</span>
                            </p>
                            <p className="staff-recruit-table main-content job-exp">kinh nghiệm</p>
                            <p className="staff-recruit-table main-content job-location">vị trí công việc</p>
                        </div>
                    </div>
                    <div className="staff-recruit-table sub-content">
                        <button className="staff-recruit-table sub-content staff-recruit-save">
                            lưu
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default StaffRecruitment;