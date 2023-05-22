import React from 'react';
import {ReactComponent as ReactLogo} from './user.svg';
import {ReactComponent as Envelope} from './envelope.svg';
import {ReactComponent as Movile} from './mobile-android.svg';
import {ReactComponent as Calendar} from './calender.svg';
import { InfoUserContainer, InfoUserLabel, Avatar, Description, ContainerDescription, ContainerLogoUser, ContainerInfoUser } from './styles';
import { InfoUserProps } from '../../interfaces';

export default function ProfileInfo({ user }: InfoUserProps){
  return (
    <InfoUserContainer>
      <Avatar src={user.avatar} alt="Avatar" />
      <ContainerDescription>
        <ContainerLogoUser>
          <ReactLogo/>
        </ContainerLogoUser>

        <ContainerInfoUser>
          <InfoUserLabel>Nombre y Apellido</InfoUserLabel>
          <Description>{`${user.name} ${user.lastName}`}</Description>
          <InfoUserLabel>Nombre de usuario</InfoUserLabel>
          <Description>{user.username}</Description>
        </ContainerInfoUser>

      </ContainerDescription>

      <ContainerDescription>
        <ContainerLogoUser>
          <Envelope/>
        </ContainerLogoUser>

        <ContainerInfoUser>
          <InfoUserLabel>Email</InfoUserLabel>
          <Description>{user.email}</Description>
        </ContainerInfoUser>

      </ContainerDescription>

      <ContainerDescription>
        <ContainerLogoUser>
          <Movile/>
        </ContainerLogoUser>

        <ContainerInfoUser>
          <InfoUserLabel>Movil</InfoUserLabel>
          <Description>{user.phone}</Description>
        </ContainerInfoUser>

      </ContainerDescription>

      <ContainerDescription>
        <ContainerLogoUser>
          <Calendar/>
        </ContainerLogoUser>

        <ContainerInfoUser>
          <InfoUserLabel>Fecha de inscripcion</InfoUserLabel>
          <Description>{user.inscriptionDate}</Description>
        </ContainerInfoUser>

      </ContainerDescription>
    </InfoUserContainer>
  );
};