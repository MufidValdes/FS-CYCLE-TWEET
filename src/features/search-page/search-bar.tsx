import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { RiUserSearchLine } from "react-icons/ri";

export default function SearchBar() {
  return (
    <Flex
      rounded={"full"}
      margin={4}
      padding={"4px 18px"}
      alignItems={"center"}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={RiUserSearchLine} w="24px" h="24px" color="tweet.gray" />
        </InputLeftElement>
        <Input
          variant="outline"
          borderColor="tweet.green"
          placeholder="Search your friend"
        />
      </InputGroup>
    </Flex>
  );
}
