import MyProfilePage from "../../features/Profile-page/component/Profile-page";
import { ProfileBarRight } from "../../features/Profile-page/component/profile-bar-right";
import { MainLayout } from "../../component/layout/app-main-layout";

export default function ProfilePageRoute() {
  return (
    <MainLayout
      mainContent={
        <>
          <MyProfilePage />
        </>
      }
      rightContent={
        <>
          <ProfileBarRight />
        </>
      }
    />
  );
}
