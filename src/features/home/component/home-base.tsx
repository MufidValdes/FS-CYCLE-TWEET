import { Box, Spinner, Text } from "@chakra-ui/react";
import ItemPost from "../../../component/ui/ItemPost";
import { StatusForm } from "./threads/status-form";
import { getAllThread } from "../../../api/threadAPI";
import { useQuery } from "@tanstack/react-query";
import { Thread } from "../types/thread-type";

export function HomeBase() {
  const { data, isLoading, error } = useQuery<Thread[]>({
    queryKey: ["threads"],
    queryFn: getAllThread,
    staleTime: 1000 * 60 * 5,
  });
  if (isLoading) return <Spinner />;

  if (error) return <Text>Error loading threads</Text>;

  return (
    <Box h="full" className=" text-white py-5 px-5 font-['Plus_Jakarta_Sans']">
      <Text fontSize="28px">Home</Text>
      <StatusForm />

      {data?.map((thread: Thread) => (
        <ItemPost
          key={thread.id}
          username={thread.User.name}
          handle={thread.User.username}
          avatarUrl={
            thread.User.avatarUrl ||
            "https://static.vecteezy.com/system/resources/previews/043/117/262/non_2x/man-silhouette-profile-picture-anime-style-free-vector.jpg"
          }
          postTime={new Date(thread.createdAt).toLocaleTimeString()}
          postContent={thread.content}
          likesCount={thread.likes.length}
          repliesCount={thread.replies.length}
        />
      ))}
    </Box>
  );
}
