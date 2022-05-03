import { Profile } from './social-profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import { TransactionHistory } from './transaction-history';
import data from "./statistics/data.json";
import user from "./social-profile/user.json";
import friends from "./friend-list/friends.json";
import transactions from "./transaction-history/transactions.json";
import './App.css';


export const App = () => {
  return (
    <div className="App">
      <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  
  );
};
