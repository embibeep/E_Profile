
import React from "react";
import './SearchBar.scss'
class SearchBar extends React.Component {
    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
                <div className="search-container">
                    <div className="search-label">
                        <h3>Tìm kiếm công việc mà bạn mong muốn</h3>
                        <h4>Tìm kiếm công ty mà bạn muốn ứng tuyển</h4>
                    </div>

                    <div className="wrapper">
                        <div className="search-wrapper">
                            <label htmlFor="search-form">
                                <input
                                    type="search"
                                    name="search-form"
                                    id="search-form"
                                    className="search-input"
                                    placeholder="Nhập tên công việc hoặc công ty...."
                                />
                            </label>
                        </div>
                        <div className="dexuat">
                            {/* <span class="dexuat-content">SoftWare Engineer</span>
                            <span class="dexuat-content">SoftWare Engineer</span>
                            <span class="dexuat-content">SoftWare Engineer</span> */}
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default SearchBar; 