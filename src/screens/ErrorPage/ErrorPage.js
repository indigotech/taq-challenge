import React from 'react';
import {WarningTag, Container, Warning} from "./styles"

export default function ErrorPage() {
  return (
    <Container>
      <WarningTag>Oooops,</WarningTag>
      <Warning>Página não encontrada =/</Warning>
    </Container>
  );
}