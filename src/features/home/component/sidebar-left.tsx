import {
  Button,
  ButtonGroup,
  Image,
  Stack,
  Text,
  Link,
  Box,
  LinkOverlay,
} from "@chakra-ui/react";

export function SidebarLeft() {
  return (
    <Box
      bg={"black"}
      className="flex flex-col h-[100%] text-white py-5 px-5 justify-between"
    >
      <Stack gap="16px">
        <Link>
          <Image src="src/assets/logo.png" />
        </Link>

        <Link className="flex gap-2">
          <Image boxSize={"32px"} src="src/assets/icons/home-logo.png" />
          <Text as={"p"}>Home</Text>
        </Link>

        <Link className="flex gap-2">
          <Image src="src/assets/icons/user-search-logo.png" />
          <Text>Search</Text>
        </Link>

        <Link className="flex gap-2">
          <Image src="src/assets/icons/heart-logo.png" />
          <Text>Follows</Text>
        </Link>

        <Link className="flex gap-2">
          <Image src="src/assets/icons/profile-circle-logo.png" />
          <Text>Profile</Text>
        </Link>
        <Button backgroundColor={"#04A51E"} color={"white"}>
          Create Post
        </Button>
      </Stack>
      <ButtonGroup>
        <Image boxSize="32px" src="src/assets/icons/logout-logo.png" />
        <LinkOverlay>Log Out</LinkOverlay>
      </ButtonGroup>
    </Box>
  );
}
