import { Stack } from "@chakra-ui/react";
import { RightBarMyProfile } from "./right-bar-my-Profile";
import { RightCreditItem } from "./right-credit-item";
import { ItemSuggestedForYou } from "./item-suggested-for-you";

// SidebarRight Component
export function SidebarRight() {
  return (
    <Stack gap="4" px="5" py="5">
      <RightBarMyProfile />
      <ItemSuggestedForYou />
      <RightCreditItem />
    </Stack>
  );
}
