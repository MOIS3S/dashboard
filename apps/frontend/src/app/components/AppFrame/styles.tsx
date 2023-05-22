import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = styled.header`
  width: 100%;
  height: 97px;
  background-color: #262D34;
`;

export const Aside = styled.aside`
  width: 223px;
  padding-top: 30px;
`;

export const Section = styled.section`
  width: 100%;
`;

export const ContainerLogoHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 223px;
  height: 100%;
  img {
    width: 155px;
  }
`;

export const UlAside = styled.ul`
  list-style-type: none;
  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
  }
`;