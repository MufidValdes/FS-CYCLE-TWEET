import { MainLayout } from "../../component/layout/app-main-layout";
import { HomeBase } from "../../features/home/component/home-base";
import { SidebarRight } from "../../features/home/component/sidebar-right";

export default function HomeRoute() {
  return (
    <MainLayout
      mainContent={
        <>
          <HomeBase />
        </>
      }
      rightContent={
        <>
          <SidebarRight />
        </>
      }
    />
  );
}
