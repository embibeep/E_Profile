import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./ViewFollow.scss";
import profileIcon from '../../../assets/images/profileIcon.png';


function ModalViewFollow(props) {

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

                <div className="userfollowtitle">Danh sách ứng tuyển</div>
                <div className="userfollow overflow-auto">
                    {props.candidates?.map(item => {
                        return <div className="useritem">
                            <div className="icon object-fit: fill"><img src={profileIcon} /></div>
                            <div className="content">{item.name}</div>
                        </div>
                    })}

                </div>
            </ModalBody>
        </Modal>
    )

}


// export default connect(mapStateToProps, mapDispatchToProps)(ModalViewCV);
export default ModalViewFollow;