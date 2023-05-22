import styled from 'styled-components';

export const CourseContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`;

export const CourseTitle = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 15px;
  font-family: 'Montserrat';
`;

export const CourseProgress = styled.div`
  width: 100%;
  box-sizing: content-box;
  height: 12px;
  position: relative;
  background: #F0F4F3;;
  border-radius: 20px;
  padding: 0px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`;

export const CourseProgressValue = styled.div`
  display: block;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(43, 194, 83);
  background-image: linear-gradient(90deg, #0ABB87 6.77%, #6FD466 93.23%);
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
`;

export const CourseDate = styled.div`
  font-family: 'Montserrat';
  font-size: 10px;
  color: #767676;
  font-weight: 400;
  margin-top: 6px;
`;

export const ContainerProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;