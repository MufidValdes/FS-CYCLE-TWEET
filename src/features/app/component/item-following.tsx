import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface ItemUserProps {
  name: string;
  handle: string;
  avatar: string;
}
// Komponen ItemFollowing dengan props
export default function ItemFollowing({ name, handle, avatar }: ItemUserProps) {
  return (
    <HStack py="8px" justifyContent="space-between">
      <Flex gap="16px" alignItems="center">
        <Image borderRadius="full" src={avatar} boxSize={"40px"} alt={name} />
        <VStack alignItems="start" fontSize="14px">
          <Text as="span">{name}</Text>
          <Text as="span" textColor="tweet.gray">
            {handle}
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
