import React from 'react';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthService from "../services/auth.service";

const Profile = (props) => {
  const currentUser = AuthService.getCurrentUser();

  return (

    <Modal
      {...props}
      size='lg'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader>
        <ModalTitle id='contained-modal-title-vcenter'>
          Profile
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <h4>{currentUser.username}</h4>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>

        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 50)}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.onHide}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default Profile;
