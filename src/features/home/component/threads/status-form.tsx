import useThread from "../../hooks/use-threads";
import {
  FormControl,
  Button,
  Input,
  Textarea,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";

export function StatusForm() {
  const { register, handleSubmit, onSubmit, errors } = useThread();

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
      <Image borderRadius="full" boxSize="40px" alt="Dan Abramov" />
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <Textarea
            {...register("content")}
            placeholder="What's on your mind?"
          />
          {errors.content && <p>{errors.content.message}</p>}

          <Input {...register("imageUrl")} placeholder="Image URL (optional)" />
          {errors.imageUrl && <p>{errors.imageUrl.message}</p>}

          <Button type="submit" bgColor="tweet.post" color="tweet.putih">
            Post
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}
