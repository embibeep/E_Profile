import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./AvatarChange.scss";
class ModalAvtStudentChange extends Component {

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
                className={'modal-ModalAvtStudentChange'}
                size='lg'
                centered='true'
                scrollable='true'
            >

                <ModalHeader className='titlee' toggle={() => { this.toggle() }}>Thay đổi Avatar</ModalHeader>
                <ModalBody className='avtinputbox' style={{ width: "500px", height: "400px" }}>
                    <label for="img" >Chọn ảnh:</label>
                    <input className='inputavt' type="file" id="img" name="img" accept="image/*"></input>
                    <button className='btnaddimg' type='submit'>Đăng ảnh</button>
                </ModalBody>

            </Modal >
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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalAvtStudentChange);
export default ModalAvtStudentChange;