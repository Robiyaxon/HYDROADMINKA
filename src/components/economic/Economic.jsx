import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import BorderColorIcon from '@mui/icons-material/BorderColor'

import { Button, Input, Modal, ModalBody, ModalHeader, Table } from 'reactstrap'
import { getEconomicImages, geEconomicImageCreate, getEconomicDelete, getEconomicUpdate } from './../../redux/economic-reducer';
import style from './Economic.module.css'
import { DeleteBtn } from './../../utils/utils';

export const Economic = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage,setSelectedImage] = useState(false);
    const [selectedI,setSelectedI] = useState(false);
    const [imageId, setImageId] = useState(false)
    let images = null;
    images = useSelector(state => state.economicPage ? state.economicPage : null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEconomicImages())
    }, []);
    const toggle = () => {
        setModalOpen(!modalOpen);
        setImageId(null)
    }
    const onSubmit = (data) => {
        !imageId ? dispatch(geEconomicImageCreate({ selectedImage, title_uz: data.title_uz, title_ru: data.title_ru, title_en: data.title_en, title_krl: data.title_krl })) : 
        dispatch(getEconomicUpdate({ selectedImage, title_uz: data.title_uz, title_ru: data.title_ru, title_en: data.title_en, title_krl: data.title_krl, id: imageId.id, originalPath: imageId.photoUrl, selectedI }));
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
                render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="image" >
                            {({ meta }) => (
                            <div>
                                <label>Image</label>
                                <Input
                                    type="file"
                                    name="myEconomicImage"
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
                { images && images.images.length > 0 && images.images.map((el, i) => {
                return <tr key={el.photoUrl}>
                    <th scope="row">{ i + 1 }</th>
                    <td><img style={{ width: '30px' }} src={ el.photoUrl } alt="" /></td>
                    
                    <td>{ el.title_uz }</td>
                    <td>{ el.title_ru }</td>
                    <td>{ el.title_en }</td>
                    <td>{ el.title_krl }</td>
                    <td><Button onClick={ () => {
                        setImageId(el)
                        setModalOpen(true)
                    } }><BorderColorIcon/></Button><DeleteBtn handleAdd={()=> dispatch(getEconomicDelete(el.id))} /></td>
                </tr>}) }
                </tbody>
            </Table>
        </div>
    ) || <div class="spinner"></div>
}
