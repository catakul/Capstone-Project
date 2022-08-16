import styled from 'styled-components';
import {Icon} from '@iconify/react';
import data from '../PeriodicTableJSON.json';

const Navigation = ({currentContentIndex, onNavigate}) => {
  const dataLeft = data.elements.find(
    data => data.number === currentContentIndex - 1
  );
  const dataRight = data.elements.find(
    data => data.number === currentContentIndex + 1
  );

  const textLeft = dataLeft === undefined ? 'Unuennium' : dataLeft.name;
  const textRight = dataRight === undefined ? 'Hydrogen' : dataRight.name;

  const idLeft = dataLeft === undefined ? 119 : dataLeft.number;
  const idRight = dataRight === undefined ? 1 : dataRight.number;

  return (
    <StyledNavigation>
      <StyledNavigationButtons type="button" onClick={() => onNavigate(idLeft)}>
        <Icon icon="ant-design:arrow-left-outlined" width="14" />
        {idLeft} · {textLeft}
      </StyledNavigationButtons>
      <StyledNavigationButtons
        type="button"
        onClick={() => onNavigate(idRight)}
      >
        {textRight} · {idRight}
        <Icon icon="ant-design:arrow-right-outlined" width="14" />
      </StyledNavigationButtons>
    </StyledNavigation>
  );
};

const StyledNavigationButtons = styled.button`
  font-size: 15px;
  color: whitesmoke;
  background: #1c1f26;
  padding: 12px;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 667px) {
    font-size: 17px;
    padding: 13px;
  }
`;

const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export default Navigation;
