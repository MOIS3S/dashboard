import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users';

const Wrapper = styled.div`

`;

export function App() {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={<Users/>}
        />
      </Routes>
      {/* END: routes */}
    </Wrapper>
  );
}

export default App;
