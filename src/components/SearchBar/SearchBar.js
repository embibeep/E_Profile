
import React from "react";
import './SearchBar.scss'
class SearchBar extends React.Component {
    render() {
        return (
            <>
                <div className="search-container">
                    <div className="search-label">
                        <p>Tìm kiếm công việc mà bạn mong muốn</p>
                        <p>Tìm kiếm công ty mà bạn muốn ứng tuyển</p>
                    </div>

                    <div className="wrapper">
                        <div className="search-wrapper">
                            <label htmlFor="search-form">
                                <input
                                    type="search"
                                    name="search-form"
                                    id="search-form"
                                    className="search-input"
                                    placeholder="Search for..."
                                />
                            </label>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default SearchBar; 