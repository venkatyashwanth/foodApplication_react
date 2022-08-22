import React from "react";
import styled from "styled-components";

const logo =
  "https://static.wixstatic.com/media/97cb1f_5b1e24008ea2401ba9f801efc49adf21~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/favoreatsicon.png";

const appStore = "https://static.wixstatic.com/media/c22c23_bedd64be41554a1c99031dc969e5f8db~mv2.png/v1/fill/w_131,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AppStore-BTN_02.png";
const playStore = "https://static.wixstatic.com/media/c22c23_c42aa7dcdc3d4e378a967019f512a6ca~mv2.png/v1/fill/w_134,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PlayStore-BTN_02.png";


function Footer() {
  return (
    <MainContainer>
      <FooterContainer>
        <img src={logo} alt="logo" />
        <h4>Try Spoonacular For Free</h4>
        <p>
          Download Spoonacular today and see for yourself how easy meal planning
          can be.
        </p>
        <ImageContainer>
            <img src={appStore} alt="appstore" />
            <img src={playStore} alt="playstore" />
        </ImageContainer>
      </FooterContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
background-color: #d1cdcd;
padding: 20px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;

  h4{
    font-size: 18px;
    margin: 0px;
  }
  img {
    width: 60px;
    height: 60px;
  }
  p{
    font-size: 16px;
    text-align: center;
    font-weight: light;
    width: 420px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  img{
    width: 120px;
    height: auto;
    cursor: pointer;
  }
`

export default Footer;
