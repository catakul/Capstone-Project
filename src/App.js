import PeriodicTable from './Components/PeriodicTable.js';
import styled from 'styled-components';
import {Icon} from '@iconify/react';

export default function App() {
  return (
    <StyledBody>
      <StyledNavbar>
        {/* <StyledSearch>
          <Icon
            icon="ant-design:search-outlined"
            color="red  "
            width="23"
            height="23"
          />
        </StyledSearch> */}
        <h1>Periodic Table of Elements</h1>
      </StyledNavbar>
      <main>
        <PeriodicTable />
      </main>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
`;

const StyledNavbar = styled.nav`
  overflow: hidden;
  width: 100vw;
  top: -20px;
  left: -20px;
  margin: 20px;
  position: fixed;
  background-color: #333;
  color: whitesmoke;
  display: flex;
  justify-content: center;
`;

// const StyledSearch = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
// `;

/* <Wrapper>
  <App />
</Wrapper>


const Wrapper = styled.main`
  max-width: 600px;
  margin: 0 auto;
`; */
