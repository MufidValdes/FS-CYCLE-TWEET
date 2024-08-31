import {
  Button,
  Card,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export function SidebarRight() {
  return (
    <Stack
      bg={"black"}
      h="full"
      className="
     py-5 
     font-['Plus_Jakarta_Sans']
     "
    >
      <Card
        bgColor="#262626"
        textColor="tweet.putih"
        px="24px"
        py="8px"
        h="361px"
      >
        <Heading fontSize="20px" fontWeight="bold" py="8px">
          My Profile
        </Heading>
        <Stack gap="12px">
          <Image
            src="src/assets/icons/cover-profile.png"
            position="relative"
            borderRadius="12px"
            zIndex="4"
            h="100px"
            backgroundSize="cover"
          />
          <Flex justifyContent="end" alignSelf="stretch">
            <Button w="106px" variant="outline">
              <Text as={"span"} fontSize="14px" textColor="tweet.putih">
                Edit Profile
              </Text>
            </Button>
          </Flex>
          <Stack gap="4px">
            <Text as={"span"} fontSize="24px">
              ✨ Stella Audhina ✨
            </Text>
            <Text as={"span"} fontSize="14px" textColor="tweet.gray">
              @audhinafh
            </Text>
            <Text as={"span"} fontSize="16px">
              picked over by the worms, and weird fishes
            </Text>
            <HStack gap="12px">
              <Flex gap="4px">
                <Text as={"span"} fontSize="16px">
                  291
                </Text>
                <Text as={"span"} fontSize="16px" textColor="tweet.gray">
                  Following
                </Text>
              </Flex>
              <Flex gap="4px">
                <Text as={"span"} fontSize="16px">
                  23
                </Text>
                <Text as={"span"} fontSize="16px" textColor="tweet.gray">
                  Followers
                </Text>
              </Flex>
            </HStack>
          </Stack>
        </Stack>
      </Card>

      <Card
        bgColor="#262626"
        textColor="tweet.putih"
        px="24px"
        py="8px"
        h="352px"
      >
        <Heading fontSize="20px" fontWeight="bold" py="8px">
          Suggested for you
        </Heading>

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
          <Button w="106px" variant="outline">
            <Text as={"span"} fontSize="14px" textColor="tweet.putih">
              Edit Profile
            </Text>
          </Button>
        </HStack>
      </Card>

      <Card
        bgColor="#262626"
        textColor="tweet.putih"
        px="24px"
        py="8px"
        h="72px"
      >
        <Flex gap="8px" fontSize="14px">
          <Text as="span">Developed by</Text>
          <Text as="span">Your Name</Text>
          <Text as="span">•</Text>
        </Flex>
        <Flex gap="4px" textColor="tweet.gray" fontSize="14px">
          <Text as="span">Powered by</Text>
          <Image />
          <Text as="span">DumbWays Indonesia</Text>
          <Text as="span">•</Text>
          <Text as="span">#1 Coding Bootcamp</Text>
        </Flex>
      </Card>
    </Stack>
  );
}
