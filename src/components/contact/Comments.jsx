import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Table } from "reactstrap";
import { DeleteBtn } from "./../../utils/utils";
import { getCommentsDelete, getComments } from "./../../redux/contact-reducer";

export const Comments = () => {
  let images = null;
  images = useSelector((state) =>
    state.contactPage ? state.contactPage : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, []);

  return (
    (images && images.comments && images.comments.length > 0 && (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Comments</th>
              <th>----</th>
            </tr>
          </thead>
          <tbody>
            {images &&
              images.comments.length > 0 &&
              images.comments.map((el, i) => {
                console.log(el.name);
                return (
                  <tr key={el.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{el.name || "------"}</td>
                    <td>{el.email || "------"}</td>
                    <td>{el.comment || "------"}</td>
                    <td>
                      <DeleteBtn
                        handleAdd={() => dispatch(getCommentsDelete(el.id))}
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
