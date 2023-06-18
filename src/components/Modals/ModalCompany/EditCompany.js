import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalEditCompany extends Component {

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
                className={'modal-ModalEditCompany'}
                size='lg'
                centered='true'
                scrollable='true'
            >

                <ModalHeader toggle={() => { this.toggle() }}>Chỉnh sửa thông tin công ty</ModalHeader>
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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalEditCompany);
export default ModalEditCompany;