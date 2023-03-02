import { Layout } from 'components/Layout/Layout';

import { ListOfCards } from 'components/ListOfCards/ListOfCards';
import users from 'data/users.json';

export const App = () => {
  return (
    <Layout>
      <ListOfCards users={users} />
    </Layout>
  );
};
