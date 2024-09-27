import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { ForgetPasswordForm } from "../../features/auth/auth-forget/component/forget-password-form";
import { AuthLayout } from "../../features/auth/layout/auth-layout";

export default function ForgetPasswordRoute() {
  return (
    <AuthLayout title="Forgot password">
      <ForgetPasswordForm />
      <Button bgColor={"tweet.green"} textColor={"tweet.putih"}>
        Send Instruction
      </Button>
      <Flex gap={"4px"}>
        <Text>Already have account?</Text>
        <Link href="/login" color={"tweet.green"}>
          Login
        </Link>
      </Flex>
    </AuthLayout>
  );
}
