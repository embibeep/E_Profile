import React from "react";
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div className="footer-title">Chuyên ngành</div>
                    <div className="major-list">
                        <div className="major-list-left">
                            <p>Công nghệ thông tin</p>
                            <p>Dược sĩ</p>
                            <p>Công nghệ kỹ thuật</p>
                            <p>Marketing</p>
                            <p>Công nghệ kỹ thuật điện, điện tử</p>
                            <p>Công nghệ kỹ thuật điều khiển và tự động hoá</p>
                            <a href="https://360.lhu.edu.vn/" className="LHU-map">LacHong University</a>
                        </div>

                        <div className="major-list-center">
                            <p>Công nghệ kỹ thuật và công trình xây dựng</p>
                            <p>Công nghệ thực phẩm</p>
                            <p>Logictics và quản lý chuỗi cung ứng</p>
                            <p>Kế tán - Kiểm toán</p>
                            <p>Tài chính - Ngân hàng</p>
                            <p>Quản trị kinh doanh</p>
                            <p>Kinh tế - Ngoại thương</p>
                            <p className="LHU-phone">+84 251 3951 344</p>
                        </div>

                        <div className="major-list-right">
                            <p>Quản trị dịch vụ du lịch và lữ hành </p>
                            <p>Luật kinh tế</p>
                            <p>Thương mại điện tử</p>
                            <p>Ngôn ngữ Trung</p>
                            <p>Nhật Bản Học</p>
                            <p>Hàn Quốc Học</p>
                            <p>Ngôn ngữ Anh</p>
                            <a href="https://lhu.edu.vn/" className="LHU-website">https://lhu.edu.vn/</a>
                        </div>
                    </div>
                </div>

            </>

        )
    }

}

export default Footer;