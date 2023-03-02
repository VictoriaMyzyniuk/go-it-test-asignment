import { Card } from 'components/Card/Card';
import { ListEl } from 'components/ListOfCards/ListOfCards.styled';

export const ListOfCards = ({ users }) => {
  return (
    <ListEl>
      {users.map(user => (
        <Card userInfo={user} key={user.id} />
      ))}
    </ListEl>
  );
};
