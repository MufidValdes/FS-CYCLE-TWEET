import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import ItemPost from "../../app/component/item-post";

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
      <Box
        display={"flex"}
        gap="20px"
        w={"full"}
        py={"20px"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"} gap={"20px"}>
          <Image
            borderRadius="full"
            boxSize="40px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Text as="span" textColor={"tweet.gray"}>
            What is happening?!
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={"20px"}>
          <Image src="src/assets/icons/gallery-add-logo.png" />
          <Button bgColor={"tweet.post"} textColor={"tweet.putih"}>
            <Text as="span">Post</Text>
          </Button>
        </Flex>
      </Box>
      <ItemPost />
    </Box>
  );
}
