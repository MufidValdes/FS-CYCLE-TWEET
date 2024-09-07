import { Box, Button, Image, Text, Input } from "@chakra-ui/react";

interface FormStatusProps {
  avatarUrl: string;
  placeholderText: string;
}
export default function FormStatus({
  avatarUrl,
  placeholderText,
}: FormStatusProps) {
  return (
    <Box
      display="flex"
      gap="20px"
      w="full"
      py="16px"
      px="20px"
      alignItems="center"
      borderBottom="1px"
      borderColor="#3F3F3F"
    >
      <Image
        borderRadius="full"
        boxSize="40px"
        src={avatarUrl}
        alt="Dan Abramov"
      />
      <Input type="text" placeholder={placeholderText} w="full" />
      <Image src="src/assets/icons/gallery-add-logo.png" alt="gallery" />
      <Button bgColor="tweet.post" color="tweet.putih">
        <Text as="span">Post</Text>
      </Button>
    </Box>
  );
}
