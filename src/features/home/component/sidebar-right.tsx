import { Stack } from "@chakra-ui/react";
import { RightBarMyProfile } from "../../app/component/RightBarMyProfile";

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
