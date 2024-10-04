import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface ItemUserProps {
  name: string;
  handle?: string;
  avatar?: string;
}
// Komponen ItemFollowing dengan props
export default function ItemFollowing({ name, handle, avatar }: ItemUserProps) {
  // State untuk melacak apakah tombol sudah di-klik
  const [isFollowing, setIsFollowing] = useState(false);

  // Fungsi untuk menangani klik tombol
  const handleFollowClick = () => {
    setIsFollowing(!isFollowing); // Toggle status follow/following
  };
  return (
    <HStack py="8px" justifyContent="space-between">
      <Flex gap="16px" alignItems="center">
        <Image borderRadius="full" src={avatar} boxSize={"40px"} alt={name} />
        <VStack alignItems="start" fontSize="14px">
          <Text as="span" textColor="tweet.putih">
            {name}
          </Text>
          <Text as="span" textColor="tweet.gray">
            {handle}
          </Text>
        </VStack>
      </Flex>
      <Button
        w={isFollowing ? "100px" : "78px"}
        h="33px"
        rounded="full"
        variant={"outline"}
        fontSize="14px"
        textColor={isFollowing ? "tweet.gray" : "tweet.putih"} // Ubah warna teks
        onClick={handleFollowClick} // Tangani klik tombol
      >
        {isFollowing ? "Following" : "Follow"} {/* Ubah teks */}
      </Button>
    </HStack>
  );
}
