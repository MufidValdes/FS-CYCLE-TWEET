import { Box, Text } from "@chakra-ui/react";
import ItemPost from "../../app/component/item-post";
import FormStatus from "../../app/component/form-status";

export function HomeBase() {
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
      <Text fontSize="28px">Home</Text>
      <FormStatus />
      <ItemPost />
    </Box>
  );
}
