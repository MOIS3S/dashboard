
import styled from 'styled-components';

export const Button = styled.button`
  margin-right: 15px;
  border-color: black;
  color: white;
  background-color: black;
  border: 1px solid black;
  border-radius: 8px;
  padding-right: 15px;
  padding-left: 15px;
  height: 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
`;

export const Button2 = styled.button`
  margin-right: 15px;
  border-color: black;
  color: #262D34;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 8px;
  padding-right: 15px;
  padding-left: 15px;
  height: 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
`;

export const EditInfoUserContainer = styled.form`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

export const EditInfoUserLabel = styled.div`
  width: 100%;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
`;

export const EditInfoUserInput = styled.input`
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid #d9d9d9;
  height: 35px;
  border-radius: 5px;
`;

export const EditInfoUserInputMovil = styled.input`
  width: 50%;
  margin-bottom: 30px;
  border: 1px solid #d9d9d9;
  height: 35px;
  border-radius: 5px;
`;

export const ContainerButtonEdit = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ContainerImputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const ContainerImput = styled.div`
  width: 50%;
`;