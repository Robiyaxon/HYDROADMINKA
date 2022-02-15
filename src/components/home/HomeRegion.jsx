import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { getRegionImageDelete, getRegionImages, getRegionImageUpdate, getRegionImageCreate } from '../../redux/home-reducer'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'

const HomeRegion = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [imageId, setImageId] = useState(false)
    let images = null;
    images = useSelector(state => state.home.region ? state.home.region : null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRegionImages())
    }, []);
    const toggle = () => {
        setModalOpen(!modalOpen);
        setImageId(null)
    }
    const onSubmit = (data) => {
        !imageId ? dispatch(getRegionImageCreate({ title_uz: data.title, description_uz: data.description })) : 
        dispatch(getRegionImageUpdate({ title_uz: data.title, description_uz: data.description, id: imageId.id, originalPath: imageId.photoUrl }));
        setModalOpen(false);
        setImageId(null)
    }
    const deleteHandler = (id) => {
        dispatch(getRegionImageDelete(id))
    }
    // debugger
    return images && images.length > 0 && (
        <div>
            <Modal isOpen={modalOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                <Form
                onSubmit={onSubmit}
                initialValues={imageId && { title: imageId && imageId.title_uz, description: imageId && imageId.description_uz }}
                validate={values => {
                    const errors = {}
                    if (!values.title) {
                        if (!values.title) { errors.title = 'Invalid title address' }
                    }
                    if (!values.description) {
                        errors.description = 'Invalid description address'
                    }
                    return errors
                }}
                render={({ handleSubmit, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="title">
                            {({ input, meta }) => (
                            <div>
                                <label>Title</label>
                                <Input type='text' {...input} placeholder='Title'  />
                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="description">
                            {({ input, meta }) => (
                            <div>
                                <label>Description</label>
                                <Input type='text' {...input} placeholder='Description'  />
                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                    </div>
                    
                    <Button style={{width: '100%', marginTop: '20px'}} type='submit' disabled={submitting}>Send</Button>
                </form>
                )} />
                
                </ModalBody>
            </Modal>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Images</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th><Button onClick={ () =>{
                        setModalOpen(true)
                    } }>Create</Button></th>
                </tr>
                </thead>
                <tbody>
                { images && images.length > 0 && images.map((el, i) => {
                    
                return <tr>
                    <th scope="row">{ i + 1 }</th>
                    <td><img style={{ width: '30px' }} src={ el.photoUrl } alt="" /></td>
                    
                    <td>{ el.title_uz }</td>
                    <td>{ el.description_uz }</td>
                    <td><Button onClick={ () => {
                        setImageId(el)
                        setModalOpen(true)
                    } }><BorderColorIcon/></Button> <Button onClick={ () => deleteHandler(el.id) }><DeleteForeverIcon/></Button></td>
                </tr>}) }
                </tbody>
            </Table>
        </div>
    )
}

export default HomeRegion