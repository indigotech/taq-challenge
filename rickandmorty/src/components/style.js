import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import { Home } from "@styled-icons/fa-solid/Home";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 8rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
    font-size: 6rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`;

export const ListWrapper = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 25rem);

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 25rem);
  `}

  ${media.lessThan("small")`
    grid-template-columns: 25rem;
  `}
`;

export const CardWrapper = styled.div`
  background-color: #44475a;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  margin: 1rem;
  flex-direction: column;
  height: 32.5rem;
  transition: all 0.8s;

  &:hover{
    transform: scale(1.1);
    color: #ffb86c;
  };
`;

export const ImgWrapper = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  max-width: 30rem;
`;

export const InformationWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  padding: 0.5rem;
`;

export const TitleCard = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const StatusCard = styled.p`
  font-size: 1.6rem;
  padding: 0.5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f8f8f2;
`;

export const EpisodeInformation = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
`;

export const HomePage = styled(Home)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  height: 4rem;
`;