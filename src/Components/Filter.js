import styled from 'styled-components';
import data from '../PeriodicTableJSON.json';

const colorMap = {
  actinide: '#7377FA',
  'noble-gas': '#FFC600',
  'alkaline earth metal': '#E45143',
  'diatomic-nonmetal': '#D81159',
  'alkali-metal': '#8F2D56',
  'transition-metal': '#7F4800',
  'post-transition-metal': '#6A456B',
  'polyatomic-nonmetal': '#40FF4D',
  lanthanide: '#008F7A',
  metalloid: '#1E445E',
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
      <StyledButtons onClick={() => handleCloseFilter()}>
        Reset Filter
      </StyledButtons>
      {colorArray.map(color => {
        console.log(color);
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
  /* grid-template-rows: 21% 21% 21% 21%; */
  position: absolute;
  left: 35.5%;
  /* margin: 0 auto;
  top: 130%;
  display: flex;
  flex-flow: row;
  font-size: 13px;
  left: 55%;
  height: 7.5vh;
  overflow-x: scroll; */
`;

const StyledButtons = styled.button`
  background: ${props => props.backgroundColor};
  border: 1px black solid;
  border-radius: 5px;
  font-size: 14px;
  padding: 2px 3px;
  margin: 5px;
  width: 80px;
  height: 55px;
`;

export default FilterFunction;
