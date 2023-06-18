import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalBGStudentChange extends Component {

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
                className={'modal-ModalBGStudentChange'}
                size='lg'
                centered='true'
                scrollable='true'
            >

                <ModalHeader toggle={() => { this.toggle() }}>Thay đổi ảnh bìa</ModalHeader>
                <ModalBody style={{ width: "500px", height: "500px" }}>

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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalBGStudentChange);
export default ModalBGStudentChange;