import styled from 'styled-components';
import {Icon} from '@iconify/react';
import Navigation from '../Components/Navigation.js';

export default function Modal({isOpen, onClose, content, handleClick}) {
  return (
    isOpen && (
      <>
        <Styled_Outer_Modal>
          <Styled_Inner_Modal>
            <Styled_Close_Button type="button" onClick={onClose}>
              <Icon
                icon="ant-design:close-square-outlined"
                width="45"
                height="45"
              />
            </Styled_Close_Button>
            <Styled_Wikipedia_Icon href={content.source}>
              <Icon icon="fa6-brands:wikipedia-w" width="40" height="40" />
            </Styled_Wikipedia_Icon>
            {/* images */}
            <Styled_Image src={content.spectral_img}></Styled_Image>
            <Styled_Element>
              <span>{content.symbol}</span>
            </Styled_Element>
            <Styled_Element_Name>
              <span>{content.name}</span>
            </Styled_Element_Name>
            <Styled_Atomic_Mass>
              <span>{content.atomic_mass}</span>
            </Styled_Atomic_Mass>

            <Navigation
              handleClick={handleClick}
              currentContentIndex={content.number}
            />

            <Styled_Span>
              <Styled_Icon>
                <Icon icon="logos:react" width="35" height="35" />
                <span>Overview</span>
              </Styled_Icon>
            </Styled_Span>
            <Styled_Informations>NAME: {content.name}</Styled_Informations>
            <Styled_Informations>
              ATOMIC MASS: {content.atomic_mass}
            </Styled_Informations>
            <Styled_Informations>
              NAMED BY: {content.named_by}
            </Styled_Informations>
            <Styled_Informations>
              CATEGORY: {content.category}
            </Styled_Informations>
            <Styled_Informations>
              DISCOVERED BY: {content.discovered_by}
            </Styled_Informations>
            <Styled_Informations>
              APPEARANCE: {content.appearance}
            </Styled_Informations>
            <Styled_Span>
              <Styled_Icon>
                <Icon
                  icon="fontisto:laboratory"
                  color="red"
                  width="32"
                  height="32"
                />
                <span>Properties</span>
              </Styled_Icon>
            </Styled_Span>
            <Styled_Informations>
              BOILING POINT: {content.boil}
            </Styled_Informations>
            <Styled_Informations>
              MELTING POINT: {content.melt}
            </Styled_Informations>
            <Styled_Informations>
              DENSITY: {content.density}
            </Styled_Informations>
            <Styled_Informations>SOURCE: {content.source}</Styled_Informations>
            <Styled_Informations>{content.molar_heat}</Styled_Informations>
            <Styled_Informations>
              ATOMIC NUMBER: {content.number}
            </Styled_Informations>
            <Styled_Informations>PERIOD: {content.period}</Styled_Informations>
            <Styled_Informations>
              PHASE AT STP: {content.phase}
            </Styled_Informations>
            <Styled_Informations>
              SUMMARY: {content.summary}
            </Styled_Informations>
            <Styled_Informations>{content.shells}</Styled_Informations>
            <Styled_Informations>
              ELECTRONIC CONFIGURATION: {content.electron_configuration}
            </Styled_Informations>
            <Styled_Informations>
              {content.electron_configuration_semantic}
            </Styled_Informations>
            <Styled_Span>
              <Styled_Icon>
                <Icon
                  icon="jam:triangle-danger"
                  color="red"
                  width="35"
                  height="35"
                />
                <span>Reactivity</span>
              </Styled_Icon>
            </Styled_Span>
            <Styled_Informations>
              ELECTRON AFFINITY: {content.electron_affinity}
            </Styled_Informations>
            <Styled_Informations>
              ELECTRONEGATIVITY: {content.electronegativity_pauling}
            </Styled_Informations>
            <Styled_Informations>
              IONIZATION ENERGIES: {content.ionization_energies}
            </Styled_Informations>
          </Styled_Inner_Modal>
        </Styled_Outer_Modal>
      </>
    )
  );
}

const Styled_Outer_Modal = styled.div`
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

const Styled_Inner_Modal = styled.div`
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

const Styled_Informations = styled.div`
  background: #1c1f26;
  padding: 14px 15px;
  border-bottom: 1px solid hsla(0, 0%, 44.7%, 0.35);
`;

const Styled_Span = styled.span`
  background-color: blanchedalmond;
  padding: 14px 15px;
`;

const Styled_Icon = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
  color: black;
`;

const Styled_Wikipedia_Icon = styled.a`
  display: flex;
  justify-content: flex-start;
  color: white;
  text-decoration: none;
  padding-top: 7px;
  padding-left: 7px;
  position: sticky; //funktioniert nicht....

  //muss mittig gemacht werden
`;

const Styled_Close_Button = styled.button`
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

const Styled_Image = styled.img`
  width: 56.9vh;
  height: 30vh;
  position: relative;
`;

const Styled_Line = styled.hr`
  width: 100%;
  border: 1px solid white;
`;

const Styled_Element = styled.text`
  font-size: 3.5rem;
  display: flex;
  justify-content: flex-start;
`;

const Styled_Element_Name = styled.text`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const Styled_Atomic_Mass = styled.text`
  font-size: 1.2rem;
  font-weight: lighter;
  display: flex;
  justify-content: center;
`;
