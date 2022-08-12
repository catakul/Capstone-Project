import styled from 'styled-components';
import {Icon} from '@iconify/react';
import Navigation from '../Components/Navigation.js';

export default function Modal({isOpen, onClose, content, onNavigate}) {
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
            <STYLED_IMAGE src={content.spectral_img}></STYLED_IMAGE>
            <STYLED_ELEMENT>
              <span>{content.symbol}</span>
            </STYLED_ELEMENT>
            <STYLED_ELEMENT_NAME>
              {/* <StyledTypography variant="heading"> */}
              {/* vllt mache ich das so */}
              <span>{content.name}</span>
              {/* </StyledTypography> */}
            </STYLED_ELEMENT_NAME>
            <STYLED_ATOMIC_MASS>
              <span>{content.atomic_mass}</span>
            </STYLED_ATOMIC_MASS>

            <Navigation
              onNavigate={onNavigate}
              currentContentIndex={content.number}
            />

            <STYLED_SPAN>
              <STYLED_ICONS>
                <Icon icon="logos:react" width="35" height="35" />
                Overview
              </STYLED_ICONS>
            </STYLED_SPAN>
            {/* <InfoContainer title="NAME" text={`${content.name}KMOL`}/> */}
            {/* Aulagern um den Code übersichtlicher zu machen */}
            <STYLED_INFORMATIONS>
              <StyledTag>NAME:</StyledTag>
              <StyledContent> {content.name}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>SUMMARY:</StyledTag>
              <StyledContent>{content.summary}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>ATOMIC NUMBER:</StyledTag>
              <StyledContent>{content.number}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>NAMED BY:</StyledTag>
              <StyledContent>{content.named_by}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>CATEGORY:</StyledTag>
              <StyledContent>{content.category}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>DISCOVERED BY:</StyledTag>
              <StyledContent>{content.discovered_by}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>APPEARANCE:</StyledTag>
              <StyledContent>{content.appearance}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag> SOURCE:</StyledTag>
              <StyledContent href={content.source}>
                {/* link einfügen */}
                {content.source}
              </StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_SPAN>
              <STYLED_ICONS>
                <Icon
                  icon="fontisto:laboratory"
                  color="blue"
                  width="32"
                  height="32"
                />
                Properties
              </STYLED_ICONS>
            </STYLED_SPAN>
            <STYLED_INFORMATIONS>
              <StyledTag>ATOMIC MASS:</StyledTag>
              <StyledContent>{content.atomic_mass}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>DENSITY:</StyledTag>
              <StyledContent>{content.density}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>BOILING POINT:</StyledTag>
              <StyledContent>{content.boil} Kelvin</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>MELTING POINT:</StyledTag>
              <StyledContent>{content.melt} Kelvin</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>MOLAR HEAT CAPACITY:</StyledTag>
              <StyledContent>{content.molar_heat} J/(mol·K)</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>PHASE AT STP:</StyledTag>
              <StyledContent>{content.phase}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag> GROUP:</StyledTag>
              <StyledContent>{content.group}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag> PERIOD:</StyledTag>
              <StyledContent>{content.period}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>ELTRONS PER SHELL:</StyledTag>
              <StyledContent>{content.shells}</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>ELECTRON CONFIGURATION:</StyledTag>
              <StyledContent>{content.electron_configuration}</StyledContent>
            </STYLED_INFORMATIONS>
            {/* <STYLED_INFORMATIONS> 
              {content.electron_configuration_semantic}
            </STYLED_INFORMATIONS> */}
            <STYLED_SPAN>
              <STYLED_ICONS>
                <Icon
                  icon="fa6-solid:explosion"
                  color="red"
                  width="35"
                  height="35"
                />
                Reactivity
              </STYLED_ICONS>
            </STYLED_SPAN>
            <STYLED_INFORMATIONS>
              <StyledTag>ELECTRON AFFINITY:</StyledTag>
              <StyledContent>{content.electron_affinity} kJ/mol</StyledContent>
            </STYLED_INFORMATIONS>
            <STYLED_INFORMATIONS>
              <StyledTag>ELECTRONEGATIVITY:</StyledTag>
              <StyledContent>{content.electronegativity_pauling}</StyledContent>
            </STYLED_INFORMATIONS>
            {/* <STYLED_INFORMATIONS>
              <StyledTag>IONIZATION ENERGIES:</StyledTag>
              <StyledContent>
                {content.ionization_energies} kJ/mol
                // needs a fix !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              </StyledContent>
            </STYLED_INFORMATIONS> */}
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
const StyledTag = styled.div`
  opacity: 0.4;
  text-align: left;
  text-decoration: underline;
  padding-bottom: 5px;
`;

const StyledContent = styled.div`
  text-align: left;
`;

const STYLED_INFORMATIONS = styled.div`
  background: #1c1f26;
  padding: 14px 15px;
  border-bottom: 1px solid hsla(0, 0%, 44.7%, 0.35);
  display: flex;
  flex-flow: column wrap;
`;

const STYLED_SPAN = styled.span`
  background-color: blanchedalmond;
  padding: 14px 15px;
  font-size: 1.2rem;
`;

const STYLED_ICONS = styled.div`
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

const STYLED_ELEMENT = styled.p`
  font-size: 3.5rem;
  display: flex;
  justify-content: flex-start;
`;

const STYLED_ELEMENT_NAME = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const STYLED_ATOMIC_MASS = styled.p`
  font-size: 1.2rem;
  font-weight: lighter;
  display: flex;
  justify-content: center;
`;

// const StyledTypography = styled.p`
//   font-size: ${({variant}) => {
//     return variant === 'heading' ? '1.6rem' : '1rem';
//   }};
// `;
