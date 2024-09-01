import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";

export default function ItemPost() {
  return (
    <Flex gap={"16px"} py="16px" px="20px" border="1px" borderColor="#3F3F3F">
      <Image
        borderRadius="full"
        src="src/assets/icons/avatar.png"
        boxSize={"40px"}
        alt="Avatar"
      />
      <Stack gap={"8px"}>
        <Flex gap="4px" fontSize={"14px"}>
          <Text as="span" fontWeight={"bold"}>
            Indah Pra Karya
          </Text>
          <Text as="span" textColor={"tweet.gray"}>
            @indahpra
          </Text>
          <Text as="span" textColor={"tweet.gray"}>
            •
          </Text>
          <Text as="span" textColor={"tweet.gray"}>
            4h
          </Text>
        </Flex>
        <Text as="p" fontSize={"14px"} lineHeight={"20px"}>
          Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya
          kita ga survive sampe tanggal tertentu. Tapi entah gimana bisa aja
          gitu. Ada aja jalannya augmented reality real time puppet I made. You
          can try it now went below in the thread.
        </Text>
        <HStack gap={"8px"}>
          <Flex fontSize={"14px"} gap={"8px"} alignItems={"center"}>
            <Image
              src="src/assets/icons/heart-red-logo.png"
              boxSize={"24px"}
              alt="heart"
            />
            <Text as="span" textColor={"tweet.gray"}>
              36
            </Text>
          </Flex>
          <Flex fontSize={"14px"} gap={"8px"} alignItems={"center"}>
            <Image
              src="src/assets/icons/message-text-logo.png"
              boxSize={"24px"}
              alt="message"
            />
            <Text as="span" textColor={"tweet.gray"}>
              381 Replies
            </Text>
          </Flex>
        </HStack>
      </Stack>
    </Flex>
  );
}
