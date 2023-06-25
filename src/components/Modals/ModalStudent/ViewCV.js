import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import lachongImg from '../../../assets/images/lachongImg.jpg';
class ModalViewCV extends Component {

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
                className={'modal-ModalViewCV'}
                size='lg'
                centered='true'
                scrollable='true'
            >

                <ModalHeader className='titlee' toggle={() => { this.toggle() }}>Xem CV</ModalHeader>
                <ModalBody className='avtinputboxviewcv' style={{ width: "100%", height: "450px" }}>

                    <img src={lachongImg}></img>
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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalViewCV);
export default ModalViewCV;