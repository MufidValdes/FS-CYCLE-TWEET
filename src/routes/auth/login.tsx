import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { LoginForm } from "../../features/auth/component/login-form";
import { AuthLayout } from "../../features/auth/layout/auth-layout";

export default function LoginRoute() {
  return (
    <>
      <AuthLayout title="Login To Circle">
        <LoginForm />
        <Link href="/forget-password" textAlign={"end"}>
          Forget password?
        </Link>
        <Button bg="tweet.green" width="full" color="tweet.putih">
          Login
        </Button>

        <Flex gap="4px">
          <Text as="span">Don't have an account yet?</Text>
          <Link href="/register" color="tweet.green">
            Create account
          </Link>
        </Flex>
      </AuthLayout>
    </>
  );
}
