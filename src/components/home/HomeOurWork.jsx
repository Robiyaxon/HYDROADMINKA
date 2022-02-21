import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import BorderColorIcon from '@mui/icons-material/BorderColor'

import { getOurWorkImageDelete, getOurWorkImages, getOurWorkImageUpdate, getOurWorkImageCreate } from '../../redux/home-reducer'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import { DeleteBtn } from './../../utils/utils';

const HomeOurWork = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage,setSelectedImage] = useState(false);
    const [selectedI,setSelectedI] = useState(false);
    const [imageId, setImageId] = useState(false)
    let images = null;
    images = useSelector(state => state.home.ourWork ? state.home.ourWork : null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOurWorkImages())
    }, []);
    const toggle = () => {
        setModalOpen(!modalOpen);
        setImageId(null)
    }
    const onSubmit = (data) => {
        !imageId ? dispatch(getOurWorkImageCreate({ selectedImage, title_uz: data.title_uz, title_ru: data.title_ru,  title_en: data.title_en, title_krl: data.title_krl })) : 
        dispatch(getOurWorkImageUpdate({ selectedImage, title_uz: data.title_uz, title_ru: data.title_ru,  title_en: data.title_en, title_krl: data.title_krl, id: imageId.id, originalPath: imageId.photoUrl, selectedI }));
        setImageId(null)
        setSelectedI(false);
        setModalOpen(false);
    }
    // 
    return images && images.length > 0 && (
        <div>
            <Modal isOpen={modalOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                <Form
                onSubmit={onSubmit}
                initialValues={imageId && { title_uz: imageId && imageId.title_uz, title_ru: imageId && imageId.title_ru,
                    title_en: imageId && imageId.title_en, title_krl: imageId && imageId.title_krl }}
                validate={values => {
                    const errors = {}
                    if (!values.title_uz) {
                        if (!values.title_uz) { errors.title_uz = 'Invalid title Uz address' }
                    }
                    if (!values.title_ru) {
                        if (!values.title_ru) { errors.title_ru = 'Invalid title Ru address' }
                    }
                    if (!values.title_en) {
                        if (!values.title_en) { errors.title_en = 'Invalid title En address' }
                    }
                    if (!values.title_krl) {
                        if (!values.title_krl) { errors.title_krl = 'Invalid title Krl address' }
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
                        <Field name="title_uz">
                            {({ input, meta }) => (
                            <div>
                                <label>Title Uz</label>
                                <Input type='text' {...input} placeholder='Title'  />
                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="title_ru">
                            {({ input, meta }) => (
                            <div>
                                <label>Title Ru</label>
                                <Input type='text' {...input} placeholder='Title'  />
                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="title_en">
                            {({ input, meta }) => (
                            <div>
                                <label>Title En</label>
                                <Input type='text' {...input} placeholder='Title'  />
                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="title_krl">
                            {({ input, meta }) => (
                            <div>
                                <label>Title Krl</label>
                                <Input type='text' {...input} placeholder='Title'  />
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
                    <th>Title Uz</th>
                    <th>Title Ru</th>
                    <th>Title En</th>
                    <th>Title Krl</th>
                    <th><Button onClick={ () =>{
                        setModalOpen(true)
                    } }>Create</Button></th>
                </tr>
                </thead>
                <tbody>
                { images && images.length > 0 && images.map((el, i) => {
                    
                return <tr key={el.id}>
                    <th scope="row">{ i + 1 }</th>
                    <td><img style={{ width: '30px' }} src={ el.photoUrl } alt="" /></td>
                    
                    <td>{ el.title_uz }</td>
                    <td>{ el.title_ru }</td>
                    <td>{ el.title_en }</td>
                    <td>{ el.title_krl }</td>
                    <td><Button onClick={ () => {
                        setImageId(el)
                        setModalOpen(true)
                    } }><BorderColorIcon/></Button><DeleteBtn handleAdd={()=> dispatch(getOurWorkImageDelete(el.id))} /></td>
                </tr>}) }
                </tbody>
            </Table>
        </div>
    ) || <div class="spinner"></div>
}

export default HomeOurWork