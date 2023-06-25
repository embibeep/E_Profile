import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import path from '../../../utils/constant';
import Footer from "../../Footer/footer"
import "./ListPosts.scss"
import { ModalAvtCompanyChange, ModalBGCompanyChange, ModalEditCompany, ModalAddPost, ModalViewCV, ModalViewPost } from "../../../components/Modals";
class PostLists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAvtCompanyChange: false,
            isBGCompanyChange: false,
            isEditCompany: false,
            isAddPost: false,
            isViewPost: false,
            isViewCV: false,
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
                }
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



    handlePopUp = () => {
        this.setState({
            isAddPost: true
        })
    }
    togglePopUp = () => {
        this.setState({
            isAddPost: !this.state.isAddPost
        })
    }

    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>

                <div className='btnExit'>
                    <Link to={path.COMUSER} >
                        <button className='btnn'>Quay Lại Hồ Sơ</button>
                    </Link>
                </div>


                <div className='listPosts'>
                    <div className='top'>
                        <table class="table">
                            <thead >
                                <tr>
                                    <th scope="col" className='stt'>STT</th>
                                    <th scope="col">Tên công ty</th>
                                    <th scope="col">Tên công việc</th>
                                    <th scope="col">Mức lương</th>
                                    <th scope="col">Kinh nghiệm</th>
                                    <th scope="col">Hạn tuyển</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Địa chỉ</th>
                                    <th scope="col">Mô tả</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.response.map(item => {
                                    return <tr className='rowdata' onClick={() => this.handlePopUp()}>
                                        <ModalAddPost
                                            isOpen={this.state.isAddPost}
                                            toggleFromParent={this.togglePopUp}
                                            test={'abc'} />
                                        <th className='stt' scope="row"><p>{item.company}</p></th>
                                        <td><p>{item.company}</p></td>
                                        <td><p>{item.title}</p></td>
                                        <td><p>{item.salary}</p></td>
                                        <td><p>{item.exp}</p></td>
                                        <td><p>{item.expireDate}</p></td>
                                        <td><p>{item.email}</p></td>
                                        <td><p>{item.address}</p></td>
                                        <td><p>{item.description}</p></td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className='bot'>

                    </div>

                </div>

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