import { Box, Flex, Button, Image, Text } from "@chakra-ui/react";

export default function FormStatus() {
  return (
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
  );
}
