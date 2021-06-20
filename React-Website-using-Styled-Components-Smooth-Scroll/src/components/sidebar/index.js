import React from "react";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SideBarLink,
  SideBarRoute,
  SideBarWrapper,
  SideBtnWrap,
  SideBarMenu,
} from "./sideBarElements";

function SideBar() {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="discover">Discover</SideBarLink>
          <SideBarLink to="services">Services</SideBarLink>
          <SideBarLink to="signup">Sign up</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="signin">Sign in</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
