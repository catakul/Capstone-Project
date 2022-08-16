import data from '../PeriodicTableJSON.json';
import {useState} from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import FilterFunction from '../Components/Filter.js';

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

const PeriodicTable = () => {
  const [infos, setInfos] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [isFilter, setIsFilter] = useState(data.elements);

  function handleNavigate(elementNumber) {
    const elementToFind = data.elements.find(
      element => element.number === elementNumber
    );
    setIsOpen(true);
    setInfos(elementToFind);
  }
  function setNewFilter(elements) {
    setIsFilter(elements);
  }
  let FilterColor;

  return (
    <>
      <StyledPeriodicTable>
        <FilterFunction setNewFilter={setNewFilter} />
        {data.elements.map((element, index) => {
          {
            FilterColor = isFilter.find(
              filter => filter.number === element.number
            );
          }

          return (
            <StyledElement
              type="button"
              onClick={() => handleNavigate(element.number)}
              data-propertiesid={element.number}
              key={index}
              style={{
                gridRow: element.ypos,
                gridColumn: element.xpos,
                backgroundColor:
                  FilterColor === undefined
                    ? '#666'
                    : colorMap[element.category],
              }}
            >
              <StyledSymbol>{element.symbol}</StyledSymbol>
              <StyledNumber>{element.number}</StyledNumber>
              <StyledName>{element.name}</StyledName>
            </StyledElement>
          );
        })}
      </StyledPeriodicTable>
      <Modal
        onNavigate={handleNavigate}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={infos}
      />
    </>
  );
};

export default PeriodicTable;

const StyledPeriodicTable = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 54px);
  grid-template-rows: repeat(10, 54px);
  grid-gap: 2px;
  margin-top: 22%;

  @media all and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(18, 70px);
    grid-template-rows: repeat(10, 70px);
    grid-gap: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledElement = styled.button`
  border: 1px solid black;
  color: #f7f7f7;
  border-radius: 3px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    transform: scale(1.25, 1.25);
    z-index: 1;
  }
  /* @media all and (min-width: 600px) {
    border: 1px solid black;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`;

const StyledNumber = styled.span`
  font-size: 10px;
  position: absolute;
  top: 5px;
  left: 5px;
  color: black;
  @media all and (min-width: 600px) {
    font-size: 14px;
    position: absolute;
    top: 5px;
    left: 5px;
  }
`;

const StyledName = styled.span`
  font-size: 8px;
  position: absolute;
  bottom: 4px;
  color: black;
  @media all and (min-width: 600px) {
    font-size: 10.5px;
    position: absolute;
    bottom: 4px;
  }
`;
const StyledSymbol = styled.span`
  font-size: 22px;
  position: absolute;
  color: black;
  @media all and (min-width: 600px) {
    font-size: 27px;
    position: absolute;
  }
`;
