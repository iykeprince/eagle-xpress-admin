import React from "react";
import firebase from "../Firebase";

const User = ({ user, deleteCallback }) => {
  const deleteUser = () => {
    if(!window.confirm('Do you really want to proceed?')){
        return;
    }
    firebase
      .deleteUser(user.id)
      .then(() => {
        deleteCallback(false, "User has been deleted");
      })
      .catch((error) => deleteCallback(false, error.message));
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <div className="d-flex justify-content-between">
          <button onClick={deleteUser} className="btn btn-sm btn-danger">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default User;
