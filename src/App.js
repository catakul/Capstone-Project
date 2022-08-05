import PeriodicTable from './Components/PeriodicTable.js';
import styled from 'styled-components';

export default function App() {
  return (
    <StyledBody>
      <header>
        <h1>Periodic Table of Elements</h1>
      </header>
      <main>
        <PeriodicTable />
      </main>

      {/* <nav>
          <p>navigation test</p>
          <p>navigation test</p>
          <p>navigation test</p>
        </nav> */}
    </StyledBody>
  );
}

const StyledBody = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
  scrollbar-width: none;
`;

const MyHeader = styled.header`
  h1 {
    color: red;
  }
`;

// const MyFooter = styled.footer`
//   nav {
//     color: red;
//   }
// `;
