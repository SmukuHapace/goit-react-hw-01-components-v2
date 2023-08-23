import { Profile } from './Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics';
import stats from './Statistics/data.json';
import { FriendList } from './FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
