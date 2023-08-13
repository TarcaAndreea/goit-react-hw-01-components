import React from 'react';
import Profile from './Profile/profile';
import user from '../data/user.json';
import Statistics from './Statistics/statistics';
import data from '../data/data.json';
import Friendlist from './FriendList/Friendlist';
import friends from '../data/friends.json';
import TransactionHistory from './TransationHistory/transaction';
import transactions from '../data/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
