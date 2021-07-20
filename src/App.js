import styled, { createGlobalStyle } from "styled-components";
import './fonts/fonts.css';

import phoneCoverSvg from './assets/svg/phoneCover.svg';
import phoneStatusBarSvg from './assets/svg/statusBar.svg';
import phoneHomeBarSvg from './assets/svg/homeBar.svg';
import greenLandSvg from './assets/svg/greenLand.svg';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins-SemiBold';
    color: white;
  }
  body {
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const PhoneCover = styled.div`
  background-image: url( ${ phoneCoverSvg } );
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  
`;
const PhoneStatusBar = styled.div`
  background-image: url( ${ phoneStatusBarSvg } );
  background-size: 100% 100%;
  background-position: center;
  height: 50px;
  width: 87%;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
`;
const PhoneHomeBar = styled.div`
  background-image: url( ${ phoneHomeBarSvg } );
  background-size: 100% 100%;
  background-position: center;
  height: 50px;
  width: 87%;
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
`;
const PhoneScreen = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url( ${ greenLandSvg } );
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
`;
const PName = styled.p`
  margin-top: -300px;
  font-size: 30px;
`;
const Small = styled.span`
  font-size: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="flex flex-col justify-center content-center min-h-screen">
        <PhoneCover className="w-widthphone h-heightphone">
          <PhoneStatusBar />
          <PhoneScreen className="w-widthscreen h-heightscreen font-bold flex flex-col justify-center">
            <PName className="w-full h-full text-center">Privated app<br /><Small>by redly</Small></PName>
          </PhoneScreen>
          <PhoneHomeBar />
        </PhoneCover>
      </div>
    </>
  );
}

export default App;
