import { Card, Heading } from "@chakra-ui/react";
import ItemFollowing from "./item-following";

// Data pengguna yang disarankan
const suggestedUsers = [
  {
    name: "Mohammed Jawahir",
    handle: "@em.jawahir",
    avatar: "src/assets/icons/avatar1.png",
  },
  {
    name: "Stella Audhina",
    handle: "@stella.audhina",
    avatar: "src/assets/icons/avatar2.png",
  },
  {
    name: "Indah Pra Karya",
    handle: "@indahpra",
    avatar: "src/assets/icons/avatar3.png",
  },
  {
    name: "John Doe",
    handle: "@john.doe",
    avatar: "src/assets/icons/avatar4.png",
  },
  {
    name: "Jane Smith",
    handle: "@jane.smith",
    avatar: "src/assets/icons/avatar5.png",
  },
];

// SuggestedForYou Component
export function SuggestedForYou() {
  return (
    <Card bgColor="tweet.profiles" textColor="tweet.putih" px="24px" py="8px">
      <Heading fontSize="20px" fontWeight="bold" py="8px">
        Suggested for you
      </Heading>
      {suggestedUsers.map((user, index) => (
        <ItemFollowing
          key={index}
          name={user.name}
          handle={user.handle}
          avatar={user.avatar}
        /> // Kirim data user sebagai props
      ))}
    </Card>
  );
}
