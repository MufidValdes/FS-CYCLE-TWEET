import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks/use-store";

export default function ProtectedRoute() {
  const { user, accessToken } = useAppSelector((state) => state.auth);

  if (!accessToken) {
    // Jika user belum login, arahkan ke halaman login
    return <Navigate to="/login" replace />;
  }

  if (user?.id && user.role === "USER") {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
  return <Navigate to={"/login"} />;
}
