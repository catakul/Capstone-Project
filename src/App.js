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
  top: -21px;
  left: -20px;
  margin: 20px;
  height: 7vh;
  position: fixed;
  background-color: #313740;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 15px 22px rgb(0 0 0 / 35%);
  h1 {
    font-size: 25px;
    font-weight: 300;
  }
`;
