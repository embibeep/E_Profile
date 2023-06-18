import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalBGCompanyChange extends Component {

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
                className={'modal-ModalBGCompanyChange'}
                size='lg'
                centered='true'
                scrollable='true'
            >

                <ModalHeader toggle={() => { this.toggle() }}>Thay đổi ảnh bìa công ty</ModalHeader>
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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalBGCompanyChange);
export default ModalBGCompanyChange;