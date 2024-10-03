import { Stack } from "@chakra-ui/react";
import { ItemSuggestedForYou } from "../../../component/ui/item-suggested-for-you";
import { RightCreditItem } from "../../../component/ui/right-credit-item";

// SidebarRight Component
export function ProfileBarRight() {
  return (
    <Stack gap="4" px="5" py="5">
      <ItemSuggestedForYou />
      <RightCreditItem />
    </Stack>
  );
}
