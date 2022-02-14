import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import { getCarouselImages, getCarouselImageUpdate } from '../../redux/home-reducer';

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage,setSelectedImage] = useState(false);
    const [selectedI,setSelectedI] = useState(false);
    const [imageId, setImageId] = useState(null)
    let images = null;
    images = useSelector(state => state.home ? state.home : null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarouselImages())
    }, []);
    const toggle = () => {
        setModalOpen(!modalOpen);
    }
    const onSubmit = (data) => {
        // let a = selectedImage;
        // debugger
        dispatch(getCarouselImageUpdate({ selectedImage, title_uz: data.title, description_uz: data.description, id: imageId.id, originalPath: imageId.photoUrl, selectedI }));
        setImageId(null)
        setSelectedI(false);
        setModalOpen(false);
    }
    return images && images.images && images.images.length > 0 && (
        <div>
            <Modal isOpen={modalOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.title) {
                        if (!values.title) { errors.title = 'Invalid e-mail address' }
                    }
                    if (!values.description) {
                        errors.description = 'Required'
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
                                    // {...input}
                                    name="myImage"
                                    onChange={(event) => {
                                        debugger
                                        const formData = new FormData();
                                        formData.append("selectedFile", event.target.files[0]);
                                        console.log(formData);
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
                    
                    <Button style={{width: '100%', marginTop: '20px'}} type='submit' disabled={submitting}>Sign in</Button>
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
                    <th>_________</th>
                </tr>
                </thead>
                <tbody>
                { images && images.images.length > 0 && images.images.map((el, i) => {
                    
                return <tr>
                    <th scope="row">{ i + 1 }</th>
                    <td><img style={{ width: '30px' }} src={ el.photoUrl } alt="" /></td>
                    
                    <td>{ el.title_uz }</td>
                    <td>{ el.description_uz }</td>
                    <td><Button onClick={ () => {
                        setImageId(el)
                        setModalOpen(true)
                    } }>update</Button> <Button>delete</Button></td>
                </tr>}) }
                </tbody>
            </Table>
        </div>
    )
}

export default Home