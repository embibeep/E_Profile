import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer">

                    <div className="contact-list">
                        <div className="contact-content">
                            <a href="https://360.lhu.edu.vn/" className="LHU-map">
                                <FontAwesomeIcon icon={faSchool} />&nbsp;LacHong University</a>
                            <p className="LHU-phone">
                                <FontAwesomeIcon icon={faPhone} />&nbsp;+84 251 3951 344</p>
                            <a href="https://lhu.edu.vn/" className="LHU-website">
                                <FontAwesomeIcon icon={faGlobe} />&nbsp;https://lhu.edu.vn/</a>
                        </div>
                    </div>
                </div>

            </>

        )
    }

}

export default Footer;