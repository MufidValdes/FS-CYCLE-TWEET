import { Spinner } from "@chakra-ui/react";
import { useFollowers, useFollowing } from "../../../app/hooks/use-followers";
import ItemFollowing from "../../../component/ui/item-following";
import TabsLayout from "../../../component/ui/item-tab-layout";
import { useParams } from "react-router-dom";
import { FollowEntity } from "../../../app/types/follow-dto";

// const followers = [
//   {
//     username: "Lina Kusuma",
//     handle: "linakus",
//     avatarUrl: "https://bit.ly/ryan-florence",
//     postTime: "2h",
//     postContent:
//       "Ada yang tahu rekomendasi framework terbaik untuk proyek e-commerce?",
//     likesCount: 75,
//     repliesCount: 29,
//   },
// ];
// const following = [
//   {
//     username: "Indah Pra Karya",
//     handle: "indahpra",
//     avatarUrl: "https://bit.ly/dan-abramov",
//     postTime: "4h",
//     postContent:
//       "Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu.",
//     likesCount: 36,
//     repliesCount: 381,
//   },
// ];
export default function FollowsTabs() {
  const { id } = useParams();
  const userId = Number(id);
  // Fetch followers data
  const { data: followers, isLoading: isLoadingFollowers } =
    useFollowers(userId);
  // Fetch following data
  const { data: following, isLoading: isLoadingFollowing } =
    useFollowing(userId);

  return (
    <TabsLayout
      title1={"Followers"}
      title2={"Following"}
      tabContent1={
        <>
          {isLoadingFollowers ? (
            <Spinner /> // Loading state
          ) : (
            followers?.map((follower: FollowEntity) => (
              <ItemFollowing
                key={follower.followerId}
                name={follower.following.name}
                handle={follower.following.username}
                avatar={follower.following.avatarUrl}
              />
            ))
          )}
        </>
      }
      tabContent2={
        <>
          {isLoadingFollowing ? (
            <Spinner /> // Loading state
          ) : (
            following?.map((following: FollowEntity) => (
              <ItemFollowing
                key={following.followingId}
                name={following.following.name}
                handle={following.following.username}
                avatar={following.following.avatarUrl}
              />
            ))
          )}
        </>
      }
    />
  );
}
