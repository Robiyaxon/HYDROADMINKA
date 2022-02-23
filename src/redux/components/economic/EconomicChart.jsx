import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { Button, Input, Modal, ModalBody, ModalHeader, Table } from 'reactstrap'
import { getChart, getChartCreate, getChartUpdate, getChartDelete } from '../../redux/economic-reducer';
import { DeleteBtn } from './../../utils/utils';

export const EconomicChart = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [imageId, setImageId] = useState(false)
    let images = null;
    images = useSelector(state => state.economicPage ? state.economicPage : null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChart())
    }, []);
    const toggle = () => {
        setModalOpen(!modalOpen);
        setImageId(null)
    }
    const onSubmit = (data) => {
        !imageId ? dispatch(getChartCreate({ amount: data.amount })) :
            dispatch(getChartUpdate({ id: imageId.id, amount: data.amount }));
        setImageId(null)
        setModalOpen(false);
    }

    return images && images.amount && images.amount.length > 0 && (
        <div>
            <Modal isOpen={modalOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={imageId && { amount: imageId.amount }}
                        validate={values => {
                            const errors = {}
                            if (!values.amount) {
                                if (!values.amount) { errors.amount = 'Invalid title address' }
                            }
                            return errors
                        }}
                        render={({ handleSubmit, submitting }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <Field name="amount">
                                        {({ input, meta }) => (
                                            <div>
                                                <label>Amout</label>
                                                <Input type='number' {...input} placeholder='Amount' />
                                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>

                                <Button style={{ width: '100%', marginTop: '20px' }} type='submit' disabled={submitting}>Send</Button>
                            </form>
                        )} />

                </ModalBody>
            </Modal>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Amout</th>
                        <th><Button onClick={() => {
                            setModalOpen(true)
                        }}>Create</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {images && images.amount.length > 0 && images.amount.map((el, i) => {
                        return <tr key={el.amount}>
                            <th scope="row">{i + 1}</th>

                            <td>{el.amount}</td>
                            <td><Button onClick={() => {
                                setImageId(el)
                                setModalOpen(true)
                            }}><BorderColorIcon /></Button><DeleteBtn handleAdd={()=> dispatch(getChartDelete(el.id))} /></td>
                        </tr>
                    })
                    }
                </tbody>
            </Table>
        </div>
    ) || <div class="spinner"></div>
}