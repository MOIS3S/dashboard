import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 480px;
  min-height: 70%;
  padding: 20px;
  position: relative;
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-color: black;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 16px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  cursor: pointer;
`;