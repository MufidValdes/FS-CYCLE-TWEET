import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

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
      <Flex gap={"20px"}>
        <Image
          borderRadius="full"
          src="src/assets/icons/avatar.png"
          boxSize={"40px"}
          alt="Avatar"
        />
        <Stack gap={"4px"}>
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
            gitu. Ada aja jalannya augmented reality real time puppet I made.
            You can try it now went below in the thread.
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
    </Box>
  );
}
