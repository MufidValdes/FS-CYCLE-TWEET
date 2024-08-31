import { Grid, GridItem } from "@chakra-ui/react";
import { SidebarLeft } from "../../features/home/component/sidebar-left";
import { HomeBase } from "../../features/home/component/home-base";

export default function HomeRoute() {
  return (
    <Grid
      h="100vh"
      p="20px"
      gridTemplateColumns={"repeat(4, 1fr)"}
      templateAreas={`
      "sidebar-left main main sidebar-right"
      "sidebar-left main main sidebar-right"`}
      templateRows="repeat(2, 1fr)"
      gap="2"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem colSpan={1} rowSpan={2} area={"sidebar-left"}>
        <SidebarLeft />
      </GridItem>
      <GridItem colSpan={2} rowSpan={2} bg="papayawhip" area={"main"}>
        <HomeBase />
      </GridItem>
      <GridItem colSpan={1} rowSpan={2} bg="tomato" area={"sidebar-right"}>
        sidebar-right
      </GridItem>
    </Grid>
  );
}
