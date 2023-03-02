import styled from '@emotion/styled';
import picture from 'img/picture.png';

export const CardEl = styled.div`
  width: 380px;
  height: 460px;
  margin-right: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  margin: 15px;
`;

export const CardBgStyle = styled.div`
  background-repeat: no-repeat;

  background-image: url(${picture});
  background-position: top 28px right 36px;
  width: 100%;
  height: 100%;
`;

export const LogoImg = styled.img`
  padding-top: 20px;
  padding-left: 20px;
`;

export const ButtonEl = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: block;

  width: 196px;
  height: 50px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #373737;
  background-color: ${props => {
    return props.isClicked ? '#5CD3A8' : '#EBD8FF';
  }};

  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
