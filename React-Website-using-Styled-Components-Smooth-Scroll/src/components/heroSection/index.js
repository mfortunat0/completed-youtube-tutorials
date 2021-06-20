import React from "react";

function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoplay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
}

export default HeroSection;
