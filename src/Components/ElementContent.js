import styled from 'styled-components';

const ElementContent = ({title, text}) => {
  return (
    <STYLED_INFORMATIONS>
      <StyledTag>{title}</StyledTag>
      <StyledContent>{text}</StyledContent>
    </STYLED_INFORMATIONS>
  );
};

export default ElementContent;

const StyledTag = styled.p`
  opacity: 0.4;
  text-align: left;
  text-decoration: underline;
  padding-bottom: 5px;
  margin: 0;
`;

const StyledContent = styled.p`
  text-align: left;
  margin: 0;
  a:link {
    color: #ccc;
  }
  a:visited {
    color: #fff;
  }
  a:hover {
    color: #0ff;
  }
  a:active {
    color: #fff;
  }
`;

const STYLED_INFORMATIONS = styled.div`
  background: #1c1f26;
  padding: 14px 15px;
  border-bottom: 1px solid hsla(0, 0%, 44.7%, 0.35);
  display: flex;
  flex-flow: column wrap;
`;
