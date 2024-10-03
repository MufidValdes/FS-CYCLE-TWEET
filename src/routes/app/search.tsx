import { SidebarRight } from "../../features/home/component/sidebar-right";
import PageSearch from "../../features/search/search-page";
import { MainLayout } from "../../component/layout/app-main-layout";

export default function SearchPageRoute() {
  return (
    <MainLayout
      mainContent={
        <>
          <PageSearch />
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
