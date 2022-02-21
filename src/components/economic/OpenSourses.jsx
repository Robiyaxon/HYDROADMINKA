import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { Button, Input, Modal, ModalBody, ModalHeader, Table } from 'reactstrap'
import { getOpenSoursesUpdate, getOpenSoursesImageCreate, getEconomicOpenSourses, getOpenSoursesDelete } from './../../redux/economic-reducer';

export const OpenSourses = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage,setSelectedImage] = useState(false);
    const [selectedI,setSelectedI] = useState(false);
    const [imageId, setImageId] = useState(false)
    let images = null;
    images = useSelector(state => state.economicPage ? state.economicPage : null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEconomicOpenSourses())
    }, []);
    const toggle = () => {
        setModalOpen(!modalOpen);
        setImageId(null)
    }
    const onSubmit = (data) => {
        !imageId ? dispatch(getOpenSoursesImageCreate({ selectedImage, 
            title_uz: data.title_uz, title_ru: data.title_ru, title_en: data.title_en, title_krl: data.title_krl, 
            description_uz: data.description_uz, description_ru: data.description_ru, description_en: data.description_en, description_krl: data.description_krl, 
        })) : 
        dispatch(getOpenSoursesUpdate({ selectedImage, title_uz: data.title_uz, title_ru: data.title_ru, title_en: data.title_en, title_krl: data.title_krl, 
            description_uz: data.description_uz, description_ru: data.description_ru, description_en: data.description_en, description_krl: data.description_krl, id: imageId.id, originalPath: imageId.photoUrl, selectedI }));
        setImageId(null)
        setSelectedI(false);
        setModalOpen(false);
    }
    const deleteHandler = (id) => {
        dispatch(getOpenSoursesDelete(id))
    }
    return images && images.openSourses && images.openSourses.length > 0 && (
        <div>
            <Modal isOpen={modalOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                <Form
                onSubmit={onSubmit}
                initialValues={imageId && { 
                    title_uz: imageId && imageId.title_uz, 
                    title_ru: imageId && imageId.title_ru, 
                    title_en: imageId && imageId.title_en, 
                    title_krl: imageId && imageId.title_krl, 
                    description_uz: imageId && imageId.description_uz,
                    description_ru: imageId && imageId.description_ru,
                    description_en: imageId && imageId.description_en,
                    description_krl: imageId && imageId.description_krl
                 }}
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
                    if (!values.description_uz) {
                        errors.description_uz = 'Invalid description Uz address'
                    }
                    if (!values.description_ru) {
                        errors.description_ru = 'Invalid description Ru address'
                    }
                    if (!values.description_en) {
                        errors.description_en = 'Invalid description En address'
                    }
                    if (!values.description_krl) {
                        errors.description_krl = 'Invalid description Krl address'
                    }
                    return errors
                }}
                render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="image" >
                            {({ meta }) => (
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
                    <div>
                        <Field name="description_uz">
                            {({ input, meta }) => (
                            <div>
                                <label>Description Uz</label>
                                <Input type='text' {...input} placeholder='Description Uz'  />
                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="description_ru">
                            {({ input, meta }) => (
                            <div>
                                <label>Description Ru</label>
                                <Input type='text' {...input} placeholder='Description Ru'  />
                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="description_en">
                            {({ input, meta }) => (
                            <div>
                                <label>Description En</label>
                                <Input type='text' {...input} placeholder='Description En'  />
                                {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="description_krl">
                            {({ input, meta }) => (
                            <div>
                                <label>Description Krl</label>
                                <Input type='text' {...input} placeholder='Description Krl'  />
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
                    <th>Description Uz</th>
                    <th>Description Ru</th>
                    <th>Description En</th>
                    <th>Description Krl</th>

                    <th><Button onClick={ () =>{
                        setModalOpen(true)
                    } }>Create</Button></th>
                </tr>
                </thead>
                <tbody>
                { images && images.openSourses.length > 0 && images.openSourses.map((el, i) => {
                    
                return <tr key={el.photoUrl}>
                    <th scope="row">{ i + 1 }</th>
                    <td><img style={{ width: '30px' }} src={ el.photoUrl } alt="" /></td>
                    
                    <td>{ el.title_uz || '-----' }</td>
                    <td>{ el.title_ru || '-----' }</td>
                    <td>{ el.title_en || '-----' }</td>
                    <td>{ el.title_krl || '-----' }</td>
                    <td>{ el.description_uz || '-----' }</td>
                    <td>{ el.description_ru || '-----' }</td>
                    <td>{ el.description_en || '-----' }</td>
                    <td>{ el.description_krl || '-----' }</td>

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
