import {
  Button,
  Container,
  Flex,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ForgetPasswordForm } from "../../features/auth/component/forget-password-form";

export default function ForgetPasswordRoute() {
  return (
    <>
      <Container
        maxW="container.base"
        mt={"8rem"}
        textColor={"tweet.putih"}
        className="
      font-['Plus_Jakarta_Sans']
      "
      >
        <Stack gap="16px">
          <Image src="/src/assets/logo.png" alt="logo" w={"108px"} />
          <Text fontSize={"3xl"}>Forgot password</Text>

          <ForgetPasswordForm />

          <Button bgColor={"tweet.green"} textColor={"tweet.putih"}>
            Send Instruction
          </Button>
          <Flex gap={"4px"}>
            <Text>Already have account?</Text>
            <Link color={"tweet.green"}>Login</Link>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
