import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalViewCompany.scss'
class ModalViewCompany extends Component {

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
                className={'modal-ModalViewCompany'}
                size='lg'
                centered='true'
                scrollable='true'
            >

                <ModalHeader className='titlee' toggle={() => { this.toggle() }}>Công ty TNHH ABCXYZ</ModalHeader>
                <ModalBody className='bodyy'>

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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalViewCompany);
export default ModalViewCompany;