import { SidebarRight } from "../../component/ui/right-sidebar";
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
