import { Box, Flex, Text } from "@chakra-ui/react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import ItemPost from "../../../component/ui/item-post";
import RepliesItemForm from "./replies-item-form";

export default function PostPage() {
  return (
    <Box>
      <Flex mt={4} padding={4} gap={3} alignItems={"center"}>
        <HiOutlineArrowLeft size={26} />
        <Text fontSize={"28px"} fontWeight={700} lineHeight={"28px"}>
          Status
        </Text>
      </Flex>
      <ItemPost
        // key={}
        username={""}
        handle={"threads.User.username"}
        avatarUrl={
          "https://static.vecteezy.com/system/resources/previews/043/117/262/non_2x/man-silhouette-profile-picture-anime-style-free-vector.jpg"
        }
        postTime={""}
        postContent={"threads.content"}
        likesCount={0}
        repliesCount={0}
      />
      <RepliesItemForm
        threadId={0}
        placeholder="Type your reply!"
        buttonTitle="Reply"
      />
      {/* {threads.replies.map((reply) => { */}
      {/* return ( */}
      <ItemPost
        key={0}
        username={"reply.User.name"}
        handle={"reply.User.username"}
        avatarUrl={
          "https://static.vecteezy.com/system/resources/previews/043/117/262/non_2x/man-silhouette-profile-picture-anime-style-free-vector.jpg"
        }
        postTime={""}
        postContent={"reply.content"}
        likesCount={0}
        repliesCount={0}
      />
      {/* ); */}
      {/* })} */}
    </Box>
  );
}
