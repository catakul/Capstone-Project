import PeriodicTable from './Components/PeriodicTable.js';
import styled from 'styled-components';

export default function App() {
  return (
    <StyledBody>
      <StyledTitel>
        <h1>Periodic Table of Elements</h1>
      </StyledTitel>
      <PeriodicTablePosition>
        <PeriodicTable />
      </PeriodicTablePosition>
    </StyledBody>
  );
}

const PeriodicTablePosition = styled.main`
  position: relative;
`;

const StyledBody = styled.div`
  /* overflow-y: none;
  scrollbar-width: none; */
  overflow-x: scroll;
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
