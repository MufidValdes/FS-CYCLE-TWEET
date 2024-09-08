// RegisterForm.tsx
import { useState } from "react";
import { Button, FormControl, Input, Stack } from "@chakra-ui/react";
import { isEmailValid } from "../utils/validation";

export function RegisterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!isEmailValid(email)) {
      alert("Invalid email!");
    }
  };

  return (
    <FormControl isRequired>
      <Stack spacing="12px">
        <Input type="text" placeholder="FullName*" />
        <Input
          type="email"
          placeholder="Email/Username*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input type="password" placeholder="password*" />
        <Button
          onClick={handleSubmit}
          bgColor={"tweet.green"}
          textColor={"tweet.putih"}
        >
          Create
        </Button>
      </Stack>
    </FormControl>
  );
}
