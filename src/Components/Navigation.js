import styled from 'styled-components';
import {Icon} from '@iconify/react';
import data from '../PeriodicTableJSON.json';

const Navigation = ({currentContentIndex, handleClick}) => {
  const dataLeft = data.elements.find(
    data => data.number === currentContentIndex - 1
  );
  const dataRight = data.elements.find(
    data => data.number === currentContentIndex + 1
  );
  console.log(dataLeft);
  const textLeft = dataLeft === undefined ? '' : dataLeft.name;
  const textRight = dataRight === undefined ? '' : dataRight.name;

  const idLeft = dataLeft === undefined ? 1 : dataLeft.number;
  const idRight = dataRight === undefined ? 119 : dataRight.number;

  return (
    <StyledDV>
      <Styled_BUTTONS type="button" onClick={() => handleClick(idLeft)}>
        <Icon icon="ant-design:arrow-left-outlined" />
        {textLeft}
      </Styled_BUTTONS>
      <Styled_BUTTONS type="button" onClick={() => handleClick(idRight)}>
        {textRight}
        <Icon icon="ant-design:arrow-right-outlined" />
      </Styled_BUTTONS>
    </StyledDV>
  );
};

const Styled_BUTTONS = styled.button`
  font-size: 10px;
  color: red;
  background: #1c1f26;
  padding: 10px 10px;
  display: flex;
  justify-content: center;

  width: 100%;
`;

const StyledDV = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export default Navigation;
