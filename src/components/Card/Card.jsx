import {
  CardEl,
  LogoImg,
  ButtonEl,
  CardBgStyle,
} from 'components/Card/Card.styled';
import logo from 'img/logo.png';

import { CardInfo } from 'components/CardInfo/Cardinfo';

import { useEffect, useState } from 'react';

export const Card = ({ userInfo }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    localStorage.setItem(userInfo.id, JSON.stringify(!isClicked));
  };

  useEffect(() => {
    const currentClicked = JSON.parse(localStorage.getItem(userInfo.id));
    setIsClicked(currentClicked);
  }, [userInfo.id]);

  return (
    <CardEl>
      <CardBgStyle>
        <LogoImg src={logo} alt="logo" />
        <CardInfo userInfo={userInfo} isClicked={isClicked} />
        <ButtonEl onClick={handleClick} isClicked={isClicked}>
          {isClicked ? 'Following' : 'Follow'}
        </ButtonEl>
      </CardBgStyle>
    </CardEl>
  );
};
