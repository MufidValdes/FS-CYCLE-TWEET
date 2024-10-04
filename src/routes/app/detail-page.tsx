import { SidebarRight } from "../../component/ui/right-sidebar";
import { MainLayout } from "../../component/layout/app-main-layout";
import PostPage from "../../features/detail/component/detail-post-page";

export default function DetailPageRoute() {
  return (
    <MainLayout
      mainContent={
        <>
          <PostPage />
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
