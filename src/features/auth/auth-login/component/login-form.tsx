import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useLoginForm from "../hooks/use-login-form";

export function LoginForm() {
  const { register, handleSubmit, onSubmit, errors } = useLoginForm();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={"12px"}>
        <Input
          placeholder="Email"
          type="email"
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
        <Link href="/forget-password" textAlign={"end"}>
          Forget password?
        </Link>
        <Button type="submit" bgColor={"tweet.green"} textColor={"tweet.putih"}>
          Login
        </Button>
      </Stack>
    </FormControl>
  );
}
