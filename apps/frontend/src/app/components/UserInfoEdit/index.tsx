import React from 'react';
import { ContainerButtonEdit, Button2, Button, EditInfoUserContainer, ContainerImputGroup, ContainerImput, EditInfoUserLabel,
  EditInfoUserInput, EditInfoUserInputMovil   } from './styles';

export default function UserInfoEdit({ user, handleCancel }: any){
  return (
    <>
    <ContainerButtonEdit>
      <Button2 onClick={() => handleCancel('info')}>Cancelar edicion</Button2>
      <Button>Guardar</Button>
    </ContainerButtonEdit>
    <EditInfoUserContainer>
      <ContainerImputGroup>
        <ContainerImput>
          <EditInfoUserLabel>Nombre</EditInfoUserLabel>
          <EditInfoUserInput type="text" value={user.name} />
        </ContainerImput>
        <ContainerImput>
          <EditInfoUserLabel>Apellido</EditInfoUserLabel>
          <EditInfoUserInput type="text" value={user.lastName} />
        </ContainerImput>
      </ContainerImputGroup>
      <EditInfoUserLabel>Nombre de usuario</EditInfoUserLabel>
      <EditInfoUserInput type="text" value={user.username} />
      <EditInfoUserLabel>Email</EditInfoUserLabel>
      <EditInfoUserInput type="text" value={user.email} />
      <EditInfoUserLabel>Movil</EditInfoUserLabel>
      <EditInfoUserInputMovil type="text" value={user.phone} />
    </EditInfoUserContainer>
    </>
  );
};