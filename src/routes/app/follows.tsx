import { MainLayout } from "../../component/layout/app-layout";
import FollowsTabs from "../../features/follows/component/follows-tab";
import { SidebarRight } from "../../features/home/component/sidebar-right";

export default function FollowRoute() {
  return (
    <MainLayout
      mainContent={
        <>
          <FollowsTabs />
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
