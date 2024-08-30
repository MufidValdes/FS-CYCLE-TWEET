import { Button, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import { LoginForm } from "../../features/auth/component/login-form";

export default function LoginRoute() {
  return (
    <div>
      <Container>
        <Image src="/src/assets/logo.png" alt="logo" />
        <Text fontFamily={"sans-serif"} fontSize={"3xl"} as={"b"}>
          Login To Circle
        </Text>
        <LoginForm />
        <Text textAlign={"end"}>Forgetpassword?</Text>
        <Button>Login</Button>
        <Flex>
          <Text>Don't have an account yet?</Text>
          <Link>Create account</Link>
        </Flex>
      </Container>
    </div>
  );
}
