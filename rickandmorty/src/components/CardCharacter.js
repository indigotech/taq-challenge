import React from "react";

import * as S from "./style";

export const CardCharacter = ({ id, name, status, image }) => {
  return (
    <S.StyledLink to={`./${id}`}>
      <S.CardWrapper>
        <S.ImgWrapper src={image} alt={name} />
        <S.InformationWrapper>
          <S.TitleCard>{name}</S.TitleCard>
          <S.StatusCard>{status}</S.StatusCard>
        </S.InformationWrapper>
      </S.CardWrapper>
    </S.StyledLink>
  );
};
