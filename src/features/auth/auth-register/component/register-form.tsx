// RegisterForm.tsx
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import useRegisterForm from "../hooks/use-register-form";
import React from "react";

export function RegisterForm() {
  const { register, handleSubmit, onSubmit, errors } = useRegisterForm();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="12px">
        <Input
          type="text"
          placeholder="FullName*"
          {...register("name")}
          isInvalid={!!errors.name}
        />
        <Text color={"error.primary"}>{errors.name?.message}</Text>

        <Input
          type="email"
          placeholder="Email/Username*"
          {...register("email")}
          isInvalid={!!errors.email}
        />
        <Text color={"error.primary"}>{errors.email?.message}</Text>
        <InputGroup>
          <Input
            placeholder="Password"
            type={show ? "text" : "password"}
            {...register("password")}
            isInvalid={!!errors.password}
          />

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text color={"error.primary"}>{errors.password?.message}</Text>

        <Button bgColor={"tweet.green"} textColor={"tweet.putih"} type="submit">
          Create
        </Button>
      </Stack>
    </FormControl>
  );
}
