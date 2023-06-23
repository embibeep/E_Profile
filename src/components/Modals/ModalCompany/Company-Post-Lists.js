import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import path from '../../../utils/constant';
import Footer from "../../Footer/footer"
class PostLists extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <Link to={path.COMUSER} className='btn'>
                    Quay Lại Hồ Sơ
                </Link>

                <Footer />
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(PostList);
export default PostLists;