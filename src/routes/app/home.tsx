import { Grid, GridItem } from "@chakra-ui/react";
import { SidebarRight } from "../../features/home/component/sidebar-right";
import { HomeBase } from "../../features/home/component/home-base";
import SidebarLeft from "../../features/home/component/Left-sidebar";

export default function HomeRoute() {
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
        <HomeBase />
      </GridItem>
      <GridItem colSpan={2} rowSpan={2} area={"sidebar-right"}>
        <SidebarRight />
      </GridItem>
    </Grid>
  );
}
