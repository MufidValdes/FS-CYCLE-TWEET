import { Button, Container, Image, Stack, Text } from "@chakra-ui/react";
import { ResetPasswordForm } from "../../features/auth/component/reset-password-form";

export default function ResetPasswordRoute() {
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
          <Text fontSize={"3xl"}>Reset password</Text>
          <ResetPasswordForm />
          <Button bgColor={"tweet.green"} textColor={"tweet.putih"}>
            Create New Password
          </Button>
        </Stack>
      </Container>
    </>
  );
}
