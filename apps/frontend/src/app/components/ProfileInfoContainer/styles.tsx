import styled from 'styled-components';

export const ButtonTab = styled.div`
  border-color: white;
  color: #262D34;
  margin-right: 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  cursor: pointer;
`;

export const Button = styled.button`
  border-color: black;
  color: white;
  background-color: #262D34;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px 16px;
  height: 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const CotainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const CotainerTabs = styled.div`
  display: flex;
  justify-content: space-between;
`;