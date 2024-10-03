// components/Layout.tsx
import { Container, Stack, Image, Text } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AuthLayout = ({ children, title }: LayoutProps) => (
  <Container maxW="container.base" mt="8rem" textColor="tweet.putih">
    <Stack gap="16px">
      <Image src="/src/assets/logo.png" alt="logo" w="108px" />
      <Text fontSize="3xl">{title}</Text>
      {children}
    </Stack>
  </Container>
);
