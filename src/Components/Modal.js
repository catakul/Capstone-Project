import styled from 'styled-components';
import {Icon} from '@iconify/react';
import Navigation from '../Components/Navigation.js';
import ElementContent from './ElementContent.js';

export default function Modal({isOpen, onClose, content, onNavigate}) {
  return (
    isOpen && (
      <>
        <StyledOuterModal>
          <StyledInnerModal>
            <StyledCloseButton type="button" onClick={onClose}>
              <Icon icon="ei:close" color="white" width="45" height="45" />
            </StyledCloseButton>
            <StyledWikipediaIcon href={content.source}>
              <Icon icon="fa6-brands:wikipedia-w" width="40" height="40" />
            </StyledWikipediaIcon>

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
            />

            <StyledSection>
              <StyledIcons>
                <Icon icon="logos:react" width="36" height="36" />
              </StyledIcons>
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
              <StyledIcons>
                <Icon
                  icon="fontisto:laboratory"
                  color="blue"
                  width="33"
                  height="33"
                />
              </StyledIcons>
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
              <StyledIcons>
                <Icon
                  icon="fa6-solid:explosion"
                  color="red"
                  width="33"
                  height="33"
                />
              </StyledIcons>
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
          </StyledInnerModal>
        </StyledOuterModal>
      </>
    )
  );
}

const StyledOpacity = styled.div`
  background: rgba(0, 0, 0, 0.55);
  position: fixed;
  height: 17%;
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
  z-index: 1;
`;

const StyledElement = styled.div`
  font-size: 3.8rem;
  padding: 140px 130px 20px 4px;
  z-index: 1;
  padding-left: 15px;
`;

const StyledElementName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 3.5px;
  padding-left: 35px;
`;

const StyledAtomicMass = styled.div`
  font-size: 1rem;
  font-weight: lighter;
  padding-left: 35px;
`;

const StyledOuterModal = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-top: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 6;
  animation: animatetop 1.2s;
  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

const StyledInnerModal = styled.div`
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
  overflow-x: none;
  scrollbar-width: thin;
  min-height: 100%;

  @media all and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;

const StyledSection = styled.section`
  background-color: beige;
  padding: 8px 9px;
  font-size: 1.2rem;
  color: #2f2f2f;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const StyledIcons = styled.div`
  margin-right: 20px;
  margin-top: 5px;
`;

const StyledWikipediaIcon = styled.a`
  display: flex;
  justify-content: flex-start;
  color: white;
  text-decoration: none;
  padding-top: 7px;
  padding-left: 7px;
`;

const StyledCloseButton = styled.button`
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
