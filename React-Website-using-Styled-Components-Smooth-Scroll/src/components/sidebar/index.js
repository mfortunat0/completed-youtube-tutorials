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

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={toggle} to="about">
            About
          </SideBarLink>
          <SideBarLink onClick={toggle} to="discover">
            Discover
          </SideBarLink>
          <SideBarLink onClick={toggle} to="services">
            Services
          </SideBarLink>
          <SideBarLink onClick={toggle} to="signup">
            Sign up
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="signin">Sign in</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
