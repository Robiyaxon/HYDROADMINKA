import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from 'react-redux';
import { getCarouselImageDelete } from '../redux/home-reducer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

export const DeleteBtn = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const toggle = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <div>
            <Button onClick={toggle}>
                <DeleteForeverIcon />
            </Button>
            <Modal isOpen={modalOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete</ModalHeader>
                <ModalBody>
                    <div>
                        <h4>Do you really want to delete this information?</h4>
                        <p>If you delete this data, there is no recovery</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={props.handleAdd}>
                        delete
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
