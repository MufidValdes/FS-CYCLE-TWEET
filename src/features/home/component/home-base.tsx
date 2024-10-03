import { Alert, Box, Spinner, Text } from "@chakra-ui/react";
import ItemPost from "../../../component/ui/item-post";
import { StatusForm } from "./threads/status-form";
import { ThreadEntity } from "../../../app/types/thread-dto";
import { useThreads } from "../../../app/hooks/use-threads";

export function HomeBase() {
  const { data: threads, isLoading, isError } = useThreads();
  if (isLoading) return <Spinner />;

  if (isError || !threads)
    return <Alert status="error">Error loading threads</Alert>;

  return (
    <Box h="full" className=" text-white py-5 px-5 font-['Plus_Jakarta_Sans']">
      <Text fontSize="28px">Home</Text>
      <StatusForm placeholder={"What is happening?!"} buttonTitle={"post"} />

      {threads?.map((thread: ThreadEntity) => (
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
