import { Flex, Grid, GridItem } from "@chakra-ui/react";
import SidebarLeft from "../../home/component/Left-sidebar";

interface LayoutProps {
  mainContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export const MainLayout = ({ mainContent, rightContent }: LayoutProps) => (
  <Grid
    p="20px"
    gridTemplateColumns="repeat(6, 1fr)"
    templateAreas={`
      "sidebar-left main main sidebar-right"
      "sidebar-left main main sidebar-right"`}
    templateRows="repeat(2, 1fr)"
    gap="2"
  >
    <GridItem colSpan={1} rowSpan={2} area="sidebar-left">
      <SidebarLeft />
    </GridItem>
    <GridItem colSpan={3} rowSpan={2} area="main">
      <Flex h="full" flexDir="column" borderX="1px" borderColor="#3F3F3F">
        {mainContent}
      </Flex>
    </GridItem>
    <GridItem colSpan={2} rowSpan={2} area="sidebar-right">
      {rightContent}
    </GridItem>
  </Grid>
);
