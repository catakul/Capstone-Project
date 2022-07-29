import React from "react";
import "./PeriodicTable.css";
import data from "../PeriodicTableJSON.json";


  const colorMap = {
    "actinide": "#7377FA",
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    "polyatomic nonmetal": "#40FF4D",
    lanthanide: "#4AABAF",
    metalloid: "#73D2DE",
    
  };
  
  const PeriodicTable = () => {
    return (
      <div className="periodic-table">
        {data.elements.map((element, index) => (
          <div
            className="element"
            key={index}
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
              backgroundColor: colorMap[element.category],
            }}
          >
            <strong>{element.symbol}</strong>
            <text className="number">{element.number}</text>
            <text className="name">{element.name}</text>
          </div>
        ))}
      </div>
    );
  };

  
  
  export default PeriodicTable;