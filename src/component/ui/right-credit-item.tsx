import { Card, Flex, Text } from "@chakra-ui/react";

const creditData = {
  developerName: "Your Name",
  companyName: "DumbWays Indonesia",
  tagline: "#1 Coding Bootcamp",
};
// Credit Component
export function RightCreditItem() {
  const { developerName, companyName, tagline } = creditData;

  return (
    <Card
      bgColor="tweet.profiles"
      textColor="tweet.putih"
      fontSize="14px"
      px="5px"
      py="8px"
      w="full"
    >
      <Flex gap="8px">
        <Text as="span">Developed by</Text>
        <Text as="span">{developerName}</Text>
        <Text as="span">•</Text>
      </Flex>
      <Flex gap="4px" textColor="tweet.gray">
        <Text as="span">Powered by</Text>
        <Text as="span">{companyName}</Text>
        <Text as="span">•</Text>
        <Text as="span">{tagline}</Text>
      </Flex>
    </Card>
  );
}
