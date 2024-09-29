import { Stack } from "@chakra-ui/react";
import { ItemSuggestedForYou } from "../../../component/ui/ItemSuggestedForYou";
import { CreditItem } from "../../../component/ui/CreditItem";

// SidebarRight Component
export function ProfileBarRight() {
  return (
    <Stack gap="4" px="5" py="5">
      <ItemSuggestedForYou />
      <CreditItem />
    </Stack>
  );
}
