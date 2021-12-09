import styled, { css} from 'styled-components';
interface ContainerProps {
  status: string;
}

export const Container = styled.div<ContainerProps>`
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
  transform: translateZ(0);
  transition: transform .25s ease-out;

  @media screen and (max-width: 768px) {
        &{
            width: 90%;

            background-repeat: repeat-y;
        }
    }

  span {
      /* color: greenyellow; */
      ${(props) =>
        props.status === "Alive" &&
        css`
        color: green;
        `}

        ${(props) =>
          props.status === "unknown" &&
          css`
          color: #6f17b5;
        `}

        ${(props) =>
          props.status === "Dead" &&
          css`
          color: red;
        `}
    }



  &:hover{
    box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
    -webkit-box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
    -moz-box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);         
    transform: scale(1.05);
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
