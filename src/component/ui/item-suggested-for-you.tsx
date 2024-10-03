import { Card, Heading } from "@chakra-ui/react";
import ItemFollowing from "./item-following";

// Data pengguna yang disarankan
const suggestedUsers = [
  {
    name: "Mohammed Jawahir",
    handle: "@em.jawahir",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Stella Audhina",
    handle: "@stella.audhina",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Indah Pra Karya",
    handle: "@indahpra",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "John Doe",
    handle: "@john.doe",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Jane Smith",
    handle: "@jane.smith",
    avatar: "https://bit.ly/dan-abramov",
  },
];

// SuggestedForYou Component
export function ItemSuggestedForYou() {
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
