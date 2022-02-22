import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
} from "reactstrap";
import {
  getAboutTeamMembars,
  getAboutTeamMembersCreate,
  getAboutTeamMembersUpdate,
  getAboutTeamMembersDelete,
} from "./../../redux/about-reducer";

export const TeamMembers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("create");
  const [selectedImage, setSelectedImage] = useState(false);
  // eslint-disable-next-line
  const [selectedI, setSelectedI] = useState(false);
  const [imageId, setImageId] = useState(false);
  let images = null;
  images = useSelector((state) => (state.aboutPage ? state.aboutPage : null));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutTeamMembars());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const toggle = () => {
    setModalOpen(!modalOpen);
    setImageId(null);
  };
  const onSubmit = (data) => {
    if (modalType === "create") {
      selectedImage
        ? dispatch(
            getAboutTeamMembersCreate({
              selectedImage,
              fullName: data.fullName,
              staffPosition: { name_uz: data.name_uz },
            })
          )
        : dispatch(
            getAboutTeamMembersCreate({
              fullName: data.fullName,
              staffPosition: { name_uz: data.name_uz },
            })
          );
    } else {
      selectedImage
        ? dispatch(
            getAboutTeamMembersUpdate({
              id: imageId.id,
              selectedImage,
              fullName: data.fullName,
              name_uz: data.name_uz,
            })
          )
        : dispatch(
            getAboutTeamMembersUpdate({
              id: imageId.id,
              fullName: data.fullName,
              name_uz: data.name_uz,
            })
          );
    }
    setImageId(null);
    setSelectedI(false);
    setModalOpen(false);
  };
  const deleteHandler = (id) => {
    dispatch(getAboutTeamMembersDelete(id));
  };
  // const staffPositionCopy = imageId.staffPosition && [...imageId.staffPosition] || null
  return (
    (images && images.team && images.team.length > 0 && (
      <div>
        <Modal isOpen={modalOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={onSubmit}
              initialValues={
                imageId && {
                  image: "",
                  fullName: imageId.fullName,
                  name_uz:
                    imageId.staffPosition && imageId.staffPosition.name_uz,
                }
              }
              validate={(values) => {
                const errors = {};
                if (!values.fullName) {
                  if (!values.fullName) {
                    errors.fullName = "Invalid title address";
                  }
                }
                return errors;
              }}
              render={({ handleSubmit, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field name="image">
                      {({ input, meta }) => (
                        <div>
                          <label>Image</label>
                          <Input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={(e) => {
                              setSelectedImage(e.target.files[0]);
                            }}
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
                  <div>
                    <Field name="fullName">
                      {({ input, meta }) => {
                        return (
                          <div>
                            <label>Title</label>
                            <Input type="text" {...input} placeholder="Title" />
                            {meta.error && meta.touched && (
                              <span style={{ color: "#fd4444" }}>
                                {meta.error}
                              </span>
                            )}
                          </div>
                        );
                      }}
                    </Field>
                  </div>
                  <div>
                    <Field name="name_uz">
                      {({ input, meta }) => (
                        <div>
                          <label>Title</label>
                          <Input
                            type="text"
                            {...input}
                            placeholder="Postion name uz"
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
              <th>Images</th>
              <th>Title</th>
              <th>Description</th>
              <th>Position Name Uz</th>
              {/* <th>Position Name En</th>
                        <th>Position Name Ru</th> */}
              <th>
                <Button
                  onClick={() => {
                    setModalOpen(true);
                    setModalType("create");
                  }}
                >
                  Create
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {images &&
              images.team.length > 0 &&
              images.team.map((el, i) => {
                return (
                  <tr key={el.id}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <img style={{ width: "30px" }} src={el.photoUrl} alt="" />
                    </td>

                    <td>{el.fullName}</td>
                    <td>{el.description_uz}</td>
                    <td>{el.staffPosition.name_uz}</td>
                    {/* <td>{el.staffPosition.name_ru}</td>
                            <td>{el.staffPosition.name_en}</td> */}
                    {/* <td>{ el.positName_en }</td> */}
                    <td>
                      <Button
                        onClick={() => {
                          setImageId(el);
                          setModalOpen(true);
                          setModalType("update");
                        }}
                      >
                        <BorderColorIcon />
                      </Button>
                      <Button onClick={() => deleteHandler(el.id)}>
                        <DeleteForeverIcon />
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    )) || <div className="spinner"></div>
  );
};
