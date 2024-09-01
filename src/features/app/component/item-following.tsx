import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function ItemFollowing() {
  return (
    <HStack py="8px" justifyContent="space-between">
      <Flex gap="16px" alignItems="center">
        <Image
          borderRadius="full"
          src="src/assets/icons/avatar.png"
          boxSize={"40px"}
          alt="Avatar"
        />
        <VStack alignItems="start" fontSize="14px">
          <Text as="span">Mohammed Jawahir</Text>
          <Text as="span" textColor="tweet.gray">
            @em.jawahir
          </Text>
        </VStack>
      </Flex>
      <Button
        w="78px"
        h="33px"
        rounded="full"
        variant="outline"
        fontSize="14px"
        textColor="tweet.putih"
      >
        Follow
      </Button>
    </HStack>
  );
}
