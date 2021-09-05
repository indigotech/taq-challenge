import React from "react";

import styled from 'styled-components';
import Logo from '../../images/logo-rick-morty.png'

const TopContainer = styled.div`
  width: 100%;
  text-align: center;
`;

function Navbar(){


  return(
    <TopContainer>
      <img alt="logo" src={Logo} />
    </TopContainer>
  );
}

export default Navbar;