"use client";

import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  FlexProps,
  Image,
  Button,
} from "@chakra-ui/react";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import { RiUserSearchLine, RiHome7Line, RiHeart3Fill } from "react-icons/ri";
import { IconType } from "react-icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: RiHome7Line },
  { name: "Search", icon: RiUserSearchLine },
  { name: "Follows", icon: RiHeart3Fill },
  { name: "Profile", icon: FaRegUserCircle },
];

const SidebarContent = ({ ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      h="full"
      {...rest}
    >
      <Flex ml="2" mt="20px" flexDir="column" gap="2">
        <Image
          src="src/assets/logo.png"
          h="48px"
          mr="auto"
          pl="20px"
          objectFit="contain"
        />
        <Box>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </Box>
      </Flex>
      <Box className="h-3/5 mx-4 flex flex-col mt-4 justify-between">
        <Button bgColor="tweet.green">Create Post</Button>
        <Button
          colorScheme="teal"
          variant="link"
          leftIcon={<HiOutlineArrowLeftStartOnRectangle />}
        >
          Log Out
        </Button>
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const SidebarWithHeader = () => {
  return (
    <>
      <SidebarContent display={{ base: "none", md: "block" }} />
    </>
  );
};

export default SidebarWithHeader;
