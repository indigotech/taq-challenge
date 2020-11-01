import styled from 'styled-components';
import media from "styled-media-query";

export const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
`

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
`

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
`

export const CardWrapper = styled.div`
  background-color: #44475a;
  border-radius: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

export const ImgWrapper = styled.img`
  border-radius: 0.5rem;
  width: 100%
`

export const InformationWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  padding: 0.5rem;
`

export const TitleCard = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
`

export const StatusCard = styled.p`
  font-size: 1.6rem;
  padding: 0.5rem;
`
