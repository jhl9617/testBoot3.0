// UserEditModal.jsx
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UserEditModal = ({ show, onHide, userData }) => {
  console.log("userData: ", userData);
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={userData.name} />
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" defaultValue={userData.email} />
            <Form.Label>password</Form.Label>
            <Form.Control type="password" defaultValue={userData.password} />
            <Form.Label>password confirm</Form.Label>
            <Form.Control type="password" defaultValue={userData.password} />
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" defaultValue={userData.role} />
          </Form.Group>
          {/* More form fields here */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          // onClick={}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserEditModal;
