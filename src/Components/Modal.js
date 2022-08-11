import styled from 'styled-components';
import {Icon} from '@iconify/react';

export default function Modal({isOpen, onClose, content}) {
  console.log(content);
  return (
    isOpen && (
      <>
        <STYLED_OUTER_MODAL>
          <STYLED_INNER_MODAL>
            <STYLED_CLOSE_BUTTON type="button" onClick={onClose}>
              <Icon
                icon="ant-design:close-square-outlined"
                width="45"
                height="45"
              />
            </STYLED_CLOSE_BUTTON>
            <STYLED_WIKIPEDIA_ICON href={content.source}>
              <Icon icon="fa6-brands:wikipedia-w" width="40" height="40" />
            </STYLED_WIKIPEDIA_ICON>

            {/* images */}
            <STYLED_IMAGE src={content.spectral_img}></STYLED_IMAGE>

            <STYLED_ELEMENT>
              <span>{content.symbol}</span>
            </STYLED_ELEMENT>
            <STYLED_ELEMENT_NAME>
              <span>{content.name}</span>
            </STYLED_ELEMENT_NAME>
            <STYLED_ATOMIC_MASS>
              <span>{content.atomic_mass}</span>
            </STYLED_ATOMIC_MASS>

            <STYLED_SPAN>
              <STYLED_ICON>
                <Icon icon="logos:react" width="35" height="35" />
                <span>Overview</span>
              </STYLED_ICON>
            </STYLED_SPAN>

            <STYLED_INFORMATIONS>NAME: {content.name}</STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              ATOMIC MASS: {content.atomic_mass}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              NAMED BY: {content.named_by}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              CATEGORY: {content.category}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              DISCOVERED BY: {content.discovered_by}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              APPEARANCE: {content.appearance}
            </STYLED_INFORMATIONS>

            <STYLED_SPAN>
              <STYLED_ICON>
                <Icon
                  icon="fontisto:laboratory"
                  color="red"
                  width="32"
                  height="32"
                />
                <span>Properties</span>
              </STYLED_ICON>
            </STYLED_SPAN>

            <STYLED_INFORMATIONS>
              BOILING POINT: {content.boil}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              MELTING POINT: {content.melt}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              DENSITY: {content.density}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>SOURCE: {content.source}</STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>{content.molar_heat}</STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              ATOMIC NUMBER: {content.number}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>PERIOD: {content.period}</STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              PHASE AT STP: {content.phase}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              SUMMARY: {content.summary}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>{content.shells}</STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              ELECTRONIC CONFIGURATION: {content.electron_configuration}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              {content.electron_configuration_semantic}
            </STYLED_INFORMATIONS>

            <STYLED_SPAN>
              <STYLED_ICON>
                <Icon
                  icon="jam:triangle-danger"
                  color="red"
                  width="35"
                  height="35"
                />
                <span>Reactivity</span>
              </STYLED_ICON>
            </STYLED_SPAN>

            <STYLED_INFORMATIONS>
              ELECTRON AFFINITY: {content.electron_affinity}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              ELECTRONEGATIVITY: {content.electronegativity_pauling}
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              IONIZATION ENERGIES: {content.ionization_energies}
            </STYLED_INFORMATIONS>
          </STYLED_INNER_MODAL>
        </STYLED_OUTER_MODAL>
      </>
    )
  );
}

const STYLED_OUTER_MODAL = styled.div`
  overflow: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.55);
  overflow-y: scroll;
  overflow-x: scroll;
`;

const STYLED_INNER_MODAL = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  left: 50%;
  top: 50%;
  bottom: 1px;
  transform: translate(-50%, -50%);
  width: 25vw;
  height: 92vh;
  /* min-width: 350px; */
  background-color: rgba(24, 24, 24, 0.95);
  color: white;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: scroll;
  scrollbar-width: thin;
  position: absolute;
  z-index: 999;
  min-height: 100%;
  @media all and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;

const STYLED_INFORMATIONS = styled.div`
  background: #1c1f26;
  padding: 14px 15px;
  border-bottom: 1px solid hsla(0, 0%, 44.7%, 0.35);
`;

const STYLED_SPAN = styled.span`
  background-color: blanchedalmond;
  padding: 14px 15px;
`;

const STYLED_ICON = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
  color: black;
`;

const STYLED_WIKIPEDIA_ICON = styled.a`
  display: flex;
  justify-content: flex-start;
  color: white;
  text-decoration: none;
  padding-top: 7px;
  padding-left: 7px;
  position: sticky; //funktioniert nicht....

  //muss mittig gemacht werden
`;

const STYLED_CLOSE_BUTTON = styled.button`
  position: absolute;
  right: -4px;
  top: 3px;
  /* display: flex;
  justify-content: flex-end; */
  z-index: 1000;
  border: 0;
  background: transparent;
  color: white;
  @media all and (max-width: 667px) {
    top: 0;
  }
`;

const STYLED_IMAGE = styled.img`
  width: 56.9vh;
  height: 30vh;
  position: relative;
`;

const STYLED_ELEMENT = styled.text`
  font-size: 3.5rem;
  display: flex;
  justify-content: flex-start;
`;

const STYLED_ELEMENT_NAME = styled.text`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const STYLED_ATOMIC_MASS = styled.text`
  font-size: 1.2rem;
  font-weight: lighter;
  display: flex;
  justify-content: center;
`;
