import styled from 'styled-components';

export const InfoUserContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoUserLabel = styled.div`
font-weight: 600;
  margin-top: 15px;
  font-size: 13px;
`;

export const Avatar = styled.img`
  width: 130px;
  border-radius: 50%;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

export const ContainerDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #e8e8f6;
  width: 320px;
  padding-bottom: 25px;
`;

export const ContainerLogoUser = styled.div`
  width: 30px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const ContainerInfoUser = styled.div`
  text-align: left;
`;