import { SidebarRight } from "../../features/home/component/sidebar-right";
import DetailPostPage from "../../features/detail-page/component/detail-post-page";
import { MainLayout } from "../../component/layout/app-main-layout";

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
