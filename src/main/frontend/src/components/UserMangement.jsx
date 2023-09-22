import React, { useState, useEffect } from "react";
import { getUsers } from "../services/userApi";
import UserEditModal from "./modals/UserEditModal";
import { useLoaderData } from "react-router-dom";

export const usersLoader = async () => {
  const users = await getUsers();
  console.log("users: ", users);

  return { users };
};

const UserMangement = () => {
  const { users } = useLoaderData();
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedUserData, setSelectedUserData] = useState(null);
  const [showModal, setShowModal] = useState(false); // 모달의 보이기/숨기기 상태
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  //row 선택
  const selectRow = (id) => {
    //id row의 색깔을 바꾸고 싶다.

    console.log("Selected row id:", id);

    setSelectedRow(id);
  };

  //row 선택시
  const performActionOnSelected = () => {
    if (selectedRow !== null) {
      console.log("Performing action on selected row:", selectedRow);

      setShowModal(true);
    }
  };

  return (
    <div className="container mt-5">
      {loading && <p>로딩중...</p>}
      <h1>User List</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={performActionOnSelected}
      >
        수정
      </button>
      {showModal && (
        <UserEditModal
          show={showModal}
          onHide={() => setShowModal(false)}
          userData={selectedUserData}
        />
      )}
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={selectedRow === user.id ? "selected" : ""}
              onClick={() => {
                selectRow(user.id);
                setSelectedUserData(user);
              }}
            >
              <td>
                <input
                  type="radio"
                  checked={selectedRow === user.id}
                  onChange={() => selectRow(user.id)}
                />
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserMangement;
