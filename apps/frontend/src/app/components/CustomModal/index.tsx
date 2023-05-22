import React from 'react';
import { ContainerModal, ModalContent, ModalCloseButton } from './styles';

type Props = {
  children: string | JSX.Element | JSX.Element[] | any;
  close: any;
}

export function CustomModal({ children, close }: Props){
  const [isOpen, setIsOpen] = React.useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    close(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ContainerModal>
      <ModalContent>
        {children}
        <ModalCloseButton onClick={closeModal}>Cerrar</ModalCloseButton>
      </ModalContent>
    </ContainerModal>
  );
};