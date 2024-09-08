import { SidebarRight } from "../../features/home/component/sidebar-right";
import SearchBar from "../../features/search-page/search-bar";
import PageSearch from "../../features/search-page/search-page";
import { MainLayout } from "../../features/app/layout/app-layout";

export default function SearchPageRoute() {
  return (
    <MainLayout
      mainContent={
        <>
          <SearchBar />
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
