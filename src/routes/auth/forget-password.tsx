import { Button, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import { ForgetPasswordForm } from "../../features/auth/component/forget-password-form";

export default function ForgetPasswordRoute() {
  return (
    <div>
      <Container>
        <Image src="/src/assets/logo.png" alt="logo" />
        <Text fontFamily={"sans-serif"} fontSize={"3xl"} as={"b"}>
          Forgot password
        </Text>
        <ForgetPasswordForm />
        <Button>Send Instruction</Button>
        <Flex>
          <Text>Already have account?</Text>
          <Link color={"#04A51E"}>Login</Link>
        </Flex>
      </Container>
    </div>
  );
}
