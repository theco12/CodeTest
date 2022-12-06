import Modal from "components/Modal";
import { useState } from "react";
import styled from "styled-components";

export default function ModalPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          Hello
        </Modal>
      )}
    </>
  );
}
