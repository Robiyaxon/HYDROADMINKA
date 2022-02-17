import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import BorderColorIcon from '@mui/icons-material/BorderColor'

import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import { getContactImageCreate, getContactImages, getContactImageUpdate } from './../../redux/contact-reducer';
import { getAboutHeader, getAboutHeaderUpdate } from '../../redux/about-reducer'
import { getAboutHeaderCreate } from './../../redux/about-reducer';
import { getAboutImageUpdate } from './../../redux/home-reducer';

export const About = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage,setSelectedImage] = useState(false);
    const [selectedI,setSelectedI] = useState(false);
    const [imageId, setImageId] = useState(false)
    let images = null;
    images = useSelector(state => state.aboutPage ? state.aboutPage : null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAboutHeader())
    }, []);
    const toggle = () => {
        setModalOpen(!modalOpen);
        setImageId(null)
    }
    const onSubmit = (data) => {
        console.log(data);
        !imageId ? dispatch(getAboutHeaderCreate({ selectedImage, title_uz: data.title })) : 
        dispatch(getAboutHeaderUpdate({ selectedImage, title_uz: data.title, id: imageId.id, originalPath: imageId.photoUrl, selectedI }));
        setImageId(null)
        setSelectedI(false);
        setModalOpen(false);
    }
    return images && images.aboutData && images.aboutData.length > 0 && (
        <div>
            <Modal isOpen={modalOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                <Form
                onSubmit={onSubmit}
                initialValues={imageId && { title: imageId && imageId.title_uz }}
                validate={values => {
                    const errors = {}
                    if (!values.title) {
                        if (!values.title) { errors.title = 'Invalid title address' }
                    }
                    return errors
                }}
                render={({ handleSubmit, submitting }) => (
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
                    </div>
                    
                    <Button style={{width: '100%', marginTop: '20px'}} type='submit' disabled={submitting}>
                      Send
                      </Button>
                </form>
                )} />
                
                </ModalBody>
            </Modal>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Images</th>
                    <th>FullName</th>
                    <th>Job</th>
                    <th>Job</th>
                    <th>-----</th>
                </tr>
                </thead>
                <tbody>
                { images && images.aboutData.length > 0 && images.aboutData.map((el, i) => {
                return <tr>
                    <th scope="row">{ i + 1 }</th>
                    <td><img style={{ width: '30px' }} src={ el.photoUrl } alt="" /></td>
                    
                    <td>{ el.title_uz }</td>
                    <td><Button onClick={ () => {
                        setImageId(el)
                        setModalOpen(true)
                    } }><BorderColorIcon/></Button></td>
                </tr>}) }
                </tbody>
            </Table>
        </div>
    ) ||  null
}
