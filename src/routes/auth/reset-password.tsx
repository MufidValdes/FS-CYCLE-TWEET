import { Button, Container, Image, Text } from "@chakra-ui/react";
import { ResetPasswordForm } from "../../features/auth/component/reset-password-form";

export default function ResetPasswordRoute() {
  return (
    <div>
      <Container>
        <Image src="/src/assets/logo.png" alt="logo" />
        <Text fontFamily={"sans-serif"} fontSize={"3xl"} as={"b"}>
          Reset password
        </Text>
        <ResetPasswordForm />
        <Button>Create New Password</Button>
      </Container>
    </div>
  );
}
