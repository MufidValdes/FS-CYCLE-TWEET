import { Box } from "@chakra-ui/react";
import { RightBarMyProfile } from "../../app/component/item-myProfile";
import ItemPost from "../../app/component/item-post";

export default function MyProfilePage() {
  return (
    <Box
      borderX="1px"
      borderColor="#3F3F3F"
      h="full"
      className=" text-white py-5 px-5 font-['Plus_Jakarta_Sans']"
    >
      <RightBarMyProfile />
      <ItemPost
        username={""}
        handle={""}
        avatarUrl={""}
        postTime={""}
        postContent={""}
        likesCount={0}
        repliesCount={0}
      />
    </Box>
  );
}
