import ItemFollowing from "../../../component/ui/item-following";
import TabsLayout from "../../../component/ui/item-tab-layout";

const followers = [
  {
    username: "Lina Kusuma",
    handle: "linakus",
    avatarUrl: "https://bit.ly/ryan-florence",
    postTime: "2h",
    postContent:
      "Ada yang tahu rekomendasi framework terbaik untuk proyek e-commerce?",
    likesCount: 75,
    repliesCount: 29,
  },
];
const following = [
  {
    username: "Indah Pra Karya",
    handle: "indahpra",
    avatarUrl: "https://bit.ly/dan-abramov",
    postTime: "4h",
    postContent:
      "Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu.",
    likesCount: 36,
    repliesCount: 381,
  },
];
export default function FollowsTabs() {
  return (
    <TabsLayout
      title1={"Followers"}
      title2={"Following"}
      tabContent1={
        <>
          {followers.map((tab, index) => (
            <ItemFollowing
              key={index}
              name={tab.username}
              handle={tab.handle}
              avatar={tab.avatarUrl}
            />
          ))}
        </>
      }
      tabContent2={
        <>
          {following.map((tab, index) => (
            <ItemFollowing
              key={index}
              name={tab.username}
              handle={tab.handle}
              avatar={tab.avatarUrl}
            />
          ))}
        </>
      }
    />
  );
}
