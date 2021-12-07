import styled, { } from 'styled-components';

export const Container = styled.div`
  background: white;
  width: 400px;
  border-radius: 15px;
  cursor: pointer;
  margin: 1em;
  border: none;
  padding: 1em;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  box-shadow: 0px -1px 9px -1px rgba(105,105,105,0.74);
  -webkit-box-shadow: 0px -1px 9px -1px rgba(105,105,105,0.74);
  -moz-box-shadow: 0px -1px 9px -1px rgba(105,105,105,0.74);
  &:hover{
    box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
    -webkit-box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
    -moz-box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
  }
`;

export const Image = styled.img`
  grid-area: 1 / 1 / 2 / 2;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  /* padding: 1em */
`;

export const Content = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  color: black;
  text-align: center;
`;
