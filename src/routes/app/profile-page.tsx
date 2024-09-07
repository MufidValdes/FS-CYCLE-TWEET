import { Grid, GridItem } from "@chakra-ui/react";
import SidebarLeft from "../../features/home/component/Left-sidebar";
import MyProfilePage from "../../features/Profile-page/component/myProfile-page";
import { ProfileBarRight } from "../../features/Profile-page/component/profilebar-right";

export default function ProfilePageRoute() {
  return (
    <Grid
      p="20px"
      gridTemplateColumns={"repeat(6, 1fr)"}
      templateAreas={`
    "sidebar-left main main sidebar-right"
    "sidebar-left main main sidebar-right"`}
      templateRows="repeat(2, 1fr)"
      gap="2"
    >
      <GridItem colSpan={1} rowSpan={2} area={"sidebar-left"}>
        <SidebarLeft />
      </GridItem>
      <GridItem colSpan={3} rowSpan={2} area={"main"}>
        <MyProfilePage />
      </GridItem>
      <GridItem colSpan={2} rowSpan={2} area={"sidebar-right"}>
        <ProfileBarRight />
      </GridItem>
    </Grid>
  );
}
