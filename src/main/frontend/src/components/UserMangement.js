import React, { useState, useEffect } from "react";
import { getUsers } from "../api";

import { useLoaderData } from "react-router-dom";

export const usersLoader = async () => {
  const users = await getUsers();
  console.log("users: ", users);

  return { users };
};

const UserMangement = () => {

  const { users } = useLoaderData();
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("요청");
      try {
        // const response = await axios.get("api/v1/users/");
        // console.log(response.data);
        // setUsers(response.data);
      } catch (err) {
        console.log("에러: ", err);
      }
    };
    fetchUsers();
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
      // Add the action you want to perform here
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
        액션
      </button>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Select</th>
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
              onClick={() => selectRow(user.id)}
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
