import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalEditStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-ModalEditStudent'}
                size='lg'
                centered='true'
                scrollable='true'
            >

                <ModalHeader className='titlee' toggle={() => { this.toggle() }}>Chỉnh sửa thông tin cá nhân</ModalHeader>
                <ModalBody className='avtinputbox' style={{ width: "100%", height: "400px" }}>

                    <>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

                        <form>
                            <div class="form-group">
                                <label>Họ và Tên:</label>
                                <input class="form-control" placeholder="nhập họ tên"></input>
                            </div>
                            <div class="form-group">
                                <label>Ngày sinh:</label>
                                <input class="form-control" placeholder="nhập ngày sinh"></input>
                            </div>
                            <div class="form-group">
                                <label>Số điện thoại:</label>
                                <input class="form-control" placeholder="nhập số điện thoại"></input>
                            </div>
                            <div class="form-group">
                                <label>Giới tính:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>chọn giới tính</option>
                                    <option value="1">nam</option>
                                    <option value="2">nữ</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Địa chỉ:</label>
                                <input class="form-control" placeholder="nhập địa chỉ"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email:</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                            <div class="form-group">
                                <label>Facebook:</label>
                                <input class="form-control" placeholder="nhập địa chỉ facebook"></input>
                            </div>
                            <div class="form-group">
                                <label>Giới thiệu:</label>
                                <input class="form-control overflow-auto decription" placeholder=""></input>
                            </div>

                            <br></br>
                            <button type="submit" class="btn-right btn btn-primary">Cập nhật thông tin</button>
                        </form>
                    </>
                </ModalBody>
            </Modal>
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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalEditStudent);
export default ModalEditStudent;