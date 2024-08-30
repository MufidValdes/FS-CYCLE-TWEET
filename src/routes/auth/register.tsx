import { Button, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import { RegisterForm } from "../../features/auth/component/register-form";

export default function RegisterRoute() {
  return (
    <div>
      <Container>
        <Image src="/src/assets/logo.png" alt="logo" />
        <Text fontFamily={"sans-serif"} fontSize={"3xl"} as={"b"}>
          Create account Circle
        </Text>

        <RegisterForm />
        <Button>Create</Button>
        <Flex>
          <Text>Already have account?</Text>
          <Link color={"#04A51E"}>Login</Link>
        </Flex>
      </Container>
    </div>
  );
}
