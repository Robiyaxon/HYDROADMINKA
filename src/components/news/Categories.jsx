import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
} from "reactstrap";
import { DeleteBtn } from "./../../utils/utils";
import { getCategories, getCategoriesDelete, getCategoriesUpdate } from "../../redux/news-reducer";
import { getCategoriesCreate } from "./../../redux/news-reducer";

export const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const [selectedI, setSelectedI] = useState(false);
  const [imageId, setImageId] = useState(false);
  let images = null;
  images = useSelector((state) => (state.newsPage ? state.newsPage : null))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const toggle = () => {
    setModalOpen(!modalOpen);
    setImageId(null);
  };
  const onSubmit = (data) => {
    !imageId
      ? dispatch(
          getCategoriesCreate({
            name_uz: data.name_uz,
            name_ru: data.name_ru,
            name_en: data.name_en,
            name_krl: data.name_krl,
          })
        )
      : dispatch(
          getCategoriesUpdate({
            name_uz: data.name_uz,
            name_ru: data.name_ru,
            name_en: data.name_en,
            name_krl: data.name_krl,
            id: imageId.id,
          })
        );
    setImageId(null);
    setSelectedI(false);
    setModalOpen(false);
  };

  return (
    (images && images.categories && images.categories.length > 0 && (
      <div>
        <Modal isOpen={modalOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={onSubmit}
              initialValues={
                imageId && {
                  name_uz: imageId && imageId.name_uz,
                  name_ru: imageId && imageId.name_ru,
                  name_en: imageId && imageId.name_en,
                  name_krl: imageId && imageId.name_krl,
                }
              }
              validate={(values) => {
                const errors = {};
                if (!values.name_uz) {
                  errors.name_uz = "Invalid name Uz address";
                }
                if (!values.name_ru) {
                  errors.name_ru = "Invalid name Ru address";
                }
                if (!values.name_en) {
                  errors.name_en = "Invalid name En address";
                }
                if (!values.name_krl) {
                  errors.name_krl = "Invalid name Krl address";
                }
                return errors;
              }}
              render={({ handleSubmit, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field name="name_uz">
                      {({ input, meta }) => (
                        <div>
                          <label>Name Uz</label>
                          <Input type="text" {...input} placeholder="Name Uz" />
                          {meta.error && meta.touched && (
                            <span style={{ color: "#fd4444" }}>
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="name_ru">
                      {({ input, meta }) => (
                        <div>
                          <label>Name Ru</label>
                          <Input type="text" {...input} placeholder="Name Ru" />
                          {meta.error && meta.touched && (
                            <span style={{ color: "#fd4444" }}>
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="name_en">
                      {({ input, meta }) => (
                        <div>
                          <label>Name En</label>
                          <Input type="text" {...input} placeholder="Name En" />
                          {meta.error && meta.touched && (
                            <span style={{ color: "#fd4444" }}>
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="name_krl">
                      {({ input, meta }) => (
                        <div>
                          <label>Name Krl</label>
                          <Input
                            type="text"
                            {...input}
                            placeholder="Name Krl"
                          />
                          {meta.error && meta.touched && (
                            <span style={{ color: "#fd4444" }}>
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>

                  <Button
                    style={{ width: "100%", marginTop: "20px" }}
                    type="submit"
                    disabled={submitting}
                  >
                    Send
                  </Button>
                </form>
              )}
            />
          </ModalBody>
        </Modal>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name Uz</th>
              <th>Name Ru</th>
              <th>Name En</th>
              <th>Name Krl</th>
              <th>
                <Button
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Create
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {images &&
              images.categories.length > 0 &&
              images.categories.map((el, i) => {
                return (
                  <tr key={el.id}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <h1>{el.name_uz}</h1>
                    </td>
                    <td>
                      <h1>{el.name_ru}</h1>
                    </td>
                    <td>
                      <h1>{el.name_en}</h1>
                    </td>
                    <td>
                      <h1>{el.name_krl}</h1>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          setImageId(el);
                          setModalOpen(true);
                        }}
                      >
                        <BorderColorIcon />
                      </Button>{" "}
                      <DeleteBtn
                        handleAdd={() => dispatch(getCategoriesDelete(el.id))}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    )) || (
      <div className="dis">
        <div className="spinner"></div>
      </div>
    )
  );
};
