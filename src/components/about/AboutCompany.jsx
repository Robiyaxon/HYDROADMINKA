import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import BorderColorIcon from '@mui/icons-material/BorderColor'

import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import { getContactImageCreate, getContactImages, getContactImageUpdate } from '../../redux/contact-reducer';
import { getAboutCompany, getAboutHeaderCreate, getAboutCompanyUpdate, getAboutCompanyCreate } from './../../redux/about-reducer';

export const AboutCompany = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(false);
    const [selectedI, setSelectedI] = useState(false);
    const [imageId, setImageId] = useState(false)
    let images = null;
    images = useSelector(state => state.aboutPage ? state.aboutPage : null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAboutCompany())
    }, []);
    const toggle = () => {
        setModalOpen(!modalOpen);
        setImageId(null)
    }
    const onSubmit = (data) => {
        !imageId ? dispatch(getAboutCompanyCreate({ selectedImage, title_uz: data.title })) :
            dispatch(getAboutCompanyUpdate({
                id: imageId.id, selectedImage,
                title_uz: data.title_uz, title_ru: data.title_ru, title_en: data.title_en, title_krl: data.title_krl,
                description_uz: data.description_uz, description_ru: data.description_ru, description_en: data.description_en, description_krl: data.description_krl,
                photoUrl1: data.photoUrl1, photoUrl2: data.photoUrl2, photoUrl3: data.photoUrl3,
                originalPath1: imageId.photoUrl1, originalPath2: imageId.photoUrl2, originalPath3: imageId.photoUrl3,
                amount1Discript: data.amount1Discript, amount2Discript: data.amount2Discript, amount3Discript: data.amount3Discript, amount4Discript: data.amount4Discript,
                amount1: data.amount1, amount2: data.amount2, amount3: data.amount3, amount4: data.amount4,
                selectedI
            }));
        setImageId(null)
        setSelectedI(false);
        setModalOpen(false);
    }
    return images && images.company && images.company.length > 0 && (
        <>
            <div>
                <Modal isOpen={modalOpen} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form
                            onSubmit={onSubmit}
                            initialValues={imageId && {
                                title_uz: imageId && imageId.title_uz, title_ru: imageId && imageId.title_ru,
                                title_en: imageId && imageId.title_en, title_krl: imageId && imageId.title_krl,
                                description_uz: imageId && imageId.description_uz, description_ru: imageId && imageId.description_ru,
                                description_en: imageId && imageId.description_en, description_krl: imageId && imageId.description_krl, photoUrl1: imageId && imageId.photoUrl1, 
                                // photoUrl2: imageId && imageId.photoUrl2,
                                // photoUrl3: imageId && imageId.photoUrl3, 
                                amount1Discript: imageId && imageId.amount1Discript,
                                amount2Discript: imageId && imageId.amount2Discript, amount3Discript: imageId && imageId.amount3Discript, amount4Discript: imageId && imageId.amount4Discript,
                                amount1: imageId && imageId.amount1, amount2: imageId && imageId.amount2,
                                amount3: imageId && imageId.amount3, amount4: imageId && imageId.amount4
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
                                    if (!values.description_uz) { errors.description_uz = 'Invalid description Uz address' }
                                }
                                if (!values.description_ru) {
                                    if (!values.description_ru) { errors.description_ru = 'Invalid description Ru address' }
                                }
                                if (!values.description_en) {
                                    if (!values.description_en) { errors.description_en = 'Invalid description En address' }
                                }
                                if (!values.description_krl) {
                                    if (!values.description_krl) { errors.description_krl = 'Invalid description Krl address' }
                                }
                                if (!values.amount1Discript) {
                                    if (!values.amount1Discript) { errors.amount1Discript = 'Invalid amount Discript 1 address' }
                                }
                                if (!values.amount2Discript) {
                                    if (!values.amount2Discript) { errors.amount2Discript = 'Invalid amount Discript 2 address' }
                                }
                                if (!values.amount3Discript) {
                                    if (!values.amount3Discript) { errors.amount3Discript = 'Invalid amount Discript 3 address' }
                                }
                                if (!values.amount4Discript) {
                                    if (!values.amount4Discript) { errors.amount4Discript = 'Invalid amount Discript 4 address' }
                                }
                                if (!values.amount1) {
                                    if (!values.amount1) { errors.amount1 = 'Invalid amount 1 address' }
                                }
                                if (!values.amount2) {
                                    if (!values.amount2) { errors.amount2 = 'Invalid amount 2 address' }
                                }
                                if (!values.amount3) {
                                    if (!values.amount3) { errors.amount3 = 'Invalid amount 3 address' }
                                }
                                if (!values.amount4) {
                                    if (!values.amount4) { errors.amount4 = 'Invalid amount 4 address' }
                                }
                                return errors
                            }}
                            render={({ handleSubmit, submitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <Field name="title_uz">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Title Uz</label>
                                                    <Input type='text' {...input} placeholder='Title Uz' />
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
                                                    <Input type='text' {...input} placeholder='Title Ru' />
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
                                                    <Input type='text' {...input} placeholder='Title En' />
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
                                                    <Input type='text' {...input} placeholder='Title Krl' />
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
                                                    <Input type='text' {...input} placeholder='Description Uz' />
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
                                                    <Input type='text' {...input} placeholder='Description Ru' />
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
                                                    <Input type='text' {...input} placeholder='Description En' />
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
                                                    <Input type='text' {...input} placeholder='Description Krl' />
                                                    {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                        <Field name="photoUrl1" >
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Image 1</label>
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
                                    {/* <div>
                                        <Field name="photoUrl2" >
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Image 2</label>
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
                                        <Field name="photoUrl3" >
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Image 3</label>
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
                                    </div> */}
                                    <div>
                                        <Field name="amount1Discript">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Amount Discript 1</label>
                                                    <Input type='text' {...input} placeholder='Title Uz' />
                                                    {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="amount2Discript">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Amount Discript 2</label>
                                                    <Input type='text' {...input} placeholder='Title Ru' />
                                                    {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="amount3Discript">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Amount Discript 3</label>
                                                    <Input type='text' {...input} placeholder='Title En' />
                                                    {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="amount4Discript">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Amount Discript 4</label>
                                                    <Input type='text' {...input} placeholder='Title Krl' />
                                                    {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="amount1">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Amount 1</label>
                                                    <Input type='text' {...input} placeholder='Amount 1' />
                                                    {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="amount2">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Amount 2</label>
                                                    <Input type='text' {...input} placeholder='Amount 2' />
                                                    {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="amount3">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Amount 3</label>
                                                    <Input type='text' {...input} placeholder='Amount 3' />
                                                    {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="amount4">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label>Amount 4</label>
                                                    <Input type='text' {...input} placeholder='Amount 4' />
                                                    {meta.error && meta.touched && <span style={{ color: '#fd4444' }}>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <Button style={{ width: '100%', marginTop: '20px' }} type='submit' disabled={submitting}>
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
                            <th>Image 1</th>
                            {/* <th>Image 2</th>
                            <th>Image 3</th> */}
                            <th>Title Uz</th>
                            <th>Title Ru</th>
                            <th>Title En</th>
                            <th>Title Krl</th>
                            <th>Description Uz</th>
                            <th>Description Ru</th>
                            <th>Description En</th>
                            <th>Description Krl</th>

                            <th>Amount Discript 1</th>
                            <th>Amount Discript 2</th>
                            <th>Amount Discript 3</th>
                            <th>Amount Discript 4</th>
                            <th>Amount 1</th>
                            <th>Amount 2</th>
                            <th>Amount 3</th>
                            <th>Amount 4</th>
                            <th>-----</th>
                        </tr>
                    </thead>
                    <tbody>
                        {images && images.company.length > 0 && images.company.map((el, i) => {
                            return <tr key={el.id}>
                                <th scope="row">{i + 1}</th>
                                <td><img style={{ width: '30px' }} src={el.photoUrl1} alt="" /></td>
                                {/* <td><img style={{ width: '30px' }} src={el.photoUrl2} alt="" /></td>
                                <td><img style={{ width: '30px' }} src={el.photoUrl3} alt="" /></td> */}

                                <td>{el.title_uz}</td>
                                <td>{el.title_ru}</td>
                                <td>{el.title_en}</td>
                                <td>{el.title_krl}</td>
                                <td>{el.description_uz}</td>
                                <td>{el.description_ru}</td>
                                <td>{el.description_en}</td>
                                <td>{el.description_krl}</td>
                                <td>{el.amount1Discript || '----'}</td>
                                <td>{el.amount2Discript || '----'}</td>
                                <td>{el.amount3Discript || '----'}</td>
                                <td>{el.amount4Discript || '----'}</td>
                                <td>{el.amount1 || '----'}</td>
                                <td>{el.amount2 || '----'}</td>
                                <td>{el.amount3 || '----'}</td>
                                <td>{el.amount4 || '----'}</td>
                                <td><Button onClick={() => {
                                    setImageId(el)
                                    setModalOpen(true)
                                }}><BorderColorIcon /></Button></td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    ) || <div className="spinner"></div>
}
