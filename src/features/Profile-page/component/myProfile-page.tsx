import { Box } from "@chakra-ui/react";
import { RightBarMyProfile } from "../../app/component/RightBarMyProfile";
import TabsLayout from "../../app/component/item-tab";
import ItemPost from "../../app/component/ItemPost";

const profileTab = [
  {
    username: "Indah Pra Karya",
    handle: "indahpra",
    avatarUrl: "https://bit.ly/dan-abramov",
    postTime: "4h",
    postContent:
      "Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu.",
    postImage:
      "https://cdna.artstation.com/p/assets/images/images/079/767/316/large/-monster02small.jpg?1725778540",
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
];
export default function MyProfilePage() {
  return (
    <Box
      borderX="1px"
      borderColor="#3F3F3F"
      h="full"
      className=" text-white py-5 px-5 font-['Plus_Jakarta_Sans']"
    >
      <RightBarMyProfile />
      <TabsLayout
        title1={"All Post"}
        title2={"Media"}
        tabContent1={
          <>
            {profileTab.map((tabs, index) => (
              <>
                <ItemPost
                  key={index}
                  username={tabs.username}
                  handle={tabs.handle}
                  avatarUrl={tabs.avatarUrl}
                  postTime={tabs.postTime}
                  postContent={tabs.postContent}
                  postImage={tabs.postImage}
                  likesCount={23}
                  repliesCount={112}
                />
              </>
            ))}
          </>
        }
        tabContent2={undefined}
      />
    </Box>
  );
}
