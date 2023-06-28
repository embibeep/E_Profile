import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./ViewFollow.scss";
import lachongImg from '../../../assets/images/lachongImg.jpg';
function ModalXemCV(props) {

    return (
        <Modal isOpen={props.isOpen}
            toggle={props.toggleFromParent}
            className={'modal-ModalViewCV'}
            size='lg'
            centered='true'
            scrollable='true'
        >

            <ModalHeader className='titlee' toggle={props.toggleFromParent}>Danh sách ứng tuyển</ModalHeader>
            <ModalBody className='avtinputboxviewcv' style={{ width: "100%", height: "450px" }}>
                <img src={lachongImg} />
            </ModalBody>
        </Modal>
    )

}


// export default connect(mapStateToProps, mapDispatchToProps)(ModalViewCV);
export default ModalXemCV;