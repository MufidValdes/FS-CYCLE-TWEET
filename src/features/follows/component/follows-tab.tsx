import ItemFollowing from "../../../component/ui/ItemFollowing";
import TabsLayout from "../../../component/ui/item-tab";

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
    <TabsLayout
      title1={"Followers"}
      title2={"Following"}
      tabContent1={
        <>
          {followers.map((tab, index) => (
            <ItemFollowing
              key={index}
              name={tab.username}
              handle={tab.handle}
              avatar={tab.avatarUrl}
            />
          ))}
        </>
      }
      tabContent2={
        <>
          {following.map((tab, index) => (
            <ItemFollowing
              key={index}
              name={tab.username}
              handle={tab.handle}
              avatar={tab.avatarUrl}
            />
          ))}
        </>
      }
    />
  );
}
