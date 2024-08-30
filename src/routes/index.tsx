import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./app/home";
import LoginRoute from "./auth/login";
import RegisterRoute from "./auth/register";
import ResetPasswordRoute from "./auth/reset-password";
import ForgetPasswordRoute from "./auth/forget-password";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
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
  ]);

  return <RouterProvider router={router} />;
}
