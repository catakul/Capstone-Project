import styled from 'styled-components';
import data from '../PeriodicTableJSON.json';

const colorMap = {
  actinide: '#455DB8',
  'noble-gas': '#FFB400',
  'alkaline earth metal': '#E45143',
  'diatomic-nonmetal': '#D81159',
  'alkali-metal': '#8F2D56',
  'transition-metal': '#7F4800',
  'post-transition-metal': '#6A456B',
  'polyatomic-nonmetal': '#40B44D',
  lanthanide: '#008F7A',
  metalloid: '#255473',
};

function FilterFunction({setNewFilter}) {
  const colorArray = [];

  for (const key in colorMap) {
    colorArray.push({name: key, color: colorMap[key]});
  }
  function handleFilterFunction(elementCategory) {
    const elementToFind = data.elements.filter(
      element => element.category === elementCategory
    );
    setNewFilter(elementToFind);
  }

  function handleCloseFilter() {
    setNewFilter(data.elements);
  }
  return (
    <StyledFilter>
      <ResetButton onClick={() => handleCloseFilter()}>
        Reset Filter
      </ResetButton>
      {colorArray.map(color => {
        return (
          <StyledButtons
            backgroundColor={color.color}
            key={color.name}
            onClick={() => handleFilterFunction(color.name)}
          >
            {color.name}
          </StyledButtons>
        );
      })}
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  position: absolute;
  left: 35.5%;
  margin-bottom: 50px;
`;

const ResetButton = styled.button`
  border: 1px black solid;
  border-radius: 8px;
  font-size: 14px;
  padding: 2px 3px;
  margin: 5px;
  width: 80px;
  height: 55px;
  background: #777;
  color: whitesmoke;
`;

const StyledButtons = styled.button`
  background: ${props => props.backgroundColor};
  border: 1px black solid;
  border-radius: 8px;
  font-size: 14px;
  padding: 2px 3px;
  margin: 5px;
  width: 80px;
  height: 55px;
  color: whitesmoke;
`;

export default FilterFunction;
