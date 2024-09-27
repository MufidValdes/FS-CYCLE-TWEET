import { FormControl, Input } from "@chakra-ui/react";

export function ForgetPasswordForm() {
  return (
    <FormControl isRequired>
      <Input type="email" placeholder="Email*" />
    </FormControl>
  );
}
