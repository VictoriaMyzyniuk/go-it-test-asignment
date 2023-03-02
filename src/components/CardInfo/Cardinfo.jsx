import {
  AvatarWrapper,
  UserInformation,
  TweetsAndFollowersInfo,
  AvatarImg,
} from 'components/CardInfo/CardInfo.styled';

export const CardInfo = ({ userInfo, isClicked }) => {
  const { user, tweets, followers, avatar } = userInfo;

  const groupNumbers = num => {
    return num.toLocaleString('en', { useGrouping: true });
  };
  return (
    <>
      <AvatarWrapper>
        <AvatarImg src={avatar} alt={user} />
      </AvatarWrapper>
      <UserInformation>
        <TweetsAndFollowersInfo>
          {groupNumbers(tweets)} tweets
        </TweetsAndFollowersInfo>
        <TweetsAndFollowersInfo>
          {groupNumbers(isClicked ? followers + 1 : followers)} followers
        </TweetsAndFollowersInfo>
      </UserInformation>
    </>
  );
};
