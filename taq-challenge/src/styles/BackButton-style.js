import styled from 'styled-components';

export const BackContainer = styled.button`
  color: rgba(151,206,76);
  background-color: transparent;
  border: 1px solid rgba(151,206,76);
  border-radius: 30px;
  padding: .5em 1em .5em .5em;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  display: grid;
  grid-template-columns: .8fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  margin-bottom: 1em;

  &:hover {
    color: green;
    border: 1px solid green;
  }

  svg{
    grid-area: 1 / 1 / 2 / 2;
    font-size: .9em;
  }

  #text{
    grid-area: 1 / 2 / 2 / 3;
  }
`;