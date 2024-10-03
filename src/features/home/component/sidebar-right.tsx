import { Stack } from "@chakra-ui/react";
import { RightBarMyProfile } from "../../../component/ui/right-bar-my-Profile";

// SidebarRight Component
export function SidebarRight() {
  return (
    <Stack gap="4" px="5" py="5">
      <RightBarMyProfile />
      {/* <SuggestedForYou />
      <Credit /> */}
    </Stack>
  );
}
