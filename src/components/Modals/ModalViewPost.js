import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Posts from '../Posts/Posts.js'
import './ModalViewPost.scss'
class ModalViewPost extends Component {

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
        console.log('check child props', this.props)
        console.log('check child props', this.props.isOpen)
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-ModalViewPost'}
                size='lg'
                centered='true'
                scrollable='true'
            >

                <ModalHeader toggle={() => { this.toggle() }}>Modal title</ModalHeader>
                <ModalBody>
                    <Posts />
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={() => { this.toggle() }}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter> */}
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

// export default connect(mapStateToProps, mapDispatchToProps)(ModalViewPost);
export default ModalViewPost;