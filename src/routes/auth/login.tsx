import {
  Button,
  Container,
  Flex,
  Image,
  Link,
  Text,
  Stack,
} from "@chakra-ui/react";
import { LoginForm } from "../../features/auth/component/login-form";

export default function LoginRoute() {
  return (
    <>
      <Container
        maxW="container.base"
        mt={"8rem"}
        textColor={"tweet.putih"}
        className="flex flex-col gap-2"
      >
        <Stack gap="16px">
          <Image src="/src/assets/logo.png" alt="logo" w={"108px"} />
          <Text fontSize="3xl">Login To Circle</Text>
          <LoginForm />
          <Text textAlign={"end"}>Forgetpassword?</Text>
          <Button bgColor="tweet.green" width="full" color="tweet.putih">
            Login
          </Button>
          <Flex gap={"4px"}>
            <Text>Don't have an account yet?</Text>
            <Link color="tweet.green">Create account</Link>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
