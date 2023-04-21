import React from "react";
import { Navigate } from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <div>
                hello
            </div>
        )

        // const { isLoggedIn } = this.props;
        // let linkToRedirect = isLoggedIn ? '/working' : '/user';
        // return (
        //     <Navigate to={linkToRedirect} />
        // )
    }
}

export default Home;