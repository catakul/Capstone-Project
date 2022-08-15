import styled from 'styled-components';
import {Icon} from '@iconify/react';
import data from '../PeriodicTableJSON.json';

const Navigation = ({
  currentContentIndex,
  currentContentNumber,
  onNavigate,
}) => {
  const dataLeft = data.elements.find(
    data => data.number === currentContentIndex - 1
  );
  const dataRight = data.elements.find(
    data => data.number === currentContentIndex + 1
  );
  console.log(currentContentIndex);
  const numberSwitch = currentContentIndex - 1;

  console.log(dataLeft);
  const textLeft = dataLeft === undefined ? '' : dataLeft.name;
  const textRight = dataRight === undefined ? '' : dataRight.name;

  const idLeft = dataLeft === undefined ? 1 : dataLeft.number;
  const idRight = dataRight === undefined ? 119 : dataRight.number;

  // const idSwitch = numberSwitch === 0 ? '' : numberSwitch.number;

  return (
    <StyledDV>
      <StyledButtons type="button" onClick={() => onNavigate(idLeft)}>
        <Icon icon="ant-design:arrow-left-outlined" width="14" />
        {numberSwitch} · {textLeft}
      </StyledButtons>
      <StyledButtons type="button" onClick={() => onNavigate(idRight)}>
        {textRight} · {currentContentIndex}
        <Icon icon="ant-design:arrow-right-outlined" width="14" />
      </StyledButtons>
    </StyledDV>
  );
};

const StyledButtons = styled.button`
  font-size: 14px;
  color: whitesmoke;
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
