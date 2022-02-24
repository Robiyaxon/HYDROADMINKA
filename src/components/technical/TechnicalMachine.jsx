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

import {
  getCorporativeHeader,
  getCorporativeHeaderCreate,
} from "../../redux/corporative-reducer";
import { getCorporativeHeaderUpdate } from "./../../redux/corporative-reducer";
import {
  getTechnicalMachine,
  getTechnicalMachineDelete,
  getTechnicalMachineUpdate,
} from "../../redux/technical-reducer";
import { getTechnicalMachineCreate } from "./../../redux/technical-reducer";
import { DeleteBtn } from "./../../utils/utils";

export const TechnicalMachine = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const [selectedI, setSelectedI] = useState(false);
  const [imageId, setImageId] = useState(false);
  let images = null;
  images = useSelector((state) =>
    state.technicalPage ? state.technicalPage : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechnicalMachine());
  }, []);
  const toggle = () => {
    setModalOpen(!modalOpen);
    setImageId(null);
  };
  const onSubmit = (data) => {
    console.log(data);
    !imageId
      ? dispatch(
          getTechnicalMachineCreate({
            name_uz: data.name_uz,
            name_ru: data.name_ru,
            name_en: data.name_en,
            name_krl: data.name_krl,
          })
        )
      : dispatch(
          getTechnicalMachineUpdate({
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
    (images && images.machine && images.machine.length > 0 && (
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
                  if (!values.name_uz) {
                    errors.name_uz = "Invalid name uz address";
                  }
                }
                if (!values.name_ru) {
                  if (!values.name_ru) {
                    errors.name_ru = "Invalid name ru address";
                  }
                }
                if (!values.name_en) {
                  if (!values.name_en) {
                    errors.name_en = "Invalid name en address";
                  }
                }
                if (!values.name_krl) {
                  if (!values.name_krl) {
                    errors.name_krl = "Invalid name krl address";
                  }
                }
                return errors;
              }}
              render={({ handleSubmit, submitting }) => (
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
                  <div></div>

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
              images.machine.length > 0 &&
              images.machine.map((el, i) => {
                return (
                  <tr key={el.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{el.name_uz || "-----"}</td>
                    <td>{el.name_ru || "-----"}</td>
                    <td>{el.name_en || "-----"}</td>
                    <td>{el.name_krl || "-----"}</td>
                    <td>
                      <Button
                        onClick={() => {
                          setImageId(el);
                          setModalOpen(true);
                        }}
                      >
                        <BorderColorIcon />
                      </Button>
                      <DeleteBtn
                        handleAdd={() =>
                          dispatch(getTechnicalMachineDelete(el.id))
                        }
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
