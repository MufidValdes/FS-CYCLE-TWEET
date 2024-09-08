import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ItemFollowing from "../../app/component/item-following";

const followers = [
  {
    username: "Lina Kusuma",
    handle: "linakus",
    avatarUrl: "https://bit.ly/ryan-florence",
    postTime: "2h",
    postContent:
      "Ada yang tahu rekomendasi framework terbaik untuk proyek e-commerce?",
    likesCount: 75,
    repliesCount: 29,
  },
  {
    username: "Deni Prasetyo",
    handle: "denipras",
    avatarUrl: "https://bit.ly/tioluwani-kolawole",
    postTime: "8h",
    postContent:
      "Akhirnya bisa deploy aplikasi di AWS! Learning curve yang cukup curam.",
    likesCount: 94,
    repliesCount: 17,
  },
  {
    username: "Yusuf Arif",
    handle: "yusufarif",
    avatarUrl: "https://bit.ly/dan-abramov",
    postTime: "12h",
    postContent: "Menggunakan GraphQL untuk pertama kalinya, keren banget!",
    likesCount: 120,
    repliesCount: 40,
  },
  {
    username: "Tina Supriyadi",
    handle: "tinasupr",
    avatarUrl: "https://bit.ly/code-beast",
    postTime: "7h",
    postContent: "Mencoba desain UI di Figma, sangat membantu kolaborasi tim.",
    likesCount: 63,
    repliesCount: 12,
  },
];
const following = [
  {
    username: "Indah Pra Karya",
    handle: "indahpra",
    avatarUrl: "https://bit.ly/dan-abramov",
    postTime: "4h",
    postContent:
      "Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu.",
    likesCount: 36,
    repliesCount: 381,
  },
  {
    username: "Adi Nugroho",
    handle: "adinugroho",
    avatarUrl: "https://bit.ly/code-beast",
    postTime: "6h",
    postContent:
      "Just finished building my first full-stack app. Feeling proud!",
    likesCount: 102,
    repliesCount: 54,
  },
  {
    username: "Siti Fatimah",
    handle: "sitifat",
    avatarUrl: "https://bit.ly/sage-adebayo",
    postTime: "1d",
    postContent: "Apakah ada yang sudah coba fitur terbaru dari React 18?",
    likesCount: 87,
    repliesCount: 73,
  },
  {
    username: "Budi Santoso",
    handle: "budisant",
    avatarUrl: "https://bit.ly/ryan-florence",
    postTime: "3h",
    postContent:
      "Baru belajar TypeScript, ternyata lebih mudah dari yang dibayangkan.",
    likesCount: 58,
    repliesCount: 22,
  },
];
export default function FollowsTabs() {
  return (
    <Tabs variant="unstyled">
      <TabList borderBottom="1px solid" borderColor="tweet.gray">
        <Tab
          w={"100%"}
          paddingY={3}
          textColor={"white"}
          fontWeight={500}
          fontSize={"16px"}
          lineHeight={"20px"}
          _selected={{
            position: "relative",
            _after: {
              content: '""',
              position: "absolute",
              width: "90%",
              height: "4px",
              bg: "tweet.green",
              borderRadius: "full", // Rounded ends for the line
              bottom: "-1px", // Adjust line placement
              left: "5%", // Center the line under the text
            },
          }}
        >
          Followers
        </Tab>
        <Tab
          w={"100%"}
          paddingY={3}
          color={"white"}
          fontWeight={500}
          fontSize={"16px"}
          lineHeight={"20px"}
          _selected={{
            position: "relative",
            _after: {
              content: '""',
              position: "absolute",
              width: "90%",
              height: "4px",
              bg: "tweet.green",
              borderRadius: "full", // Rounded ends for the line
              bottom: "-1px", // Adjust line placement
              left: "5%", // Center the line under the text
            },
          }}
        >
          Following
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel display={"flex"} flexDirection={"column"} gap={4}>
          {followers.map((follow, index) => (
            <ItemFollowing
              key={index}
              name={follow.username}
              handle={follow.handle}
              avatar={follow.avatarUrl}
            />
          ))}
        </TabPanel>
        <TabPanel display={"flex"} flexDirection={"column"} gap={4}>
          {following.map((follow, index) => (
            <ItemFollowing
              key={index}
              name={follow.username}
              handle={follow.handle}
              avatar={follow.avatarUrl}
            />
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
