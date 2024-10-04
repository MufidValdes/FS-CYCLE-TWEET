import { MainLayout } from "../../component/layout/app-main-layout";
import FollowsTabs from "../../features/follows/component/follows-tab";
import { SidebarRight } from "../../component/ui/right-sidebar";

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
