import { Box, Button } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";

export default function DetailPostPage() {
  return (
    <Box
      borderX="1px"
      borderColor="#3F3F3F"
      h="full"
      className="h-[100%]
   text-white 
   py-5 
   px-5
   font-['Plus_Jakarta_Sans']
   "
    >
      {/* title */}
      <Button
        fontSize="28px"
        textColor="tweet.putih"
        colorScheme="whiteAlpha"
        variant="link"
        leftIcon={<BiArrowBack />}
      >
        Status
      </Button>

      <Box></Box>
    </Box>
  );
}
