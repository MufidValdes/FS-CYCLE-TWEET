// src/components/SearchBar.tsx
import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { RiUserSearchLine } from "react-icons/ri";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onSearch(inputValue);
  };

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
          value={value}
          onChange={handleInputChange}
        />
      </InputGroup>
    </Flex>
  );
}
