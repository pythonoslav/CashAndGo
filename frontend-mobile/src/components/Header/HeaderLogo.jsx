import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/header_logo.svg";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 300px; /* Размер логотипа */
    height: auto;

    /* Адаптация для мобильных */
    @media (max-width: 768px) {
      width: 110px;
    }
  }
`;

const HeaderLogo = () => {
  return (
    <LogoWrapper>
      <LogoSVG />
    </LogoWrapper>
  );
};

export default HeaderLogo;
