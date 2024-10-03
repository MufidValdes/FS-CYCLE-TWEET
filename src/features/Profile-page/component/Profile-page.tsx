import { Alert, Box, Spinner } from "@chakra-ui/react";
import { RightBarMyProfile } from "../../../component/ui/right-bar-my-Profile";
import TabsLayout from "../../../component/ui/item-tab-layout";
import ItemPost from "../../../component/ui/item-post";
import { useQuery } from "@tanstack/react-query";
import { getThreadById } from "../../../api/api-thread";
import { useParams } from "react-router-dom";
import { ThreadEntity } from "../../../app/types/thread-dto";

// const profileTab = [
//   {
//     username: "Indah Pra Karya",
//     handle: "indahpra",
//     avatarUrl: "https://bit.ly/dan-abramov",
//     postTime: "4h",
//     postContent:
//       "Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu.",
//     postImage:
//       "https://cdna.artstation.com/p/assets/images/images/079/767/316/large/-monster02small.jpg?1725778540",
//     likesCount: 36,
//     repliesCount: 381,
//   },
//
// ];
export default function MyProfilePage() {
  // Using useParams to get the dynamic ID from the route
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useQuery<ThreadEntity>({
    queryKey: ["thread", id],
    queryFn: () => getThreadById(Number(id)),
  });
  if (isLoading) return <Spinner />;

  if (error) return <Alert status="error">Error loading threads</Alert>;

  return (
    <Box
      borderX="1px"
      borderColor="#3F3F3F"
      h="full"
      className=" text-white py-5 px-5 font-['Plus_Jakarta_Sans']"
    >
      <RightBarMyProfile />
      <TabsLayout
        title1={"All Post"}
        title2={"Media"}
        tabContent1={
          <>
            {data && (
              <>
                <ItemPost
                  key={data.id}
                  username={data.User.name}
                  handle={data.User.username}
                  avatarUrl={
                    data.User.avatarUrl ||
                    "https://static.vecteezy.com/system/resources/previews/043/117/262/non_2x/man-silhouette-profile-picture-anime-style-free-vector.jpg"
                  }
                  postTime={new Date(data.createdAt).toLocaleTimeString()}
                  postContent={data.content}
                  postImage={data.imageUrl}
                  likesCount={data.likes.length}
                  repliesCount={data.replies.length}
                />
              </>
            )}
          </>
        }
        tabContent2={undefined}
      />
    </Box>
  );
}
