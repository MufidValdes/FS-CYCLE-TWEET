import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Image,
  Flex,
  Text,
  VStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
interface EditProfileProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function EditProfileModal({
  isOpen,
  onClose,
}: EditProfileProps) {
  const [name, setName] = useState("✨ Stella Audhina ✨");
  const [username, setUsername] = useState("audhinafh");
  const [bio, setBio] = useState("picked over by the worms, and weird fishes");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg="#1D1D1D"
        textColor="tweet.putih"
        fontSize="14px"
        borderRadius="2xl"
        w="full"
        maxW="96"
      >
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box position="relative" mb={14}>
            <Image
              borderRadius="xl"
              w="full"
              h="40"
              objectFit="cover"
              src="src/assets/icons/cover-profile.png"
              alt="Cover Image"
            />
            <Flex position="absolute" top="32" left="5">
              <Image
                borderRadius="full"
                boxSize="24"
                border="4px solid"
                borderColor="stone.900"
                src="https://via.placeholder.com/100x100"
                alt="Avatar"
              />
            </Flex>
          </Box>

          <VStack spacing={4} align="stretch" gap="8px">
            <Box>
              <Text color="zinc.400" fontSize="xs" mb={1}>
                Name
              </Text>
              <Input
                variant="outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                color="white"
                borderColor="tweet.gray"
                _hover={{ borderColor: "neutral.500" }}
              />
            </Box>

            <Box>
              <Text color="zinc.400" fontSize="xs" mb={1}>
                Username
              </Text>
              <Input
                variant="outline"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                color="white"
                borderColor="tweet.gray"
                _hover={{ borderColor: "neutral.500" }}
              />
            </Box>

            <Box>
              <Text color="zinc.400" fontSize="xs" mb={1}>
                Bio
              </Text>
              <Textarea
                variant="outline"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                color="white"
                borderColor="tweet.gray"
                _hover={{ borderColor: "neutral.500" }}
                h="28"
              />
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="green"
            w="full"
            onClick={onClose}
            borderRadius="full"
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
