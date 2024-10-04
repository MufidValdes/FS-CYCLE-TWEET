import { Alert, Box, Spinner } from "@chakra-ui/react";
import { RightBarMyProfile } from "../../../component/ui/right-bar-my-Profile";
import TabsLayout from "../../../component/ui/item-tab-layout";
import ItemPost from "../../../component/ui/item-post";
import { useParams } from "react-router-dom";
import { useThreadById } from "../../../app/hooks/use-threads";

export default function MyProfilePage() {
  // Using useParams to get the dynamic ID from the route
  const { id } = useParams();
  const { data, isLoading, error } = useThreadById(Number(id));
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
