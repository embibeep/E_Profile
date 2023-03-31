import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import Posts from "../../components/Posts/Posts.js";

class Company extends React.Component {
    render() {
        return (
            <>
                <SearchBar />
                <Posts />
            </>
        )
    }
}

export default Company;