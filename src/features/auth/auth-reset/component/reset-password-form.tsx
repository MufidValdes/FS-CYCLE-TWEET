import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export function ResetPasswordForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl isRequired>
      <Stack spacing={"12px"}>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="New Password*"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm New Password*"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
    </FormControl>
  );
}
