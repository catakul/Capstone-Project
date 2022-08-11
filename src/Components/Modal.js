import styled from 'styled-components';
// import img from "./modal.jpg"
// import { mdiWikipedia } from '@mdi/js';
import {Icon} from '@iconify/react';

export default function Modal({open, onClose, content}) {
  console.log(content);
  return (
    open && (
      <>
        <Styled_Close_Button type="button" onClick={onClose}>
          <Icon
            icon="ant-design:close-square-outlined"
            width="45"
            height="45"
          />
        </Styled_Close_Button>
        <StyledModalOuter>
          <StyledModalInner>
            <Styled_Wikipedia_Icon>
              <Icon
                icon="fa6-brands:wikipedia-w"
                width="40"
                height="40"
                src={content.source}
              />
            </Styled_Wikipedia_Icon>
            {/* images */}
            <StyledImage src={content.spectral_img}></StyledImage>

            <SteyledElement>
              <span>{content.symbol}</span>
            </SteyledElement>
            <SteyledElementName>
              <span>{content.name}</span>
            </SteyledElementName>
            <StyledAtomicMass>
              <span>{content.atomic_mass}</span>
            </StyledAtomicMass>

            <Styled_Span>
              <Styled_Icon>
                <Icon icon="logos:react" width="25" height="25" />
                <span>Overview</span>
              </Styled_Icon>
            </Styled_Span>

            <span>NAME: {content.name}</span>
            <span>ATOMIC MASS: {content.atomic_mass}</span>
            <span>NAMED BY: {content.named_by}</span>
            <span>CATEGORY: {content.category}</span>
            <span>DISCOVERED BY: {content.discovered_by}</span>
            <span>APPEARANCE: {content.appearance}</span>

            <Styled_Span>
              <Styled_Icon>
                <Icon
                  icon="fontisto:laboratory"
                  color="red"
                  width="25"
                  height="25"
                />
                <span>Properties</span>
              </Styled_Icon>
            </Styled_Span>

            <StyledLine>
              <span>BOILING POINT: {content.boil}</span>
            </StyledLine>

            {/* //Line not working */}

            <span>MELTING POINT: {content.melt}</span>
            <span>DENSITY: {content.density}</span>
            <span>SOURCE: {content.source}</span>
            {/* <span className="name">{content.molar_heat}</span> */}
            <span>ATOMIC NUMBER: {content.number}</span>
            <span>PERIOD: {content.period}</span>
            <span>PHASE AT STP: {content.phase}</span>
            <span>SUMMARY: {content.summary}</span>
            <span>{content.shells}</span>
            <span>
              ELECTRONIC CONFIGURATION: {content.electron_configuration}
            </span>
            {/* <span className="name">{content.electron_configuration_semantic}</span> */}

            <Styled_Span>
              <Styled_Icon>
                <Icon
                  icon="jam:triangle-danger"
                  color="red"
                  width="25"
                  height="25"
                />
                <span>Reactivity</span>
              </Styled_Icon>
            </Styled_Span>

            <span>ELECTRON AFFINITY: {content.electron_affinity}</span>
            <span>ELECTRONEGATIVITY: {content.electronegativity_pauling}</span>
            <span>IONIZATION ENERGIES: {content.ionization_energies}</span>
          </StyledModalInner>
        </StyledModalOuter>
      </>
    )
  );
}

const StyledModalOuter = styled.div`
  overflow: none;
`;

const StyledModalInner = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  left: 50%;
  top: 50%;
  bottom: 1px;
  transform: translate(-50%, -50%);
  width: 30vw;
  /* min-width: 350px; */
  height: 53vw;
  background-color: rgba(24, 24, 24, 0.95);
  color: white;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: scroll;
  scrollbar-width: thin;
  position: absolute;
  z-index: 999;
  max-height: 1500px;
`;

const Styled_Span = styled.span`
  background-color: blanchedalmond;
`;

const Styled_Icon = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
  color: black;
`;

const Styled_Wikipedia_Icon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;

  //muss mittig gemacht werden
`;

const Styled_Close_Button = styled.button`
  right: 65.4vh;
  top: 0.15vh;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  border: 0;
  background: transparent;
  color: white;
  position: fixed;
`;

const StyledImage = styled.img`
  width: 56.9vh;
  height: 30vh;
  position: relative;
`;

const StyledLine = styled.div`
  border: red;
  height: 45px;
`;

const SteyledElement = styled.text`
  font-size: 3.5rem;
  display: flex;
  justify-content: flex-start;
`;

const SteyledElementName = styled.text`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const StyledAtomicMass = styled.text`
  font-size: 1.2rem;
  font-weight: lighter;
  display: flex;
  justify-content: center;
`;
