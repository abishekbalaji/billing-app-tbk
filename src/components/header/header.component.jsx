import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/Kitchen.svg";

const Header = () => (
  <div>
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo width="150" height="80"/>
      </LogoContainer>
      <OptionsContainer>
          <OptionLink to="/history">History</OptionLink>
          <OptionLink to="/edit">Edit</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  </div>
);

export default Header;
