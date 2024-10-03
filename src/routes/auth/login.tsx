import { Flex, Link, Text } from "@chakra-ui/react";
import { AuthLayout } from "../../component/layout/app-auth-layout";
import { LoginForm } from "../../features/auth/auth-login/component/login-form";

export default function LoginRoute() {
  return (
    <>
      <AuthLayout title="Login To Circle">
        <LoginForm />
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
