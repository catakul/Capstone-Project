import './PeriodicTable.css';
import data from '../PeriodicTableJSON.json';
import {useState} from 'react';
import Modal from './Modal';

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

const PeriodicTable = () => {
  const [infos, setInfos] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleNavigate(elementNumber) {
    const elementToFind = data.elements.find(
      element => element.number === elementNumber
    );
    setIsOpen(true);
    setInfos(elementToFind);
  }

  return (
    <>
      <div className="periodic-table">
        {data.elements.map((element, index) => (
          <button
            type="button"
            onClick={() => handleNavigate(element.number)}
            data-propertiesid={element.number}
            className="element"
            key={index}
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
              backgroundColor: colorMap[element.category],
            }}
          >
            <span className="symbol">{element.symbol}</span>
            <span className="number">{element.number}</span>
            <span className="name">{element.name}</span>
          </button>
        ))}
      </div>
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
