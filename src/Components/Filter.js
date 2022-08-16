import styled from 'styled-components';
import data from '../PeriodicTableJSON.json';

const colorMap = {
  actinide: '#7377FA',
  'noble-gas': '#FFBC42',
  'alkaline earth metal': '#EC674E',
  'diatomic-nonmetal': '#D81159',
  'alkali-metal': '#8F2D56',
  'transition-metal': '#58586B',
  'post-transition-metal': '#218380',
  'polyatomic-nonmetal': '#40FF4D',
  lanthanide: '#4AABAF',
  metalloid: '#73D2DE',
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
    console.log('TOP:D');
    setNewFilter(data.elements);
  }
  return (
    <StyledFilter>
      <button onClick={() => handleCloseFilter()}>CloseFilter</button>
      {colorArray.map(color => {
        return (
          <button
            key={color.name}
            onClick={() => handleFilterFunction(color.name)}
          >
            {color.name}
          </button>
        );
      })}
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: fixed;
  font-size: 14px;
  color: red;
  top: 7%;
  left: 20%;
`;

export default FilterFunction;
