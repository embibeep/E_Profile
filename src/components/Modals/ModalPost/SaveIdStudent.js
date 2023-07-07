import React, { useEffect, useState, useRef, useMemo } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import profileIcon from '../../../assets/images/profileIcon.png';


function SaveIdStudent(props) {

    const [idStudent, setidStudent] = useState({});

    useEffect(() => {
        setidStudent({ ...props.idStudent })
    }, [props.idStudent])


    const SaveIdStudent = (idStudent) => {
        props.SaveId(idStudent);
    }


}

export default SaveIdStudent;