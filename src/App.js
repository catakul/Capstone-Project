import PeriodicTable from './Components/PeriodicTable.js';
import styled from 'styled-components';

export default function App() {
  return (
    <StyledBody>
      <StyledTitel>
        <h1>Periodic Table of Elements</h1>
      </StyledTitel>
      <main>
        <PeriodicTable />
      </main>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  overflow-y: none;
  overflow-x: scroll;
  scrollbar-width: none;
`;

const StyledTitel = styled.nav`
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
