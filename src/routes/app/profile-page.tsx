import MyProfilePage from "../../features/Profile-page/component/myProfile-page";
import { ProfileBarRight } from "../../features/Profile-page/component/profilebar-right";
import { MainLayout } from "../../features/app/layout/app-layout";

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
