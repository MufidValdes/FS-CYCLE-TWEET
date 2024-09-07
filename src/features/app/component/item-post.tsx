import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";

interface ItemPostProps {
  username: string;
  handle: string;
  avatarUrl: string;
  postTime: string;
  postContent: string;
  likesCount: number;
  repliesCount: number;
}
export default function ItemPost({
  username,
  handle,
  avatarUrl,
  postTime,
  postContent,
  likesCount,
  repliesCount,
}: ItemPostProps) {
  return (
    <Flex
      gap="16px"
      py="16px"
      px="20px"
      borderBottom="1px"
      borderColor="#3F3F3F"
    >
      <Image borderRadius="full" src={avatarUrl} boxSize="40px" alt="Avatar" />
      <Stack gap="8px">
        <Flex gap="4px" fontSize="14px">
          <Text as="span" fontWeight="bold">
            {username}
          </Text>
          <Text as="span" color="tweet.gray">
            @{handle}
          </Text>
          <Text as="span" color="tweet.gray">
            •
          </Text>
          <Text as="span" color="tweet.gray">
            {postTime}
          </Text>
        </Flex>
        <Text as="p" fontSize="14px" lineHeight="20px">
          {postContent}
        </Text>
        <HStack gap="8px">
          <Flex fontSize="14px" gap="8px" alignItems="center">
            <Image
              src="src/assets/icons/heart-red-logo.png"
              boxSize="24px"
              alt="heart"
            />
            <Text as="span" color="tweet.gray">
              {likesCount}
            </Text>
          </Flex>
          <Flex fontSize="14px" gap="8px" alignItems="center">
            <Image
              src="src/assets/icons/message-text-logo.png"
              boxSize="24px"
              alt="message"
            />
            <Text as="span" color="tweet.gray">
              {repliesCount} Replies
            </Text>
          </Flex>
        </HStack>
      </Stack>
    </Flex>
  );
}
