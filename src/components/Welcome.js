import styled from "styled-components";

import logo from "../assets/the-simpson.png";

export const Welcome = ({reqApi}) => {
  return (
    <ContentLogo>
      <WelcomeText>
        Welcome, click the image to start the fun!
      </WelcomeText>
      <ImageLogo src={logo} alt="Logo Simpsons" onClick={reqApi}/>
    </ContentLogo>
  );
};

const ImageLogo = styled.img`
  width: 450px;
  height: auto;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  fonr-size: 1.5em;
`;
