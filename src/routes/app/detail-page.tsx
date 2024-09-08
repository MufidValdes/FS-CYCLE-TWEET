import { SidebarRight } from "../../features/home/component/sidebar-right";
import DetailPostPage from "../../features/detail-page/component/detail-post-page";
import { MainLayout } from "../../features/app/layout/app-layout";

export default function DetailPageRoute() {
  return (
    <MainLayout
      mainContent={
        <>
          <DetailPostPage />
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
