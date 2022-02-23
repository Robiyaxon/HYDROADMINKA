import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import {
  getTechnicalVideo,
  getTechnicalVideoUpdate,
  getTechnicalVideoDelete,
  getTechnicalVideoCreate,
} from "./../../redux/technical-reducer";
import { DeleteBtn } from "./../../utils/utils";

export const Videos = () => {
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
    dispatch(getTechnicalVideo());
  }, []);
  const toggle = () => {
    setModalOpen(!modalOpen);
    setImageId(null);
  };
  const onSubmit = (data) => {
    !imageId
      ? dispatch(
          getTechnicalVideoCreate({
            selectedImage,
            videoUrlYoutube: data.videoUrlYoutube,
          })
        )
      : dispatch(
          getTechnicalVideoUpdate({
            selectedImage,
            videoUrlYoutube: data.videoUrlYoutube,
            id: imageId.id,
            originalPath: imageId.videoUrlYoutube,
            selectedI,
          })
        );
    setImageId(null);
    setSelectedI(false);
    setModalOpen(false);
  };

  return (
    (images && images.videos && images.videos.length > 0 && (
      <div>
        <Modal isOpen={modalOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={onSubmit}
              initialValues={
                imageId && { videoUrlYoutube: imageId.videoUrlYoutube }
              }
              validate={(values) => {
                const errors = {};
                if (!values.videoUrlYoutube) {
                  if (!values.videoUrlYoutube) {
                    errors.videoUrlYoutube =
                      "Invalid video Url Youtube address";
                  }
                }
                return errors;
              }}
              render={({ handleSubmit, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field name="videoUrlYoutube">
                      {({ input, meta }) => (
                        <div>
                          <label>Video Url Youtube</label>
                          <Input
                            type="text"
                            {...input}
                            placeholder="Video Url Youtube"
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
              <th>Video Url Youtube</th>
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
              images.videos.length > 0 &&
              images.videos.map((el, i) => {
                return (
                  <tr key={el.id}>
                    <th scope="row">{i + 1}</th>
                    <iframe
                      src={el.videoUrlYoutube}
                      title="YouTube video player"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
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
                          dispatch(getTechnicalVideoDelete(el.id))
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
