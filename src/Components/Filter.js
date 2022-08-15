// import styled from 'styled-components';
// import data from '../PeriodicTableJSON.json';

// const colorMap = {
//   actinide: '#7377FA',
//   'noble-gas': '#FFBC42',
//   'alkaline earth metal': '#EC674E',
//   'diatomic-nonmetal': '#D81159',
//   'alkali-metal': '#8F2D56',
//   'transition-metal': '#58586B',
//   'post-transition-metal': '#218380',
//   'polyatomic-nonmetal': '#40FF4D',
//   lanthanide: '#4AABAF',
//   metalloid: '#73D2DE',
// };

// function handleFilterFunction(elementNumber) {
//     const elementToFind = data.elements.find(
//       element => element.number === elementNumber
//     );}

// const FilterFunction = () => {
//   return (
//     {data.elements.map((element, index) => (
//         <StyledGrid1>
//           onClick={() => handleNavigate(element.number)}
//           data-propertiesid={element.number}
//           key={index}
//         </StyledGrid1>
//   );
// };

// const StyledGrid1 = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: repeat(3, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   position: fixed;
//   font-size: 20px;
//   color: red;
//   top: 20%;
//   left: 20%;
// `;

// export default FilterFunction;
