import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { getCarouselImageDelete, getCarouselImages, getCarouselImageUpdate, getCarouselImageCreate } from '../../redux/home-reducer'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import { getMainPartners, getMainPartnersUpdate } from '../../redux/corporative-reducer'
import { getMainPartnersCreate, getMainPartnersDelete } from './../../redux/corporative-reducer';

export const MainPartners = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(false);
    const [selectedI, setSelectedI] = useState(false);
    const [imageId, setImageId] = useState(false)
    let images = null;
    images = useSelector(state => state.corporativePage ? state.corporativePage : null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMainPartners())
    }, []);
    const toggle = () => {
        setModalOpen(!modalOpen);
        setImageId(null)
    }
    const onSubmit = (data) => {
        !imageId ? dispatch(getMainPartnersCreate({ selectedImage, name: data.name, description_uz: data.description, urlLink: data.urlLink })) :
            dispatch(getMainPartnersUpdate({ selectedImage, name: data.name, description_uz: data.description, id: imageId.id, originalPath: imageId.photoUrl, selectedI, urlLink: data.urlLink }));
        setImageId(null)
        setSelectedI(false);
        setModalOpen(false);
    }
    const deleteHandler = (id) => {
        dispatch(getMainPartnersDelete(id))
    }
    return images && images.partners && images.partners.length > 0 && (
        <div>
            <Modal isOpen={modalOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={imageId && { name: imageId && imageId.name, description: imageId && imageId.description_uz, urlLink: imageId && imageId.urlLink }}
                        validate={values => {
                            const errors = {}
                            if (!values.name) {
                                if (!values.name) { errors.name = 'Invalid name address' }
                            }
                            if (!values.description) {
                                errors.description = 'Invalid description address'
                            }
                            if (!values.urlLink) {
                                errors.urlLink = 'Invalid urlLink address'
                            }
                            return errors
                        }}
                        render={({ handleSubmit, form, submitting }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <Field name="image" >
                                        {({ input, meta }) => (
                                            <div>
                                                <label>Image</label>
                                                <Input
                                                    type="file"
                                                    name="myImage"
                                                    onChange={(event) => {
                                                        const formData = new FormData();
                                                        formData.append("selectedFile", event.target.files[0]);
                                                        setSelectedImage(formData);
                                                        setSelectedI(true)
                                                    }}
                                                />
                                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div>
                                    <Field name="name">
                                        {({ input, meta }) => (
                                            <div>
                                                <label>Name</label>
                                                <Input type='text' {...input} placeholder='Company name' />
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
                                                <Input type='text' {...input} placeholder='Description' />
                                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div>
                                    <Field name="urlLink">
                                        {({ input, meta }) => (
                                            <div>
                                                <label>Url Link</label>
                                                <Input type='text' {...input} placeholder='Url Link' />
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
                        <th>Images</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Link url</th>
                        <th><Button onClick={() => {
                            setModalOpen(true)
                        }}>Create</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {images && images.partners.length > 0 && images.partners.map((el, i) => {

                        return <tr key={el.id}>
                            <th scope="row">{i + 1}</th>
                            <td><img style={{ width: '30px' }} src={el.photoUrl} alt="" /></td>

                            <td>{el.name}</td>
                            <td>{el.description_uz || '-----'}</td>
                            <td>{el.urlLink || '-----'}</td>
                            <td><Button onClick={() => {
                                setImageId(el)
                                setModalOpen(true)
                            }}><BorderColorIcon /></Button> <Button onClick={() => deleteHandler(el.id)}><DeleteForeverIcon /></Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}
