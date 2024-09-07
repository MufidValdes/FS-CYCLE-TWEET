import { Stack } from "@chakra-ui/react";
import { SuggestedForYou } from "../../app/component/item-SuggestedForYou";
import { Credit } from "../../app/component/item-Credit";
import { RightBarMyProfile } from "../../app/component/item-myProfile";

// SidebarRight Component
export function SidebarRight() {
  return (
    <Stack gap="4" px="5" py="5">
      <RightBarMyProfile />
      <SuggestedForYou />
      <Credit />
    </Stack>
  );
}
