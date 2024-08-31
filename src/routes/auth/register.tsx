import {
  Button,
  Container,
  Flex,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RegisterForm } from "../../features/auth/component/register-form";

export default function RegisterRoute() {
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
          <Text fontSize={"3xl"}>Create account Circle</Text>

          <RegisterForm />
          <Button bgColor={"tweet.green"} textColor={"tweet.putih"}>
            Create
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
