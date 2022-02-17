import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { Button, Input, Modal, ModalBody, ModalHeader, Table } from 'reactstrap'
import { getEconomicImages, geEconomicImageCreate, getEconomicDelete, getEconomicUpdate } from './../../redux/economic-reducer';
import style from './Economic.module.css'

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
        !imageId ? dispatch(geEconomicImageCreate({ selectedImage, title_uz: data.title })) : 
        dispatch(getEconomicUpdate({ selectedImage, title_uz: data.title, id: imageId.id, originalPath: imageId.photoUrl, selectedI }));
        setImageId(null)
        setSelectedI(false);
        setModalOpen(false);
    }
    const deleteHandler = (id) => {
        dispatch(getEconomicDelete(id))
    }
    return images && images.images && images.images.length > 0 && (
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
                    
                    <td className={style.tableTitle}>{ el.title_uz }</td>
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
