import styled from 'styled-components';

export const DetailsContainer = styled.div`
  width: 100%;
`;

export const HeadContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  img {
    border-radius: 50%;
  }
`;

export const HeadContent = styled.div`
  width: 100%;
  margin-left: 2em;

`;

export const Status = styled.p`
  padding: .2em .8em .2em .8em;
  width: fit-content;
  border-radius: 15px;
  color: white;
  background-color: ${props => props.primary ? "rgb(0, 230, 0, .7)" : (props.secondary ? "rgb(255, 71, 26, .7)" : "rgb(77, 195, 255, .7)")};
`;

export const EpContainer = styled.div`
  width: 100%;
  border-top: 1px solid #cbcbcb;
`;
