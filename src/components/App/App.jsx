import Profile from "../Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";

export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
    </>
  );
}
