import { Box, Heading, Image } from "@chakra-ui/react";
import ItemPost from "../../app/component/item-post";
import FormStatus from "../../app/component/form-status";

export default function DetailStatus() {
  return (
    <Box
      bg={"black"}
      className="h-[100%]
   text-white 
   py-5 
   px-5
   font-['Plus_Jakarta_Sans']
   "
    >
      {/* title */}
      <Box>
        <Image />
        <Heading fontSize="28px">Status</Heading>
      </Box>

      <Box>
        <ItemPost />
        {/* replies */}
        <FormStatus />
        <ItemPost />
      </Box>
    </Box>
  );
}
