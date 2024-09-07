import { Box, Text } from "@chakra-ui/react";

export default function PageSearch() {
  return (
    <Box m={"auto"} textAlign={"center"} w={"348px"} padding={4}>
      <Text fontSize={"20px"} fontWeight={700} lineHeight={"28px"}>
        Write and search something
      </Text>
      <Text
        fontSize={"14px"}
        fontWeight={400}
        lineHeight={"20px"}
        color={"tweet.gray"}
      >
        Try searching for something else or check the spelling of what you
        typed.
      </Text>
    </Box>
  );
}
