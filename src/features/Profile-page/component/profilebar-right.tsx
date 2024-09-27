import { Stack } from "@chakra-ui/react";
import { ItemSuggestedForYou } from "../../app/component/ItemSuggestedForYou";
import { CreditItem } from "../../app/component/CreditItem";

// SidebarRight Component
export function ProfileBarRight() {
  return (
    <Stack gap="4" px="5" py="5">
      <ItemSuggestedForYou />
      <CreditItem />
    </Stack>
  );
}
