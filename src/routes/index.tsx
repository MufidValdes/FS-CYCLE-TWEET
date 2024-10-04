import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginRoute from "./auth/login";
import RegisterRoute from "./auth/register";
import ResetPasswordRoute from "./auth/reset-password";
import ForgetPasswordRoute from "./auth/forget-password";
import ProfilePageRoute from "./app/profile-page";
import DetailPageRoute from "./app/detail-page";
import SearchPageRoute from "./app/search";
import FollowRoute from "./app/follows";
import ProtectedRoute from "./_protected-route";
import HomeRoute from "./app/home";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks/use-store";
import { getUserLogged } from "../app/store/store-auth-slice";

export function AppRouter() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserLogged());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginRoute />,
    },
    {
      path: "/register",
      element: <RegisterRoute />,
    },
    {
      path: "/reset-password",
      element: <ResetPasswordRoute />,
    },
    {
      path: "/forget-password",
      element: <ForgetPasswordRoute />,
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/detail",
          element: <DetailPageRoute />,
        },
        {
          path: "/search",
          element: <SearchPageRoute />,
        },
        {
          path: "/follows",
          element: <FollowRoute />,
        },
        {
          path: "/",
          element: <HomeRoute />,
        },
        {
          path: "/profile",
          element: <ProfilePageRoute />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
