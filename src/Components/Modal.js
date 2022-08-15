import styled from 'styled-components';
import {Icon} from '@iconify/react';
import Navigation from '../Components/Navigation.js';
import ElementContent from './ElementContent.js';

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

            <StyledBackground urllink={content.spectral_img}>
              <StyledElement>{content.symbol}</StyledElement>
              <StyledElementCluster>
                <StyledElementName>{content.name}</StyledElementName>
                <StyledAtomicMass>{content.atomic_mass}</StyledAtomicMass>
              </StyledElementCluster>
              <StyledOpacity />
            </StyledBackground>

            <Navigation
              onNavigate={onNavigate}
              currentContentIndex={content.number}
              currentContentNumber={content.number}
            />

            <StyledSection>
              <STYLED_ICONS>
                <Icon icon="logos:react" width="35" height="35" />
              </STYLED_ICONS>
              Overview
            </StyledSection>
            <ElementContent title="NAME:" text={content.name} />
            <ElementContent title="SUMMARY:" text={content.summary} />
            <ElementContent title="ATOMIC NUMBER:" text={content.number} />
            <ElementContent title="NAMED BY:" text={content.named_by} />
            <ElementContent title="CATEGORY:" text={content.category} />
            <ElementContent
              title="DISCOVERED BY:"
              text={content.discovered_by}
            />
            <ElementContent title="APPEARANCE:" text={content.appearance} />
            <ElementContent
              title="SOURCE:"
              text={<a href={content.source}>{content.source}</a>}
            />

            <StyledSection>
              <STYLED_ICONS>
                <Icon
                  icon="fontisto:laboratory"
                  color="blue"
                  width="32"
                  height="32"
                />
              </STYLED_ICONS>
              Properties
            </StyledSection>
            <ElementContent title="ATOMIC MASS:" text={content.atomic_mass} />
            <ElementContent title="DENSITY:" text={content.density} />
            <ElementContent
              title="BOILING POINT:"
              text={`${content.boil} Kelvin`}
            />
            <ElementContent
              title="MELTING POINT:"
              text={`${content.melt} Kelvin`}
            />
            <ElementContent
              title="MOLAR HEAT CAPACITY:"
              text={`${content.molar_heat} J/(mol·K)`}
            />
            <ElementContent title="PHASE AT STP:" text={content.phase} />
            <ElementContent title="GROUP:" text={content.group} />
            <ElementContent title="PERIOD:" text={content.period} />
            <ElementContent
              title="ELECTRONS (PER SHELL):"
              text={content.shells}
            />
            <ElementContent
              title="ELECTRON CONFIGURATION:"
              text={content.electron_configuration}
            />
            <StyledSection>
              <STYLED_ICONS>
                <Icon
                  icon="fa6-solid:explosion"
                  color="red"
                  width="35"
                  height="35"
                />
              </STYLED_ICONS>
              Reactivity
            </StyledSection>
            <ElementContent
              title="ELECTRON AFFINITY:"
              text={`${content.electron_affinity} kJ/mol`}
            />

            <ElementContent
              title="ELECTRONEGATIVITY:"
              text={content.electronegativity_pauling}
            />
          </STYLED_INNER_MODAL>
        </STYLED_OUTER_MODAL>
      </>
    )
  );
}

const StyledOpacity = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 22%;
  width: 100%;
  @media (max-width: 667px) {
    height: 35%;
  }
`;

const StyledBackground = styled.div`
  background-image: url(${props => props.urllink});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: 20% auto;
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

const StyledElementCluster = styled.div`
  padding: 156px 220px 0 15px;
  z-index: 11000000000;
`;

const StyledElement = styled.div`
  font-size: 3.8rem;
  padding: 140px 130px 20px 4px;
  z-index: 1;
`;

const StyledElementName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 3.5px;
`;

const StyledAtomicMass = styled.div`
  font-size: 1rem;
  font-weight: lighter;
`;

const STYLED_OUTER_MODAL = styled.div`
  overflow: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.55);
  overflow-y: scroll;
  overflow-x: none;
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
  background-color: rgba(24, 24, 24, 0.95);
  color: white;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: scroll;
  scrollbar-width: thin;
  min-height: 100%;
  @media all and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;

const StyledSection = styled.section`
  background-color: beige;
  padding: 14px 15px;
  font-size: 1.2rem;
  color: black;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const STYLED_ICONS = styled.div`
  margin-right: 20px;
  margin-top: 5px;
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
  border: 0;
  background: transparent;
  color: white;
  @media all and (max-width: 667px) {
    top: 0;
  }
`;
