import { Stack } from "@chakra-ui/react";
import { SuggestedForYou } from "../../app/component/item-SuggestedForYou";
import { Credit } from "../../app/component/item-Credit";

// SidebarRight Component
export function ProfileBarRight() {
  return (
    <Stack gap="4" px="5" py="5">
      <SuggestedForYou />
      <Credit />
    </Stack>
  );
}
